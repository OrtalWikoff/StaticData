import React from 'react';
import logo from "../img/LielLogo.jpeg"
import "../App.css"

export default function Navbar() {
    return (
        <nav>
    <img src={logo} alt='#' className="nav--logo"/>
        </nav>
    )
}