import React from "react";
import "../styles/Academic.css";
import ifmaitz from "../assets/ifmaitz.png";
import isep from "../assets/isep.png";

function Academic() {
    return(
        <div className="academic">
            <h3 className="academic_title">Where I’ve Studied</h3>
            <div className="academics_logos">
                <img src={ifmaitz} alt="IFMA"className="academic_logo"/>    
                <img src={ifmaitz} alt="IFMA"className="academic_logo"/>
                <img src={isep} alt="ISEP"className="academic_logo"/>
            </div>
        </div>

    );
}

export default Academic;