import React, { useState, useEffect } from "react";

import lightMode from "../assets/light.png";
import darkMode from "../assets/dark.png";

import "./themeToggle.css";

const AppThemeToggle = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.setAttribute("theme", theme);
  }, []);

  useEffect(() => {
    document.body.setAttribute("theme", theme);
  }, [theme]);

  const toggle = () => {
    const toggleTheme = theme === "light" ? "dark" : "light";

    setTheme(toggleTheme);
  };
  if (theme === "dark") {
    return (
      <div onClick={() => toggle()}>
        <img className="light-mode" src={darkMode} alt="" />
      </div>
    );
  }

  return (
    <div onClick={() => toggle()}>
      <img className="light-mode" src={lightMode} alt="" />
    </div>
  );
};

export default AppThemeToggle;
