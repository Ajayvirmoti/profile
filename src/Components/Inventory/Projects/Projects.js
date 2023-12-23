import React from "react";
import "./Projects.css";
import Data from "../Assets/Projects.json";
import Card from "../TiltCard/Card";
import { FaProjectDiagram } from "react-icons/fa";
import { PiGithubLogoFill } from "react-icons/pi";
// import img from "../Assets/img/nex.gif"
// import { toBeRequired } from "@testing-library/jest-dom/matchers";
// import nexBanner from "../Assets/img/nex.gif";
// import charitableBanner from "../Assets/img/charitableBanner.jpg";
// import quizzerBanner from "../Assets/img/quizzBanner.png";
// import hyprBanner from "../Assets/img/hyprBanner.jpg";
// import GetImg from "./GetImg.js";
// import { color, domMax } from "framer-motion";
// import ScrollAnimation from "react-animate-on-scroll";
const Projects = () => {
    // const logo = require(Data.ProjectsData[0].project.logo).default;
    // const temp = require("../Assets/img/");
    return (
        <div className="projects" id="Projects">
            <h1 className="projects__title">Projects</h1>
            {/* <img src={nexBanner}/> */}
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
                            
                            <img src={require("../Assets/img/" + data.project.logo)} className="project__banner" />
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