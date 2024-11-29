import { useState } from "react";

const ThemeChanger = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.body.style.backgroundColor = newTheme === "light" ? "#ffffff" : "#333333";
    document.body.style.color = newTheme === "light" ? "#000000" : "#ffffff";
  };

  return (
    <button onClick={toggleTheme}>
      Switch to {theme === "light" ? "Dark" : "Light"} Theme
    </button>
  );
};

export default ThemeChanger;