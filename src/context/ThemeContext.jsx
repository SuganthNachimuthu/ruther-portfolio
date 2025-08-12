import React, { createContext, useEffect } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    // Always use light theme
    const theme = "light";

    useEffect(() => {
        // Ensure body only has light class
        document.body.classList.remove("dark");
        document.body.classList.add("light");
        localStorage.setItem("theme", "light");
    }, []);

    return (
        <ThemeContext.Provider value={{ theme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export { ThemeContext, ThemeProvider };
