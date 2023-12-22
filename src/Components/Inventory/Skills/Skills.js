import React from "react";
import "./Skills.css";
import { motion } from "framer-motion";
import Card from "../TiltCard/Card";
import { FaReact, FaNodeJs, FaJava, FaLinux } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { TbBrandTypescript } from "react-icons/tb";
import { GoDatabase } from "react-icons/go";
import { SiRedux, SiArchlinux } from "react-icons/si";
import { PiStackOverflowLogoThin } from "react-icons/pi";
import skillsData from "../Assets/Skill_Set.json";
import Jello from 'react-reveal/Jello';
import RubberBand from 'react-reveal/RubberBand';
// const skillsData = [
//     { title: "ReactJs", icon: <FaReact /> },
//     { title: "JavaScript", icon: <IoLogoJavascript /> },
//     { title: "NodeJs", icon: <FaNodeJs /> },
//     { title: "Java", icon: <FaJava /> },
//     { title: "HTML", icon: <FaReact /> },
//     { title: "CSS", icon: <IoLogoJavascript /> },
//     { title: "SQL", icon: <GoDatabase /> },
//     { title: "Redux", icon: <SiRedux /> },
//     { title: "TypeScript", icon: <TbBrandTypescript /> },
//     { title: "DSA", icon: <TbBrandTypescript /> },
//     { title: "Linux", icon: <SiArchlinux /> },
//     { title: "FireBase", icon: <TbBrandTypescript /> },
//     { title: "Networking", icon: <GoDatabase /> },
//     { title: "RestAPIs", icon: <SiRedux /> },


// ];
// console.log(skillsData);
const Skills = () => {
    let borderCol = "";
    return (
        <div className="skill-container" id="Skills">
            <RubberBand>
                <h1 className="skill-container__title">What I Know</h1>
            </RubberBand>
            <div className="skill-container__Cards">
                {skillsData.skillsData.map((skillType) => (
                    <Jello>
                        <div className="skills__Card">
                            {/* {console.log(skillType)} */}
                            <div className="skills__title">
                                <h1>{skillType.skill.title}</h1>
                            </div>
                            <div className="skill_grid">

                                {skillType.skill.skills.map((skill) => (

                                    <>
                                        {/* { borderCol = skill.borderCol } */}
                                        <div className="skill_name" style={{ borderColor: skill.borderCol }}>
                                            {skill.name}
                                            {/* {console.log(skill.borderCol)} */}

                                        </div>
                                    </>

                                ))}
                            </div>

                        </div>

                    </Jello>
                ))}
            </div>

        </div>
    );
};

export default Skills;