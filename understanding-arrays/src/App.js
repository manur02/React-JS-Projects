import logo from './logo.svg';
import './App.css';
import JokesData from "./JokesData";
import Jokes from './Jokes';
import Header from './Header';
import TravelJournal from './TravelJournal';
import TravelData from './TravelData';
import Welcome from './Welcome';

function App() {
  
  const ArrayElements = JokesData.map(item => {
    return (
      <Jokes setup = {item.setup}
             punchline = {item.punchline}
      />
    )
  })

  const Data = TravelData.map(item =>{
    return(
      <TravelJournal
          item = {item}
      />
    )
  })

  return (
    // <div className='Main-content'>
    //   <Header/>
    //   <Welcome/>
    //   {Data}
    // </div>
    <div>{ArrayElements}</div>
  )
}

export default App;




