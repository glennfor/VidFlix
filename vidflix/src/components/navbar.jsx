import React, {useEffect, useState} from 'react'
import "../assets/css/navbar.css"

import logo from "../assets/img/logo.png"
import   favicon from "../assets/img/favicon.png"


function NavBar(){
    const [show, handleShow] = useState(false);
    useEffect(()=>{
        window.addEventListener("scroll", ()=>{
            if(window.scrollY > 100){
                handleShow(true)
            } else handleShow(false)
        }) 

        return (()=>window.removeEventListener("scroll"))
    }, [])
    return(
        <div className={`nav ${show&& "nav-black"}`}>
            <img 
                className="nav-logo" 
                src= { logo}
                alt="VidFlix Logo" 
            />

            <img 
                className="nav-avatar" 
                src= {favicon} 
                alt="VidFlix Logo" 
            />
        </div>
    )
}

export default NavBar;