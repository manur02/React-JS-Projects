import React from "react";

export default function Box(props){
    
    // const [on, setOn] = React.useState(props.on)

    const fillColor = {
        backgroundColor : props.on ? "#222222" : "transparent"
    } 

    // function toggle(){
    //     setOn(prevState => {
    //         return !prevState;
    //     })
    // }
    
    return(
        <div className="box" style={fillColor}
             onClick={props.handleClick}
        >
        </div>
    )
}