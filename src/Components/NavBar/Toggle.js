import React from 'react';
import "./Toggle.css";
import { RiCloseLine } from "react-icons/ri";
import { Link as LinkScroll } from 'react-scroll';
import { RiLinkedinLine } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";
import { VscGithubAlt } from "react-icons/vsc";
import { RiTwitterXFill } from "react-icons/ri";
import { PiInstagramLogo } from "react-icons/pi";
const Toggle = ({ isToggleProp }) => {

    const toggleClickHandler = () => {
        isToggleProp();
    }
    const clickHandler_git = () => {
        window.open("https://github.com/Ajayvirmoti/")
    }
    const clickHandler_lc = () => {
        window.open("https://leetcode.com/ajayvirmoti_personal/")
    }
    const clickHandler_ln = () => {
        window.open("https://www.linkedin.com/in/ajay-virmoti-21ab931b2/")
    }
    const clickHandler_insta = () => {
        window.open("https://www.instagram.com/ajayvirmoti/")

    }
    return (
        <div className='toggle'>
            <header class="toggle-header">
                <RiCloseLine className="toggle__icon" onClick={toggleClickHandler} />
            </header>
            <div className="toggle-items">
                <div className='toggle-items__menu'> 
                    <LinkScroll to="/" smooth={true} duration={500} spy={true} exact='true' offset={-80} className="toggle__link" onClick={toggleClickHandler}>About</LinkScroll>
                    <LinkScroll to="Skills" smooth={true} duration={500} spy={true} exact='true' offset={-80} className="toggle__link" onClick={toggleClickHandler}>Skills</LinkScroll>
                    <LinkScroll to="Projects" smooth={true} duration={500} spy={true} exact='true' offset={-80} className="toggle__link" onClick={toggleClickHandler}>Projects</LinkScroll>
                    <LinkScroll to="Others" smooth={true} duration={500} spy={true} exact='true' offset={-80} className="toggle__link" onClick={toggleClickHandler}>Others</LinkScroll>
                </div>
                <div className="toggle__icon__container">
                    <div className="toggle__icon"><VscGithubAlt onClick={clickHandler_git} /></div>
                    <div className="toggle__icon"><RiLinkedinLine onClick={clickHandler_ln} /></div>
                    <div className="toggle__icon"><SiLeetcode /></div>
                    <div className="toggle__icon"><PiInstagramLogo /></div>
                    <div className="toggle__icon"><RiTwitterXFill /></div>
                </div>
                <div></div>
                <div></div>

            </div>



        </div>
    );
}

export default Toggle;
