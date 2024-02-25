import logo from './logo.svg';
import './App.css';
import Contact from './Contact';
import Array from './Array';

function App() {
  return (
  <div className='contact'>
  <Contact
    img="./Chandler.jpg"
    pname="Chandler Bing"
    phone="222-435-2842"
    email="misschanandlerbong@yahoo.com"
  />
  <Contact
    img="./Monica.jpg"
    pname="Monica Geller"
    phone="392-329-3232"
    email="thechefmonica@yahoo.com"
  />
  <Contact
    img="./Ross.jpg"
    pname="Ross Geller"
    phone="640-392-0982"
    email="dinosaurross@yahoo.com"
  />
  <Contact
    img="./Rachel.jpg"
    pname="Rachel Green"
    phone="193-675-8923"
    email="emmagellergreen@yahoo.com"
  />
  <Array/>
  </div>
  
  );
}

export default App;
