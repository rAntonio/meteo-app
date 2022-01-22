import React, { useState, useEffect } from 'react';
import { ThemeContext, themes } from './contexts/ThemeContext';

export interface ThemeWrapperProps {
    className ?: string;
    children: React.ReactNode;
};

export default function ThemeWrapper(props : ThemeWrapperProps) {
  //Find preference on browser for theme adaptation
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  console.log(prefersDark);

  const [theme, setTheme] = useState(prefersDark ? themes.dark: themes.light);

  function changeTheme(theme : any) {
    setTheme(theme);
  }

  useEffect(() => {
    switch (theme) {
      case themes.light:
        document.body.classList.remove(themes.dark);
        document.body.classList.add(themes.light);
        break;
      case themes.dark:
      default:
        document.body.classList.remove(themes.light);
        document.body.classList.add(themes.dark);
        break;
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme: theme, changeTheme: changeTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}