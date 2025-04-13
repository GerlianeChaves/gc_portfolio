import React, { useState } from "react";
import "../styles/Projects.css";

const projectsDev = [
    {
        id: 1,
        title: "LUCA – Independent Cinema Magazine",
        description: "Interactive website featuring independent cinema reports with responsive layout, clickable content cards, and dynamic HTML/CSS/JS structure.",
        link: "https://github.com/GerlianeChaves/RevistaLuca.git",
        image: "/src/assets/LUCA.gif",
    },

    {
        id: 2,
        title: "Genetic Algorithm for TSP Optimization",
        description: "Solves the Traveling Salesman Problem using a genetic algorithm and local search strategy. Includes a Flask-based web interface for interactive input and result visualization.",
        link: "https://github.com/GerlianeChaves/AlgoritmoGenetico.git",
        image: "/src/assets/interfaceAG.png",
    },

    {
        id: 3,
        title: "Anomaly Detection with Isolation Forest",
        description: "This project applies the Isolation Forest algorithm to detect anomalies in energy consumption data, utilizing datasets from UC Irvine and E-REDES. It visualizes detected anomalies, aiding in identifying unusual consumption patterns.",
        link: "https://github.com/GerlianeChaves/IsolationForest",
        image: "/src/assets/resultadoE_redes.png",
    },
];

const projectsRobotic = [
    {
        id: 1,
        title: "Jackal Person Detection using YOLO and ROS",
        description: "This project enables real-time person detection on a Jackal robot using YOLO and ROS, allowing the robot to autonomously avoid collisions with detected people.",
        link: "https://github.com/GerlianeChaves/PIBIC22_23.git",
        image: "/src/assets/identificao.png",
    },

    {
        id: 2,
        title: "Maze Navigation Algorithm with Dijkstra",
        description: "This project implements a maze navigation algorithm using Dijkstra's algorithm and graphs to find the shortest path between two points, visualized with Python.",
        link: "https://github.com/GerlianeChaves/Dijkstra.git",
        image: "/src/assets/maze.gif",
    },
    
    {
        id: 3,
        title: "Live Person Tracker with YOLOv3",
        description: "This project tracks people in real-time using YOLOv3 and OpenCV, offering proximity detection and visualization via webcam or video processing.",
        link: "https://github.com/GerlianeChaves/LivePersonTracker.git",
        image: "/src/assets/person.png",
    },  

];

function Projects(){
    const [category, setCategory] = useState("dev");

    return(
        <section id="projects" className="projects_container">
            <h2>My Projects</h2>

            {/* Botões de Categoria */}

            <div className="projects_tabs">
                <button
                className={category === "robotics" ? "active" : ""}
                onClick={()=> setCategory("robotics")}>
                    Robotics
                </button>

                <button
                className={category === "dev" ? "active" : ""}
                onClick={()=> setCategory("dev")}>
                    Development
                </button>
            </div>

            {/* Grid de projetos */}

            <div className="projects_grid">
                {(category === "dev" ? projectsDev : projectsRobotic).map((Projects) => (
                    <div key={Projects.id} className="projects_card">
                        <img src={Projects.image} alt={Projects.title} className="project_image" />
                        <div className="project_info">
                            <h3>{Projects.title}</h3>
                            <p>{Projects.description}</p>
                            <a href={Projects.link} target="_blank" rel="noopener noreferrer">
                                <button className="learn_more">Learn More</button>
                            </a>
                        </div>                    
                    </div>
                ))}
            </div>

        </section>
    );
} 

export default Projects;