import React from "react";
import "../styles/Companies.css";
import cesar from "../assets/cesar.png";
import uw from "../assets/UW.jpg";
import wizzi from "../assets/company.png";
import dvm from "../assets/dvm.jpeg";


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