import React from "react";
import navBarIcon from "./earth-icon.png";

export default function NavBar(){
    return(
        <nav className="navbar">
            <img className="navbar--icon" src={navBarIcon} />
            <h3 className="navbar--title">my travel journal.</h3>
        </nav>
    )
}