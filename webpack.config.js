const htmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackDeployPlugin = require('html-webpack-deploy-plugin');
const deployConfig = new HtmlWebpackDeployPlugin({
  packages: {
    'react': {
      scripts: {
        variableName: 'React',
        path: 'react.production.min.js',
        cdnPath: 'umd/react.production.min.js',
      }
    },
    'react-dom': {
      scripts: {
        variableName: 'ReactDOM',
        path: 'react-dom.production.min.js',
        cdnPath: 'umd/react-dom.production.min.js',
      }
    }
  },
  useCdn: true,
  getCdnPath: (packageName, packageVersion, packagePath) => `https://unpkg.com/${packageName}@${packageVersion}/${packagePath}`
});


module.exports = {
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      inject: true,
      template: "./public/index.html"
    }),
    deployConfig
  ]
};


module.exports = {
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      inject: true,
      template: "./public/index.html"
    }),
    deployConfig
  ]
};