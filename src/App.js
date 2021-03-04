import Carousel from "./Components/Carousel";
import './Components/assets/css/App.css';

const App = () => {
  return (
      <div>
        <Carousel looped={true}>
          <div style={{width: '90%'}}>
            <h1>Literally any HTML CONTENT</h1>
            <p>You can wrap anything in this container 'Content'</p>
            <p>But it should fit the size of the carousel itself, overflow is hidden anyway</p>
          </div>

          <img
              style={{width: '80%'}}
              src='https://i.imgflip.com/3bug1o.png'
              alt=''
          />

          <img
              style={{width: '100%'}}
              src='http://arcanumdeepsecrets.files.wordpress.com/2010/06/blast_500x500.jpg'
              alt=''
          />

          <div style={{width: '90%'}}>
            <h1>Dear Diary!</h1>
            <p>My life is great, and I love this day, it makes me feel fulfilled or something, I have perfect...</p>
          </div>
        </Carousel>
      </div>
  );
};

export default App;
