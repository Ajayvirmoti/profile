import React from "react";
import "./Footer.css";
import { RiLinkedinLine } from "react-icons/ri";
import { RiInstagramFill } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";
import { FaSquareXTwitter } from "react-icons/fa6";
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer_container">
                <div className="footer_addendum">
                    <div>
                        <p>This Website is designed and developed by Ajay ~ A.V</p>
                        <p>Copyright © 2024 A.V. </p>
                    </div>
                    <ul className="footer__list">
                        <li><a href="" /><RiLinkedinLine className="footer_logo" /></li>
                        <li><a href="" /><RiInstagramFill className="footer_logo" /></li>
                        <li><a href="" /><SiLeetcode className="footer_logo" /></li>
                        <li><a href="" /><FaSquareXTwitter className="footer_logo" /></li>
                    </ul>
                </div>

            </div>

        </footer>

    )

}

export default Footer;