/**
 * Component: ThemeToggle.jsx
 * ----------------------
 * Dit component is een schakelaar om tussen light en dark mode te wisselen. 
 * - De huidige thema-voorkeur wordt opgeslagen in `localStorage`.
 * - Als er geen voorkeur is, wordt het systeemthema gebruikt.
 * - Bij het wisselen van thema wordt het `data-theme` attribuut op `<body>` aangepast.
 * - De hele knop is klikbaar, niet alleen de bol.
 */

import { useState, useEffect } from "react";
import "./../css/themeToggle.css";

export const ThemeToggle = () => {

  // Haal eerdere voorkeur op uit localStorage of gebruik systeemvoorkeur
  const getInitialTheme = () => {
    const savedTheme = localStorage.getItem("darkMode");
    if (savedTheme !== null) {
      return savedTheme === "true"; // Zet om naar boolean
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  };

  const [isDarkMode, setIsDarkMode] = useState(getInitialTheme);

  useEffect(() => {
    // Pas het `data-theme` attribuut op <body> toe
    document.body.setAttribute("data-theme", isDarkMode ? "dark" : "light");

    // Sla voorkeur op in localStorage
    localStorage.setItem("darkMode", isDarkMode);
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div className="toggle-mode custom-toggle" onClick={toggleTheme}>
      <input
        type="checkbox"
        className="toggle-mode-checkbox"
        checked={isDarkMode}
        readOnly
        aria-label="Schakel tussen lichte en donkere modus"
      />
      <label htmlFor="toggle-mode-checkbox" className="toggle-mode-checkbox-label"></label>
      <span className="day-image"></span>
      <span className="toggle-ball"></span>
      <i className="sun fa fa-sun"></i>
      <i className="moon fas fa-moon"></i>
    </div>
  );
};


