import React from "react";
import "./SideBar.css";
import { FaGithub} from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { LuLinkedin } from "react-icons/lu";
import { RiLinkedinLine } from "react-icons/ri";
import { CiInstagram } from "react-icons/ci";

const SideBar = () =>{

    return(
        <div className="side-bar">
            <div className="github">
            <FaGithub />
            </div>
            
            {/* <CiLinkedin className="linkedin"/> */}
            {/* <LuLinkedin className="linkedin"/> */}
            <RiLinkedinLine className="logo"/>
            <CiInstagram className="logo"/>
            

        </div>
    )

} 


export default SideBar;