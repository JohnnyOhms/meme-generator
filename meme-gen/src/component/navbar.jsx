import React from "react"
import logo from "../image/logo.png"

export default function Navbar() {
    return (
        <nav className="nav-bar">
            <img src={logo} alt="" className="logo"/>
            <h2>Meme Generator</h2>
            <h4>React tutorial !!</h4>
        </nav>
    )
}
