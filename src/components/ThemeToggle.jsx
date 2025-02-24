import React, { useState, useEffect } from "react";
import "./../css/themeToggle.css";

export const ThemeToggle = () => {
  // Haal de eerdere voorkeur uit localStorage of volg het systeemthema
  const getInitialTheme = () => {
    const savedTheme = localStorage.getItem("darkMode");
    if (savedTheme) {
      return savedTheme === "dark";
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  };

  const [isDarkMode, setIsDarkMode] = useState(getInitialTheme());

  useEffect(() => {
    // Zet het `data-theme` attribuut op <body>
    document.body.setAttribute("data-theme", isDarkMode ? "dark" : "light");

    // Sla voorkeur op in localStorage
    localStorage.setItem("darkMode", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  return (
    <div className="toggle-mode custom-toggle">
      <input
        type="checkbox"
        id="toggle-mode-checkbox"
        className="toggle-mode-checkbox"
        checked={isDarkMode}
        onChange={() => setIsDarkMode(!isDarkMode)}
        aria-label="Schakel tussen lichte en donkere modus"
      />
      <label htmlFor="toggle-mode-checkbox" className="toggle-mode-checkbox-label"></label>
      <span className="day-image"></span>
      <i className="sun fa fa-sun"></i>
      <i className="moon fas fa-moon"></i>
    </div>
  );
};


