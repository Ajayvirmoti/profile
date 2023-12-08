import React from "react";
import "./About.css";
import { PiHandWavingThin } from "react-icons/pi";
import { SlArrowDown } from "react-icons/sl";
import { useInView } from 'react-intersection-observer';
const About = () => {

    const [ref, inView] = useInView({
        triggerOnce: true,
    });


    const name = "<AjaySingh/>"
    const arrowClickHandler = () => {
        // console.log("hello");
        window.scrollTo({top:window.innerHeight,behavior: "smooth"})
        // ref.current?.scrollIntoView({ behavior: 'smooth' });

    }
    return (

        <div className={`About,  ${inView ? 'fade-in' : ''}`}>
            <div ref= {ref} className="intro">
                <h4 className="intro__"> Hello <PiHandWavingThin />, Thank you visiting, </h4>
                <h1 className="intro__name"> {name}</h1>

                <h2 className="intro__tagline"> A Web Weaving Wizardry </h2>
                <p className="intro__description">A passionate software developer with a mission to transform innovative ideas into robust and scalable digital solutions . With a keen eye for detail and a love for elegant code, I navigate the ever-evolving landscape of technology.</p>
            </div>
            <div className="arrow"><SlArrowDown className="next-page__arrow" onClick={arrowClickHandler} /></div>
        </div>
    );
}

export default About;