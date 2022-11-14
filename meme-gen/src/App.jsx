import React, {useState, useEffect} from "react"
import Navbar from "./component/navbar"
import Input from "./component/inputs"
import Meme from "./component/meme"

export default function App() {
  const [memeImg, updateMemeImg] = useState([])
  const [initDisplay, updateinitDisplay] = useState("")
  const [meme, updateMeme] = useState({
    topText: "",
    bottomText: "",
    randomImg: "https://i.imgflip.com/30b1gx.jpg",
    // randomImg: initDisplay,
  })

  useEffect(() => {
    (async() => {
      const res = await fetch("https://api.imgflip.com/get_memes")
      const data = await res.json()
      // This use state displays image on page loads
      updateinitDisplay(
          data.data.memes[Math.floor(Math.random() * data.data.memes.length)].url
        )
      // 
      updateMemeImg(data.data.memes)
    })()
  }, [])

  function handleInput(event) {
    const { name, value } = event.target
    updateMeme(item => ({
      ...item,
      [name]: value
    }))
  }

  return (
    <div className="app-container">
      <Navbar />
      <Input
        updateMeme={updateMeme}
        memeImg={memeImg}
        handleInput={handleInput}
      />
      <Meme
        memeImg={meme.randomImg}
        topText={meme.topText}
        bottomText={meme.bottomText}
      />
    </div>
  )
}