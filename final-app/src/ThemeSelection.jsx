import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeSelection = createContext();
export const useTheme = () => useContext(ThemeSelection);


export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('auto');


    useEffect(() => {
        const html = document.documentElement;
        const meta = document.querySelector("meta[name='color-scheme']");

        html.style.setProperty('color-scheme', theme);
        meta?.setAttribute('content', theme);
        html.setAttribute('data-theme', theme);
    }, [theme]);


    return (
        <ThemeSelection.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeSelection.Provider>
    );
};