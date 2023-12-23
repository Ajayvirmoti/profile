import React, { useEffect, useState } from "react";
import "./About.css";
import { PiHandWavingThin } from "react-icons/pi";
import { SlArrowDown } from "react-icons/sl";
// import { useInView } from 'react-intersection-observer';
// import { motion } from "framer-motion";
import { FaLocationDot } from "react-icons/fa6";
// import ScrollAnimation from "react-animate-on-scroll";
import { PiGithubLogoFill } from "react-icons/pi";
// import { CiLinkedin } from "react-icons/ci";
// import { LuLinkedin } from "react-icons/lu";
import { RiLinkedinLine } from "react-icons/ri";
import { RiInstagramFill } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";
import { FaSquareXTwitter } from "react-icons/fa6";
import img from "./giphy1.gif";
import Pulse from 'react-reveal/Pulse';
const About = ({ nextPage }) => {
    const [useArrow, setArrow] = useState(true);
    // Handel window scroll  
    useEffect(() => {
        const handleScroll = () => {
            setArrow(window.scrollY === 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Handel window scroll
    const name = "<AjaySingh/>"
    const arrowClickHandler = () => {
        setArrow(false);
        nextPage();
        if (window.scrollY === 0)
            setArrow(true);
        window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
        // ref.current?.scrollIntoView({ behavior: 'smooth' });

    }



    const clickHandler_git = () =>{
        window.open("https://github.com/Ajayvirmoti/")
    }  
    const clickHandler_lc = () =>{
        window.open("https://leetcode.com/ajayvirmoti_personal/")   
    }
    const clickHandler_ln = () =>{
        window.open("https://www.linkedin.com/in/ajay-virmoti-21ab931b2/")
    }
    const clickHandler_insta = () =>{
        window.open("https://www.instagram.com/ajayvirmoti/")
        
    }

    return (
        <div className="About" id="About">
            <Pulse>
                <div className="intro">
                    <h4 className="intro__greeting">' ' Hello,<PiHandWavingThin /> Thank you for visiting, I am </h4>
                    <h1 className="intro__name"> {name}</h1>

                    <h2 className="intro__tagline"> A Web Weaving Wizardry </h2>

                    <p className="intro__description">A passionate software developer with a mission to transform innovative ideas into robust and scalable digital solutions . With a keen eye for detail and a love for elegant code, I navigate the ever-evolving landscape of technology.</p>
                    <div className="location"><FaLocationDot /> INDIA </div>
                    <div className="container__logo">
                        {/* map all logos in one row  */}
                        <div className="intro__logo"><PiGithubLogoFill onClick={clickHandler_git}/></div>
                        <hr/>
                        <div className="intro__logo"><RiLinkedinLine onClick={clickHandler_ln}/></div>
                        <hr/>
                        <div className="intro__logo"><SiLeetcode /></div>
                        <hr/>
                        <div className="intro__logo"><RiInstagramFill /></div>
                        <hr/>
                        <div className="intro__logo"><FaSquareXTwitter /></div>
                    </div>
                </div>
            </Pulse>
            <img src={img} className="About__sticker" />
            {/* adding card for skills, total three cards   */}


            {useArrow ? (<div className="arrow"><SlArrowDown className="next-page__arrow" onClick={arrowClickHandler} /></div>) : (<></>)}
        </div>
    );
}

export default About;