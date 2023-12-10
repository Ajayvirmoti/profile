import "./NavBar.css";
import 'react-toggle/style.css';
import { Triangle } from "react-loader-spinner";
import { ClimbingBoxLoader } from "react-spinners";
import { TfiDownload } from "react-icons/tfi";
// import { TfiStackOverflow } from "react-icons/tfi";
import { PiStackOverflowLogoThin } from "react-icons/pi";
import { RiArchiveDrawerFill } from "react-icons/ri";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-scroll';
const NavBar = ({ theme, toggleTheme }) => {
    const [isVisible, setIsVisible] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [hasBackground, setHasBackground] = useState(false);
    const title = "<Curriculum vitae/>"
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



    return (
      <nav className={`navbar ${isVisible ? 'visible' : 'hidden'} ${hasBackground ? 'background' : ''}`}>
      <div className="loader-logo">
          <div className="loader-logo-title"> {title} </div>
      </div>
      <div className="navbar-item">
          <Link to="About" spy={true} smooth={true} offset={-70} duration={500}><button>About <HiOutlineEmojiHappy/></button></Link>
          <Link to="Skills" spy={true} smooth={true} offset={-70} duration={500}><button>Skill <PiStackOverflowLogoThin /></button></Link>
          <Link to="archive" spy={true} smooth={true} offset={-70} duration={500}><button>Archive </button></Link>
          <Link to="tech" spy={true} smooth={true} offset={-70} duration={500}><button>Tech </button></Link>
          <Link to="resume" spy={true} smooth={true} offset={-70} duration={500}>
              <motion.button 
                  whileHover={{scale:1.2}}
                  whileTap={{scale:0.8}}
                  onClick={()=> null}
                  className="navbar-resume-button">
                  Resume <TfiDownload />
              </motion.button>
          </Link>
      </div>
  </nav>
    )
}

export default NavBar;


