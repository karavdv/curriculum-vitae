import React, { useState } from 'react';
import { NavLink } from "react-router-dom"; // Link importeren om navigatie te voorkomen

import "./../css/navbar.css";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        if (window.innerWidth >= 700) {
            setIsOpen(false); // Sluit de dropdown als het scherm groter wordt
        } else {
            setIsOpen(!isOpen);
        }

    };
    return (
        <>
            <nav>

                {/* Hamburger Menu */}
                <div className="hamburger" onClick={toggleMenu} aria-label="Menu openen/sluiten"
                    aria-expanded={isOpen}>
                    <div className={`bar ${isOpen ? 'open' : ''}`}></div>
                    <div className={`bar ${isOpen ? 'open' : ''}`}></div>
                    <div className={`bar ${isOpen ? 'open' : ''}`}></div>
                </div>

                <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
                    <li><NavLink to="/" onClick={toggleMenu}>Algemene gegevens</NavLink></li>
                    <li><NavLink to="/opleiding" onClick={toggleMenu}>Opleidingen</NavLink></li>
                    <li><NavLink to="/carriere" onClick={toggleMenu}>Werkervaring</NavLink></li>
                    <li><NavLink to="/vaardigheden" onClick={toggleMenu}>Vaardigheden</NavLink></li>

                </ul>


            </nav>




        </>



    )

}