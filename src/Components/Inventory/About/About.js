import React, { useEffect, useState } from "react";
import "./About.css";
import { PiHandWavingThin } from "react-icons/pi";
import { SlArrowDown } from "react-icons/sl";
import { useInView } from 'react-intersection-observer';
import { motion } from "framer-motion";
import { FaLocationDot } from "react-icons/fa6";
const About = ({ nextPage }) => {
    const [useArrow, setArrow] = useState(true);
    useEffect(() => {
        const handleScroll = () => {
            setArrow(window.scrollY === 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const name = "<AjaySingh/>"
    const arrowClickHandler = () => {
        setArrow(false);
        nextPage();
        if (window.scrollY === 0)
            setArrow(true);
        window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
        // ref.current?.scrollIntoView({ behavior: 'smooth' });

    }
    return (
        <motion.div
            // animate={{ y: 90 }}
            // transition={{ ease: "easeOut", duration: 2 }}

            className="About"

        >
            <div className="intro">
                <h4
                    animate={{}}
                    transition={{ ease: "easeOut", duration: 2 }}
                    className="intro__"> Hello <PiHandWavingThin />, Thank you visiting, </h4>
                <h1 className="intro__name"> {name}</h1>

                <h2 className="intro__tagline"> A Web Weaving Wizardry </h2>
                <p className="intro__description">A passionate software developer with a mission to transform innovative ideas into robust and scalable digital solutions . With a keen eye for detail and a love for elegant code, I navigate the ever-evolving landscape of technology.</p>
                <div className="location"><FaLocationDot/> INDIA </div>
            </div>
            {useArrow ? (<div className="arrow"><SlArrowDown className="next-page__arrow" onClick={arrowClickHandler} /></div>) : (<></>)}
        </motion.div>
    );
}

export default About;