import React from "react";

export default function Input(props) {
    function updateHandler() {
        const randomNum = Math.floor(Math.random() * props.memeImg.length)
        const url = props.memeImg[randomNum].url 
        props.updateMeme(items => ({
            items: "",
            randomImg: url
        }))
    }
    return (
        <div className="container">
            <form autoComplete="off">
                <input
                    type="text"
                    className="inputs Top-text"
                    placeholder="Top-text"
                    onChange={props.handleInput}
                    name="topText"
                >
                </input>
                <input
                    type="text"
                    className="inputs bottom-text"
                    placeholder="Bottom-text"
                    onChange={props.handleInput}
                    name="bottomText"
                >    
                </input>
            </form>
            <div className="btns">
                <input type="button" value="Get meme images" className="btn" onClick={updateHandler}/>   
            </div>
        </div>
    )
}