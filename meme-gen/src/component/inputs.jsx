import React from "react";

export default function Input(props) {

    function updateHandler() {
        props.updateMeme(items => ({
            ...items,
            randomImg: props.imgUrl
        }))
    }
    return (
        <div className="container">
            <form>
                <input type="text" className="inputs Top-text"></input>
                <input type="text" className="inputs bottom-text"></input>
            </form>
            <div className="btns">
                <input type="button" value="Get meme images" className="btn" onClick={updateHandler}/>   
            </div>
        </div>
    )
}