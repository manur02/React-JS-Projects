import './App.css';
import React from 'react';

export default function Star(props){
    
    const starIcon = props.isFilled ? "./filled-star-image.png" : "./star-image.png" 

    return( 
        <div>
            <img  
                  src={starIcon} 
                  className="card-favorite"
                  onClick={props.handleClick}
              />
        </div> 
    )
}