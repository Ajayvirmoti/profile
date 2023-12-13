import React from "react";
import "./Skills.css";
import { motion } from "framer-motion";
import Card from "../../TiltCard/Card";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaNodeJs } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { TbBrandTypescript } from "react-icons/tb";
import { GoDatabase } from "react-icons/go";
import { SiRedux } from "react-icons/si";
import { PiStackOverflowLogoThin } from "react-icons/pi";
import { FaLinux } from "react-icons/fa";
import { SiArchlinux } from "react-icons/si";
const skillsData = [
    { title: "ReactJs", icon: <FaReact /> },
    { title: "JavaScript", icon: <IoLogoJavascript /> },
    { title: "NodeJs", icon: <FaNodeJs /> },
    { title: "Java", icon: <FaJava /> },
    { title: "HTML", icon: <FaReact /> },
    { title: "CSS", icon: <IoLogoJavascript /> },
    { title: "SQL", icon: <GoDatabase /> },
    { title: "Redux", icon: <SiRedux /> },
    { title: "TypeScript", icon: <TbBrandTypescript /> },
    { title: "DSA", icon: <TbBrandTypescript /> },
    { title: "Linux", icon: <SiArchlinux /> },
    { title: "FireBase", icon: <TbBrandTypescript /> },
    { title: "Networking", icon: <GoDatabase /> },
    { title: "RestAPIs", icon: <SiRedux /> },
    
    

];
const Skills = () => {
    return (
        <motion.div
            className="skill-container"
            id="Skills"

        >
            <div className="skil-container__title">
                Skills <PiStackOverflowLogoThin/>
            </div>
            <div className="skill-container__grid">
                {skillsData.map((skill, index) => (
                    <Card key={index} className="grid-item">
                        <div className="grid-item__props">
                            {skill.icon}
                            <p>{skill.title}</p>
                        </div>
                    </Card>
                ))}
            </div>
        </motion.div>
    );
};

export default Skills;