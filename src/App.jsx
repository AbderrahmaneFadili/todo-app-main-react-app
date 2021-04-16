import React from "react";
import GlobalStyle from "./themes/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./themes/theme";
import { useSelector } from "react-redux";
import Header from "./components/Layout/Header/Header.jsx";
import ToggleCompleted from "./components/todos/ToggleCompleted/ToggleCompleted";

const App = () => {
  //get the theme from redux store using useSelector Hook
  const theme = useSelector(({ themeReducer }) => {
    return themeReducer.theme;
  });

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <GlobalStyle />
        <Header />
      </>
    </ThemeProvider>
  );
};

export default App;
