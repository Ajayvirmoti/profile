import React from "react";
import "./Projects.css";
import Data from "../../Assets/ProfileData.json";
import Card from "../../TiltCard/Card";
import { FaProjectDiagram } from "react-icons/fa";
import { PiGithubLogoFill } from "react-icons/pi";

const Projects = () => {
    // Handle logo click
    const handleGithubClick = (githubUrl) => {
        window.open(githubUrl, "_blank");
    };

    return (
        <div className="projects" id="Projects">
            <h1 className="projects__title">Projects</h1>
            <div className="projects__grid">
                {Data.ProjectData.map((data) => (
                    <div className="scroll-animation" key={data.project.title}>
                        <Card className="project__card">
                            <header className="project__card__header">
                                <div className="header-icon">
                                    <FaProjectDiagram />
                                </div>
                                {/* GitHub Logo with onClick */}
                                <div
                                    className="header-icon"
                                    onClick={() => handleGithubClick(data.project.github)}
                                >
                                    <PiGithubLogoFill />
                                </div>
                            </header>

                            <img
                                src={require("../../Assets/img/" + data.project.logo)}
                                alt={data.project.title}
                                className="project__banner"
                            />
                            <div className="project__card__title">
                                <h1 className="project__title">{data.project.title}</h1>
                                <div className="project__description">{data.project.about}</div>
                            </div>
                            <div className="project-tech">
                                {data.project.tech.map((tech, index) => (
                                    <div key={index} className="project-tech__name">
                                        {tech.name}
                                    </div>
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
