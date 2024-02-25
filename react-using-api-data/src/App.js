import React from 'react';
import './App.css';

function App() {
const [starWarsData, setStarWarsData] = React.useState({});
const [count, setCount] = React.useState(1);

React.useEffect(function() {
  console.log("Effect function ran")
  fetch(`https://swapi.dev/api/people/${count}`)
  .then(res => res.json())
  .then(data => setStarWarsData(data))
}, [count])


  function getNextCharacter(){
    setCount(count+1)
    
  }
  
  return (
    <div>
        <button onClick={getNextCharacter}>Get Next Character </button>
        <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
        <h1>The count is {count}</h1>
    </div>
  );
}

export default App; 
