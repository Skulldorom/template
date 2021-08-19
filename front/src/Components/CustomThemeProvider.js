import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { createTheme } from "@material-ui/core";

export const CustomThemeContext = React.createContext({
  currentTheme: "dark",
  setTheme: null,
});

const CustomThemeProvider = (props) => {
  // eslint-disable-next-line react/prop-types
  const { children } = props;

  // Read current theme from localStorage or maybe from an api
  const currentTheme = localStorage.getItem("appTheme") || "dark";

  // State to hold the selected theme name
  const [themeName, _setThemeName] = React.useState(currentTheme);

  // Retrieve the theme object by theme name
  const theme = createTheme({
    palette: {
      type: themeName,
      primary: {
        main: "#673ab7",
      },
      secondary: {
        main: "#00b0ff",
      },
    },
  });

  // Wrap _setThemeName to store new theme names in localStorage
  const setThemeName = (name) => {
    localStorage.setItem("appTheme", name);
    _setThemeName(name);
  };

  const contextValue = {
    currentTheme: themeName,
    setTheme: setThemeName,
  };

  return (
    <CustomThemeContext.Provider value={contextValue}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </CustomThemeContext.Provider>
  );
};

export default CustomThemeProvider;
