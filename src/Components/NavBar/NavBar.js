import React, { useState, useEffect } from 'react';
import "./NavBar.css";
import 'react-toggle/style.css';
// import { ReactDOM } from 'react';
// import { ReactDOM } from 'react';
import { TfiDownload } from "react-icons/tfi";
import { PiStackOverflowLogoThin } from "react-icons/pi";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import { motion } from "framer-motion";
import { Link as LinkScroll} from 'react-scroll';
import { Link } from 'react-router-dom';
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const NavBar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [hasBackground, setHasBackground] = useState(false);
  const title = "<Curriculum vitae/>"



  // handel window size
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isPanelOpen, setPanelOpen] = useState(false);
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const togglePanel = () => {
    setPanelOpen(!isPanelOpen);
  };



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
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  const toggl = <div><HiOutlineMenuAlt3/></div>;

  return (
    <nav className={`navbar ${isVisible ? 'visible' : 'hidden'} ${hasBackground ? 'background' : ''}`}>
      <div className="loader-logo">
        <div className="loader-logo-title"> {title} </div>
      </div>
      {windowWidth >= 768 ? (
        <div className="navbar-item">
          <Link to="/"><div  className='menu-items'>About <HiOutlineEmojiHappy /></div></Link>
          <LinkScroll to="Skills" spy={true} smooth={true} offset={-70} duration={600}><div className='menu-items'>Skill <PiStackOverflowLogoThin /></div></LinkScroll>
          <LinkScroll to="archive" spy={true} smooth={true} offset={-70} duration={500}><div className='menu-items'>Archive </div></LinkScroll>
          <Link to="/Contact" spy={true} smooth={true} offset={-70} duration={500}><div className='menu-items'>Contact </div></Link>
          <LinkScroll to="resume" spy={true} smooth={true} offset={-70} duration={500}>
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              onClick={() => null}
              className="navbar-resume-button">
              Resume <TfiDownload />
            </motion.button>
          </LinkScroll>
        </div>
      ):(toggl)
    
    }

    </nav>
  )
}

export default NavBar;



