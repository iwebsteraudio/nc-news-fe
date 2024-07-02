import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const ToggleTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme((currTheme) => {
      return currTheme === "light" ? "dark" : "light";
    });
  };

  return (
    
    <button onClick={toggleTheme} className={`button__${theme} btn btn-blue`}>
     changetheme
    </button>
  );
};

export default ToggleTheme;