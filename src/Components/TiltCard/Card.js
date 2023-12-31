import React from "react";
import Tilt from 'react-parallax-tilt';
import "./Card.css";

const Card =(props)=>{
    const classes =  'card ' + props.className; 
    // const classes = 'card' + props.className;
    console.log(classes);
    return(
        <Tilt
            // tiltEnable = {true}
            className={classes}
            tiltAngleXInitial={0}
            tiltAngleYInitial={0}
            glareEnable={true}
            glareMaxOpacity={0.3}
            // glareColor="#4c8ce6"
            glareColor="#bf39897e"

            // className={}
        
            scale={1.02}
        >  {/* <FaJava className="card__icon"/> */}
        {props.children}
        </Tilt>

    );

}

export default Card; 