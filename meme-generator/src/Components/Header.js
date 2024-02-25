import React from "react";
import "./Header.css";

export default function Header(){
    return(
        <div className="Header">
            <img src="./meme-icon.png"
                className="Header-img"            
            ></img>
            <h2 className="Header-title">Meme Generator</h2>
            <h3 className="Header-project">React Course Project</h3>
        </div>
        
    )
}