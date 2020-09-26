import React from 'react'
import './header.css'
export default function Header(){
    return(
        <div className="header-section">
            <div className="logo-title">
            <span><img className="logo-img" src="icons/icon-72x72.png" alt="logo"/> SendFileOnline.com</span>
            </div>
            <div className="about" onClick={_ => window.open("https://github.com/spurushottam13","_blank")}>
                About
            </div>
        </div>
    )
}