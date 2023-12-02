import React from "react";
import "./NavBar.css";
import 'react-toggle/style.css';
import { Triangle } from "react-loader-spinner";
import { ClimbingBoxLoader } from "react-spinners";
import { TfiDownload } from "react-icons/tfi";
const NavBar = ({ theme, toggleTheme }) => {
    return (
        <div className="navbar">
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
                <ul className="navbar-item-ul">
                <li> <button>About</button> </li>
                <li> <button>About</button> </li>
                <li> <button>About</button> </li>
                <li> <button>About</button> </li>
                <h1>hello</h1>
                </ul>
            </div>
            <button className="navbar-resume-button">
                    Resume <TfiDownload/>
            </button>

        </div>
    )
}

export default NavBar;


