import React from "react";
import "./Projects.css";
import Data from "../Assets/Projects.json";
import Card from "../TiltCard/Card";
import { FaProjectDiagram } from "react-icons/fa";
import { PiGithubLogoFill } from "react-icons/pi";
// import img from "../Assets/img/nex.gif"

const Projects = () => {
    return (
        <div className="projects">
            <h1 className="project__title">Projects</h1>
            <div className="projects__grid">
                {Data.ProjectsData.map((data) => (
                    <Card className="project__card">
                        <header className="project__card__header">
                            <div className="header-icon"><FaProjectDiagram /></div>
                            <div className="header-icon"><PiGithubLogoFill /></div>
                        </header>
                        <img />
                        {/* {console.log(data.project.tech)} */}
                        <div className="project-tech">
                            {data.project.tech.map((tech) => (
                                <div className="project-tech__name">{tech.name}</div>
                            ))}
                        </div>
                    </Card>
                ))}
            </div>
        </div>


    );
}

export default Projects;
