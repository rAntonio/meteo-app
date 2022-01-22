import { createContext } from "react";

export const themes = {
  dark: "dark-body",
  light: "light-body",
};

export const ThemeContext = createContext({
    theme: themes.dark,
    changeTheme: (theme: any) => {},
});