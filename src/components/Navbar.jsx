/**
 * Component: Navbar.jsx
 * ---------------------
 * Dit is de navigatiebalk met een hamburger-menu voor kleine schermen.
 * - Bevat de links naar verschillende pagina's met `NavLink` uit React Router.
 * 
 * State:
 * - `isOpen`: Houdt bij of het menu op klein scherm open of gesloten is.
 * 
 * Functies:
 * - `toggleMenu`: Controleert of het scherm een gewoon of hamburger menu weergeeft op basis van de grootte van het scherm.
 * - Op een klein scherm past het de status van het menu aan.
 * - Op grotere schermen (≥700px) staat de state automatisch op gesloten.
 */

import React, { useState } from 'react';
import { NavLink } from "react-router-dom"; // Link importeren om navigatie te voorkomen

import "./../css/navbar.css";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        if (window.innerWidth >= 700) {
            setIsOpen(false); // Sluit de dropdown automatisch als het scherm groter is
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
                    <li>
                        <a href="https://github.com/karavdv/curriculum-vitae" target="_blank" rel="noopener noreferrer" className="github">
                            <i className="fab fa-github"></i> Broncode CV website
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/karavdv/Berty" target="_blank" rel="noopener noreferrer" className="github">
                            <i className="fab fa-github"></i> Broncode trading bot - afstudeerproject
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    )
}