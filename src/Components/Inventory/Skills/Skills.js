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
console.log(skillsData);
const Skills = () => {

    // console.log(skillsData.FrontEnd.title);
    // console.log(skillsData);
    return (
        // <motion.div
        //     className="skill-container"
        //     id="Skills"

        // >
        //     <div className="skil-container__title">
        //         Skills <PiStackOverflowLogoThin/>
        //     </div>
        // <div className="skill-container__grid">
        //     {skillsData.map((skill, index) => (
        //         <Card key={index} className="grid-item">
        //             <div className="grid-item__props">
        //                 {skill.icon}
        //                 <p>{skill.title}</p>
        //             </div>
        //         </Card>
        //     ))}
        //     </div>
        // </motion.div>



        <div className="skill-container">
            {/* <div className="skills__Card">
                <div className="skills__title">
                    <h1>{skillsData.FrontEnd.title}</h1>
                </div>
                <div className="skill_grid">
                    {skillsData.FrontEnd.skills.map((skill, index) => (
                        // console.log(skill.name)
                        <div className="skill_name">
                            {skill.name}
                        </div>
                    ))}
                </div>
            </div>
            <div className="skills__Card">
                <div className="skills__title">
                    <h1>{skillsData.Backend.title}</h1>
                </div>
                <div className="skill_grid">
                   
                    {skillsData.Backend.skills.map((skill, index) => (
                        // console.log(skill.name)
                        <div className="skill_name">
                            {skill.name}
                        </div>
                    ))}
                </div>
            </div>
            <div className="skills__Card">
                <div className="skills__title">
                    <h1>Front End</h1>
                </div>
                <div className="skill_grid">
                    
                    {skillsData.Others.skills.map((skill, index) => (
                        // console.log(skill.name)
                        <div className="skill_name">
                            {skill.name}
                        </div>
                    ))}
                </div>
            </div> */}
            {/* {console.log(skillsData.skillsData)} */}
            {skillsData.skillsData.map((skillType) => (
                <div className="skills__Card">
                     {console.log(skillType)}
                    <div className="skills__title">
                        <h1>{skillType.skill.title}</h1>
                    </div>
                    <div className="skill_grid">

                        {skillType.skill.skills.map((skill, index) => (
                            
                            <div className="skill_name">
                                {skill.name}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>

    );
};

export default Skills;