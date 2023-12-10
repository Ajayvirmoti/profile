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

                {/* <Triangle
                    height="50"
                    width="50"
                    // color="#09bc8a"
                    color="#64ffda"

                    ariaLabel="Ajay Virmoti"
                    wrapperStyle={{}}
                    visible={true}
                /> */}
                <div className="loader-logo-title"> {title} </div>
            </div>
            <div className="navbar-item">
                <button>About <HiOutlineEmojiHappy/></button>
                <button>Tech <PiStackOverflowLogoThin /></button>
                <button>Archive </button>
                <button>Tech </button>
                <motion.button 
                  whileHover={{scale:1.2}}
                  whileTap={{scale:0.8}}
                  onClick={()=> null}
                  className="navbar-resume-button">Resume <TfiDownload /></motion.button>
            </div>


        </nav>
    )
}

export default NavBar;


