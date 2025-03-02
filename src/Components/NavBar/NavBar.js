import React, { useState, useEffect } from 'react';
import "./NavBar.css";
import 'react-toggle/style.css';
import { TfiDownload } from "react-icons/tfi";
import { PiStackOverflowLogoThin } from "react-icons/pi";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import { Link as LinkScroll, ScrollLink } from 'react-scroll';
import { NavLink } from 'react-router-dom';
import Toggle from './Toggle';
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { Triangle } from 'react-loader-spinner';
import Data from "../Assets/ProfileData.json";
const NavBar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [hasBackground, setHasBackground] = useState(false);
  const [isToggle, setToggle] = useState(true);

  // handel window size
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  // const [isPanelOpen, setPanelOpen] = useState(false);
  useEffect(() => {

    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const isToggleClickHandler = () => {
    setToggle(!isToggle);
  }



  // Handel window scroll
  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const isScrollingDown = currentScrollPos > prevScrollPos;

    setIsVisible(!isScrollingDown || currentScrollPos < 10);
    if (currentScrollPos > 1) {
      setHasBackground(true);
    } else {
      setHasBackground(false);
    }

    setPrevScrollPos(currentScrollPos);
  };
  useEffect(() => {
    if (!isToggle) {
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <nav className={`navbar ${isVisible ? 'visible' : 'hidden'} ${hasBackground ? 'background' : ''}`}>
      <div className="loader-logo">
        {window.innerWidth >= 768 ? <div className='title'>{Data.NavBarData.LogoName}</div> : <Triangle
          visible={true}
          height="30"
          width="30"
          color="#4c8ce6"
          ariaLabel="triangle-loading"
          wrapperStyle={{}}
          wrapperClass="loader-logo"
        />}
      </div>
      {windowWidth >= 872 ? (
        <div className="navbar-item">
          <NavLink
            to="/"
            style={({ isActive, isPending, isTransitioning }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                textDecoration: isActive ? "overline 2px`" : "none",
                color: isActive ? "inherit" : "inherit",
                viewTransitionName: isTransitioning ? "slide" : "",

              };
            }}
          ><div className='menu-items'>{Data.NavBarData.Links[0].name} <HiOutlineEmojiHappy /></div>
          </NavLink>

          <NavLink
            to="/"
            style={({ isActive, isPending, isTransitioning }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                textDecoration: isActive ? "none" : "none",
                color: isActive ? "inherit" : "inherit",
                viewTransitionName: isTransitioning ? "slide" : "",

              };
            }}
          >
            <LinkScroll
              to="Projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={600}
            >
              <div className='menu-items'>{Data.NavBarData.Links[2].name}</div>
            </LinkScroll>
          </NavLink>


          <NavLink
            to="/"
            style={({ isActive, isPending, isTransitioning }) => {
              return {
                textDecoration: isPending ? "overline 2px" : "none",
                fontWeight: isActive ? "bold" : "",
                textDecoration: isActive ? "none" : "none",
                color: isActive ? "inherit" : "inherit",
                viewTransitionName: isTransitioning ? "slide" : "",

              };
            }}
          >
            <LinkScroll
              to="Skills"
              spy={true}
              smooth={true}
              offset={-70}
              duration={600}
            >
              <div className='menu-items'>{Data.NavBarData.Links[1].name} <PiStackOverflowLogoThin /></div>
            </LinkScroll>
          </NavLink>
          <NavLink
            to="/Contact"
            style={({ isActive, isPending, isTransitioning }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                textDecoration: isActive ? "overline 2px" : "none",
                color: isActive ? "inherit" : "inherit",
                viewTransitionName: isTransitioning ? "slide" : "",

              };
            }}
          >
            <div className='menu-items'>{Data.NavBarData.Links[3].name} </div>
          </NavLink>
          <div
            onClick={() => null}
            className="navbar-resume-button">
            <h5>{Data.NavBarData.Links[4].name}</h5> <TfiDownload />
          </div>
        </div>
      ) : (isToggle ? (<HiOutlineMenuAlt3 onClick={isToggleClickHandler} className="toggle-icon" />) : (<div className='toggle-container'><Toggle isToggleProp={isToggleClickHandler} /></div>))
      }
    </nav>
  )
}

export default NavBar;



