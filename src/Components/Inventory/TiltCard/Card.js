import React from "react";
// import { Card } from "react-bootstrap";
import Tilt from 'react-parallax-tilt';
import { FaJava } from "react-icons/fa";
import "./Card.css";
import { motion } from "framer-motion";

const Card =(props)=>{
    const classes =  'card ' + props.className; 
    // const classes = 'card' + props.className;
    console.log(classes);
    return(
        <Tilt
            tiltEnable = {true}
            className={classes}
            tiltAngleXInitial={0}
            tiltAngleYInitial={0}
            glareEnable={true}
        >  {/* <FaJava className="card__icon"/> */}
        {props.children}
        </Tilt>

    );

}

export default Card; 