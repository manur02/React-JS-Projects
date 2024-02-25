import React from 'react';

const arr = [1, 2, 3, 4, 5]

const square = arr.map(function(item){
    return item * item;
})

const stringArr = ["apple", "banana", "cranberry", "dragonfruit", "orange"]

const upperCaseArr = stringArr.map((word) => {
    return word[0].toUpperCase() + word.slice(1);
})

function Array(){
    return(
        <div>
            <h1>{square}</h1>
            <h1>{upperCaseArr}</h1>
        </div>
    )
}

export default Array;