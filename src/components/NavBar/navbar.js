import React from 'react';
import './navbar.css';
import { Link, Link as ScrollLink } from 'react-scroll';
import { FiMessageCircle } from "react-icons/fi";

const NavBar = () => {
    return (
        <nav className="navBar">
            {/* Logo */}
            <ScrollLink 
                to="intro" 
                smooth={true} 
                duration={600} 
                offset={-80} 
                className="logo"
            >
            AK
            </ScrollLink>

            <div className="desktopMenu">
                <Link to="intro" smooth={true} duration={500} offset={-80} className="desktopMenuListItem">Home</Link>
                <Link to="skills" smooth={true} duration={500} offset={-80} className="desktopMenuListItem">About</Link>
                <Link to="projects" smooth={true} duration={500} offset={-80} className="desktopMenuListItem">Projects</Link>
                <Link to="experience" smooth={true} duration={500} offset={-80} className="desktopMenuListItem">Experience</Link>
                <Link to="certifications" smooth={true} duration={500} offset={-80} className="desktopMenuListItem">Certifications</Link>
            </div>

            <Link to="contact" smooth={true} duration={500}>
                <button className="desktopMenuBtn">
                    <FiMessageCircle size={20} />
                    Contact me
                </button>
            </Link>
        </nav>
    );
}

export default NavBar;