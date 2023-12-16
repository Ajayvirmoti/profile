import React from "react";
import About from "./About/About.js";
import { useState } from "react";
import { SlArrowDown } from "react-icons/sl";
import "./Inventory.css";
import { SlActionRedo } from "react-icons/sl";
import AnimatedComponent from "../Theme/AnimatedComponent.js";
import Tilt from 'react-parallax-tilt';
import img from "./photo.jpg";
import Skills from "./Skills/Skills.js";
import Projects from "./Projects/Projects.js";

import Card from "./TiltCard/Card.js"
import { delay } from "framer-motion";
const Inventory = () => {
    const [isHome, setNextPage] = useState(false);
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    const nextPageHandler = () => {
        setNextPage(false);
        
        sleep(200).then(() => { 
            window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
            
            console.log('World!'); });
        
    }
    console.log(isHome);

    const about = <div className="inventory__about"><About nextPage={nextPageHandler} /></div>;
    return (
        <>  <div className="inventory">{about}</div>
            {
                isHome ? <></> :
                       <div className="inventory"> <Skills className="test" /></div>

            }
        </>
    );
}

export default Inventory;