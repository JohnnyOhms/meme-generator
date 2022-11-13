import React from "react";

export default function Meme(props) {
    return (
        <div className="meme-image">
            <img src={props.memeImg} alt=""/>
        </div>
    )
}