import React from "react";
import About from "./About/About.js";
import "./Inventory.css";
import Skills from "./Skills/Skills.js";
import Projects from "./Projects/Projects.js";
import Others from "./Others/Others.js";
const Inventory = () => {
    return (
        <>  <div className="inventory" ><About/></div>
            <div className="inventory"><Projects /></div>
            <div className="inventory"><Skills className="test" /></div>
            <div className="inventory"><Others /></div>
        </>
    );
}

export default Inventory;