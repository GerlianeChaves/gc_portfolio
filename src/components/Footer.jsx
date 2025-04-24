import React from "react";
import {FaGithub, FaLinkedin, FaEnvelope} from "react-icons/fa";
import "../styles/Footer.css";

function Footer(){
    return(
        <section id = "contact">

            <footer className="footer">
                <div className="footer_container">
                    <div className="footer_text">
                        <h3>Let’s Talk</h3>
                        <p>I’m open to new opportunities and collaborations. Feel free to reach out!</p>
                    </div>

                    <div className="footer_links">
                        <a href="https://github.com/GerlianeChaves" target="_blank" rel="noopener noreferrer">
                            <FaGithub/>
                        </a>
                        
                        <a href="https://www.linkedin.com/in/gerlianechaves/" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin/>
                        </a>
                    
                        <a href="mailto:gerliane.schaves@gmail.com" >
                                <FaEnvelope/>
                        </a>
                    </div>
                </div>
            </footer>
        </section>
    );
}

export default Footer;