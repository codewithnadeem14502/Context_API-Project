import React, { useContext, createContext } from "react";
// create context api
export const ThemeContext = createContext({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});
// wrapper
export const ThemeProvider = ThemeContext.Provider;

// custom hook
export default function useTheme() {
  return useContext(ThemeContext);
}
