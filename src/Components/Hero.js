import React from 'react'
import Image from "../img/fun.jpg"
import "../App.css"


export default function Hero() {
    return (
        <section className="hero">
            <img src={Image} alt="img" className="hero--photo" />
            <h1 className="hero--header">Fun with Liel</h1>
            <p className="hero--text">Join unique interactive activities led by 
            Liel.</p>
        </section>
    )
}