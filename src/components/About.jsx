import React from "react";
import "../styles/About.css";
import {FaGithub, FaLinkedin, FaEnvelope} from "react-icons/fa";
import profileImage from "../assets/@galeriamarcosmesquita-418.jpg";
import Companies from "../components/Companies";

function About() {
    return(
        <section id="about" className="about_container">
            <div className="about_content">
                <img src={profileImage} alt="Profile Image" className="about_image" />
                <div className="about_text">
                    <h2>Gerliane Chaves</h2>
                    <p>
                        I am an Engineering undergraduate with a focus on robotics and technology, with experience in academic research, software development, and solar energy. I have worked on projects involving navigation, locomotion, and computer vision in robots, as well as collaborating in multidisciplinary teams to create applied technological solutions.
                    </p>
                    <div className="about_icons">
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
            </div> 

            <Companies/>

        </section>

    );
}

export default About;