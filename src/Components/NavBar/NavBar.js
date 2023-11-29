import React from "react";
import "./NavBar.css";
import 'react-toggle/style.css';
import { Triangle } from "react-loader-spinner";
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
                    wrapperClassName="loader-logo"
                    visible={true}
                />
                <div className="loader-logo-title"> Curriculum vitae </div>
            </div>
            <div className="navbar-item">
                <ul className="navbar-item-ul">
                    <li> About </li>
                    <li> About </li>
                    <li> About </li>
                    <li> About </li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar;