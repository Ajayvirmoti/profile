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
const NavBar = ({ theme, toggleTheme }) => {
    const [isVisible, setIsVisible] = useState(true);

    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
  
      if (scrollTop > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);



    return (
        <nav className={`navbar ${isVisible ? 'visible' : 'hidden'}`}>
            <div className="loader-logo">

                <Triangle
                    height="50"
                    width="50"
                    // color="#09bc8a"
                    color="#64ffda"

                    ariaLabel="Ajay Virmoti"
                    wrapperStyle={{}}
                    visible={true}
                />
                <div className="loader-logo-title"> Curriculum vitae </div>
            </div>
            <div className="navbar-item">
                <button>About <HiOutlineEmojiHappy/></button>
                <button>Tech <PiStackOverflowLogoThin /></button>
                <button>Archive </button>
                <button>Tech </button>
                <button className="navbar-resume-button">Resume <TfiDownload /></button>

            </div>


        </nav>
    )
}

export default NavBar;


