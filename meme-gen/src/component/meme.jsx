import React from "react";

export default function Meme(props) {
    return (
        <div className="meme-image">
            <img src={props.memeImg} alt="" />
            <h2 className="meme--text top">{ props.topText}</h2>
            <h2 className="meme--text bottom">{ props.bottomText}</h2>
        </div>
    )
}