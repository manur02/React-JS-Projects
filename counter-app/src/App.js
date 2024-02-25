import React from 'react';
import './App.css';
import Count from './Count';

function App() {
  // const item = "Hello";
  // const paragraph = `<p> ${item}</p>`;

  const [count, setCount] = React.useState(0);

  function decreaseCount(){
    //setCount(count - 1);
    setCount(function(previousValue){
        return previousValue - 1;
    })
  }

  function increaseCount(){
    //setCount(count + 1);
    setCount (previousValue => previousValue + 1)
  }

  return (
      
    <div className="counter">
      {/* <h1>{paragraph}</h1> */}
      <button className="counter-minus" onClick={decreaseCount}>–</button>
      <Count number ={count}/>
      <button className="counter-plus" onClick={increaseCount}>+</button>
    </div>
  );
}

export default App;
