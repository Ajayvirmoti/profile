import React from "react";
// import { Card } from "react-bootstrap";
import Tilt from 'react-parallax-tilt';
import { FaJava } from "react-icons/fa";
import "./Card.css";

const Card =()=>{
    return(
        <Tilt
            tiltEnable = {true}
            className="tilt__card"
            tiltAngleXInitial={0}
            tiltAngleYInitial={0}
            glareEnable={true}
        >
            <FaJava className="card__icon"/>
        </Tilt>

    );

}

export default Card; 