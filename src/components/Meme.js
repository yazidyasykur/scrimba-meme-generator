import React from "react"
import memesData from "../memesData"

function Meme() {

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImages, setAllMemeImages] = React.useState(memesData)

    function randomNumber(length) {
        return Math.floor(Math.random() * length);
    }

    function handleClick() {
        let randomIndex = randomNumber(allMemeImages.data.memes.length)
        let url = allMemeImages.data.memes[randomIndex].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        })
        )
    }

    function handleChange(event){
        const {name, value} = event.target
        setMeme(prevState => ({
            ...prevState,
            [name] : value
        }))
    }

    return (
        <div className="form-container">
            <div className="text-input">
                <input 
                type="text" 
                placeholder="Top Text" 
                onChange={handleChange}
                name="topText"
                value={meme.topText}
                />
                <input 
                type="text" 
                placeholder="Bottom Text" 
                onChange={handleChange}
                name="bottomText"
                value={meme.bottomText}
                />
                <button type="submit" className="submit-button" onClick={handleClick}>Get a new Meme image</button>
            </div>
            <div className="meme">
                <h2 className="meme-text top">{meme.topText}</h2>
                <h2 className="meme-text bottom">{meme.bottomText}</h2>
                <img src={meme.randomImage} alt="meme" className="meme-image" />
            </div>
        </div>
    )
}

export default Meme