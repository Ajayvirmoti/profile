import React from "react";
import "./Projects.css";
import Data from "../../Assets/Projects.json";
import Card from "../../TiltCard/Card";
import { FaProjectDiagram } from "react-icons/fa";
import { PiGithubLogoFill } from "react-icons/pi";
const Projects = () => {
    return (
        <div className="projects" id="Projects">
            <h1 className="projects__title">Projects</h1>
            <div className="projects__grid">
                {Data.ProjectsData.map((data) => (
                    <div
    
                        className="scroll-animation"
                    >
                        <Card className="project__card">
                            <header className="project__card__header">
                                <div className="header-icon"><FaProjectDiagram /></div>
                                <div className="header-icon"><PiGithubLogoFill /></div>
                            </header>
                            
                            <img src={require("../../Assets/img/" + data.project.logo)} className="project__banner" />
                            <div className="project__card__title">
                                <h1 className="project__title">{data.project.title}</h1>
                                <div className="project__description">{data.project.about}</div>
                            </div>
                            <div className="project-tech">
                                {data.project.tech.map((tech) => (
                                    <div className="project-tech__name">{tech.name}</div>
                                ))}
                            </div>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;