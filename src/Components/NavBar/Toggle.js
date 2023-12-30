import React from 'react';
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import "./Toggle.css";
import SideBar from '../SideBar/SideBar';
import { useState } from 'react';
import { RiCloseLine } from "react-icons/ri";
import { Link as LinkScroll } from 'react-scroll';
const Toggle = ({ isToggleProp }) => {

    const toggleClickHandler = () => {
        isToggleProp();
    }
    return (
        <div className='toggle'>
            <header class="toggle-header">
                <RiCloseLine className="toggle__icon" onClick={toggleClickHandler} />
            </header>
            <div className="toggle__items">
                <LinkScroll to="/" smooth={true} duration={500} spy={true} exact='true' offset={-80} className="toggle__link" onClick={toggleClickHandler}>About</LinkScroll>
                
                <LinkScroll to="Skills" smooth={true} duration={500} spy={true} exact='true' offset={-80} className="toggle__link" onClick={toggleClickHandler}>Skills</LinkScroll>
                <LinkScroll to="Projects" smooth={true} duration={500} spy={true} exact='true' offset={-80} className="toggle__link" onClick={toggleClickHandler}>Projects</LinkScroll>
                <LinkScroll to="Others" smooth={true} duration={500} spy={true} exact='true' offset={-80} className="toggle__link" onClick={toggleClickHandler}>Others</LinkScroll>
            </div>

        </div>
    );
}

export default Toggle;
