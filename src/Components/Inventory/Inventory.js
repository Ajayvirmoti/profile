import React from "react";
import About from "./About/About.js";
import { useState } from "react";

import { SlArrowDown } from "react-icons/sl";
import "./Inventory.css";
import { SlActionRedo } from "react-icons/sl";

const Inventory = () =>{
    const[isHome,setNextPage] = useState("True");

    const nextPageHandler = () =>{
        setNextPage(true);
    }
    return(
        <div className="inventory">
            <div>.</div>
            <About/>
            
            <>
            jjj
            
            
            
            </>
        </div>
        

        
    );
}

export default Inventory;