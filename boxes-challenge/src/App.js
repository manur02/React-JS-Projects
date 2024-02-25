import React from 'react';
import './App.css';
import boxes from './boxes';
import Box from './Box';

function App(props) {

  const [squares, setSquarse] = React.useState(boxes)
  
  // const styles = {
  //   backgroundColor: props.darkMode ? "#222222" : "#cccccc"
  // }

   function toggle(id){
    setSquarse(prevSquares => {
      return (
        prevSquares.map(item => {
          return item.id === id ? {...item, on: !item.on} : item
        })
      )
    })


    //This is C style coding
      //   setSquarse(prevSquares => {
      //     const newSquares = []
      //     for(let i=0; i<prevSquares.length; i++){
      //       const currentSquare = prevSquares[i]
      //       if(currentSquare.id === id){
      //         const updatedSquare = {
      //           ...currentSquare, on : !currentSquare.on
      //         }
      //         newSquares.push(updatedSquare)
      //       }
      //     else{
      //       newSquares.push(currentSquare)
      //     }
      //   }
      //   return newSquares;
      // })
    }

  const squareElements = squares.map(item => {
      return <Box key={item.id} on= {item.on} handleClick= {() => toggle(item.id)}/>
  })



  return (
    <main>
      {squareElements}
    </main>
  );
}

export default App;
