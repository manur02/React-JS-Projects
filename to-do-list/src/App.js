import React from 'react';
import './App.css';

function App() {
  const [thingsArray, setThingsArray] = React.useState(["Thing 1", "Thing 2"])
    
  function addItem() {
      setThingsArray(currentList => 
        {
          return( 
            [...currentList, `Thing ${currentList.length + 1}`]
          )
        }
      )
  }

  const modifiedArray = thingsArray.map(item => {
    return(
      <p>{item}</p>
    )
  })
  
  return (
      <div>
          <button onClick={addItem}>Add Item</button>
          {modifiedArray}
      </div>
  )
}

export default App;
