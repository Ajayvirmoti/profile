import React, { useEffect, useState } from "react";
import "./About.css";
import { PiHandWavingThin } from "react-icons/pi";
import { SlArrowDown } from "react-icons/sl";
import { FaLocationDot } from "react-icons/fa6";
import { RiLinkedinLine } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";
import { VscGithubAlt } from "react-icons/vsc";
import img from "./giphy1.gif";
import Pulse from 'react-reveal/Pulse';
import { RiTwitterXFill } from "react-icons/ri";
import { PiInstagramLogo } from "react-icons/pi";
import Data from "../../Assets/ProfileData.json";
const About = () => {
    const [useArrow, setArrow] = useState(true);
    // Handel window scroll  
    useEffect(() => {
        const handleScroll = () => {
            if(window.innerWidth > 600){
                setArrow(window.scrollY === 0);
            }
        };

        const handleArrow = () => {
            setArrow(false);
        }
        if(window.innerWidth < 600){    
            handleArrow();
        }
        
        
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    
    // Handel window scroll
    const name = "<AjaySingh/>"
    const arrowClickHandler = () => {
        setArrow(false);
        
        if (window.scrollY === 0)
            setArrow(true);
        // remove aerrow for small screen
        
        window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
        // ref.current?.scrollIntoView({ behavior: 'smooth' });

    }

    const clickHandler_git = () =>{
        window.open(Data.AboutData.ReDirectLink.GitHub)
    }  
    const clickHandler_Lc = () =>{
        window.open(Data.AboutData.ReDirectLink.LeetCode)   
    }
    const clickHandler_Ln = () =>{
        window.open(Data.AboutData.ReDirectLink.LinkedIn)
    }
    const clickHandler_Insta = () =>{
        window.open(Data.AboutData.ReDirectLink.insta)
        
    }
    const clickHandler_X =()=>{
        window.open(Data.AboutData.ReDirectLink.x)

    }

    return (
        <div className="About" id="About">
            <Pulse>
                <div className="intro">
                    <h4 className="intro__greeting">' ' Hello,<PiHandWavingThin /> Thank you for visiting, I am </h4>
                    <h1 className="intro__name"> {Data.AboutData.Name}</h1>

                    <h2 className="intro__tagline"> {Data.AboutData.Title} </h2>

                    <p className="intro__description">{Data.AboutData.Description}</p>
                    <div className="location"><FaLocationDot /> INDIA </div>
                    <div className="intro__container__icon">
                        <div className="intro__icon" onClick={clickHandler_git}><VscGithubAlt /></div>
                        <hr/>
                        <div className="intro__icon" onClick={clickHandler_Ln}><RiLinkedinLine /></div>
                        <hr/>
                        <div className="intro__icon" onClick={clickHandler_Lc}><SiLeetcode /></div>
                        <hr/>
                        <div className="intro__icon"  onClick={clickHandler_Insta}><PiInstagramLogo/></div>
                        <hr/>
                        <div className="intro__icon"  onClick={clickHandler_X}><RiTwitterXFill/></div>
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