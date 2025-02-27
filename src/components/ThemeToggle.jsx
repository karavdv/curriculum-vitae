import React, { useState, useEffect } from "react";
import "./../css/themeToggle.css";

export const ThemeToggle = () => {
  // Haal de eerdere voorkeur uit localStorage of volg het systeemthema
  /*const ThemeToggle = () => {
    const savedTheme = localStorage.getItem("darkMode");
    if (savedTheme) {
      return savedTheme === "dark";
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  };*/

  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
});

  useEffect(() => {
    // Zet het `data-theme` attribuut op <body>
    document.body.setAttribute("data-theme", isDarkMode ? "dark" : "light");

    // Sla voorkeur op in localStorage
    localStorage.setItem("darkMode", isDarkMode ? "dark" : "light");
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


