import React from 'react';
import './App.css';
import { eventWrapper } from '@testing-library/user-event/dist/utils';

function App() {
  //Any needed hooks
  const [animalData, setAnimalData] = React.useState([{
    animalName : "",
    animalPicture : ""
  }])

  //https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D
  //Functions for API
  //upload

  //search

  //clear

  // console.log(animalData.animalName);

  function handleChange(event){

      const {name, value} = event.target 
      setAnimalData(prevData => { 
        return[{
          ...prevData,
          [name] : value
        }]
      })
      
  }


  function addData(){
    console.log(animalData)
  }

  function searchImage(){

  }

  return (
    <div className="App">
      <h1>Animal Collection</h1>
      <h3>Add Animal</h3>
      
      <label htmlFor='animal-name'>Animal: </label>
      <input 
      type='text'
      id='animal-name'
      name='animalName'
      value={animalData.animalName}
      onChange={handleChange}      
      ></input>
    
      <label htmlFor='pic-address'>Picture Address: </label>
      <input
      type='text'
      id='pic-address'
      name='animalPicture'
      value={animalData.animalPicture}
      onChange={handleChange}
      ></input>
      <button onClick={addData}>Upload</button>
      

      <h3>Search Animal</h3>

      <label htmlFor='animal-name'>Animal: </label>
      <input 
      type='text'
      id='animal-name-forSearch'
      name='animalName'      
      ></input>
      <button onClick={searchImage}>Search</button>
      <section>
        <img src = {animalData.showImage ? animalData.animalPicture : ""} height={200} alt="Animal Image"/>
      </section>
      
      {/* Clear Animal Database button */}

    </div>
  )
}

export default App;
