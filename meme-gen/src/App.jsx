import React, {useState} from "react"
import memeData from "./memeData";
import Navbar from "./component/navbar"
import Input from "./component/inputs"
import Meme from "./component/meme"

export default function App() {
  const [memeImg, updateMemeImg] = useState(memeData)
  const memeImgArray = memeImg.data.memes;
  const randomNumber = Math.floor(Math.random() * memeImgArray.length)
  let url = memeImgArray[randomNumber].url

  const [meme, updateMeme] = useState({
    topText: "",
    bottomText: "",
    randomImg: url,
  })

  return (
    <div className="app-container">
      <Navbar />
      <Input
        updateMeme={updateMeme}
         imgUrl={url}/>
      <Meme memeImg={ meme.randomImg} />
    </div>
  )
}