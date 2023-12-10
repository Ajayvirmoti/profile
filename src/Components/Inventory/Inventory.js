import React from "react";
import About from "./About/About.js";
import { useState } from "react";
import { SlArrowDown } from "react-icons/sl";
import "./Inventory.css";
import { SlActionRedo } from "react-icons/sl";
import AnimatedComponent from "../Theme/AnimatedComponent.js";
import Tilt from 'react-parallax-tilt';
import img from "./photo.jpg";
import Skills from "./Skills/Skills/Skills.js";

import  Card  from "./TiltCard/Card.js"
const Inventory = () => {
    const [isHome, setNextPage] = useState("True");

    const nextPageHandler = () => {
        setNextPage(true);
    }
    return (
        <div className="inventory" id="About">
            <div className="inventory__about"><About /></div>
            <Skills className="test"/>
           
        </div>
    );
}

export default Inventory;