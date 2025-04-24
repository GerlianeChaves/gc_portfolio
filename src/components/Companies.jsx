import React from "react";
import "../styles/Companies.css";
import cesar from "../assets/CESAR.png";
import uw from "../assets/uwlogo.png";
import wizzi from "../assets/WIZZI.png";
import dvm from "../assets/DVM.png";


function Companies() {
    return(
        <div className="companies">
            <h3 className="companies_title">Where I’ve Worked</h3>

            <div className="companies_logos">
                <img src={cesar} alt="CESAR"className="company_logo"/>                        
                <img src={uw} alt="CESAR"className="company_logo"/>
                <img src={wizzi} alt="Wizzi"className="company_logo"/>
                <img src={dvm} alt="CESAR"className="company_logo"/>
            </div>
            
        </div>

    );
}

export default Companies;