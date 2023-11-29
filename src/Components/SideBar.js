import React from "react";
import "./SideBar.css";
import { FaGithub} from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

const SideBar = () =>{

    return(
        <div className="side-bar">
            <div className="github">
            <FaGithub />
            </div>
            
            <CiLinkedin className="linkedin"/>

        </div>
    )

} 


export default SideBar;