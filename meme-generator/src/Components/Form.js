import React from "react";
import './Form.css';
// import MemeData from "./MemeData";

export default function Form(){

let url;
// const [memeImage, setMemeImage] = React.useState("https://i.imgflip.com/30b1gx.jpg");

const [meme, setMeme] = React.useState({
    topText: " ",
    bottomText: " ",
    randomImage : ""
});

const [allMemes, setAllMemes] = React.useState([])
//const [count, setCount] = React.useState(1);

React.useEffect(() => {

    async function getMemes(){
        const res = await fetch("https://api.imgflip.com/get_memes")
        const data = await res.json()
        setAllMemes(data.data.memes)
    }

    getMemes()

    // fetch("https://api.imgflip.com/get_memes")
    //     .then(res => res.json())
    //     .then(data => setAllMemes(data.data.memes))
}, [])



function getMemeImage(){
    // const memesArray = allMemes
    const randomNumber = Math.floor(Math.random() *  allMemes.length)
    url = allMemes[randomNumber].url
    setMeme(prevMeme => ({
        ...prevMeme,
        randomImage: url
    }))
    
}

function handleChange(event){
    const {name, value} = event.target
    setMeme(prevData => {
        return{ 
            ...prevData,
            [name] : value
        }
    })
}

return(
    <main>
        <div className="Form">
            <input 
                type="text" 
                className="Form-input" 
                placeholder="Top Text"
                name="topText"
                value={meme.topText}
                onChange={handleChange}
            ></input>
            <input 
                type="text"    
                className="Form-input" 
                placeholder="Bottom Text"
                name="bottomText"
                value={meme.bottomText}
                onChange={handleChange}
            ></input>
            <button className="Form-button"
            onClick={getMemeImage}>
            Get a new meme image
            </button>
            <div className="meme">
                <img src={meme.randomImage} className="meme-image" />
                <h2 className="meme-text top">{meme.topText}</h2>
                <h2 className="meme-text bottom">{meme.bottomText}</h2>
            </div>
        </div>
    </main>
)

}