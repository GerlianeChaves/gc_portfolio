import React from "react";
import "../styles/Navbar.css"

function Navbar() {
    return(
        <nav className="navbar">
            <ul className="nav_links">
                <li><a href="#home">Home</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#media">Media</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;