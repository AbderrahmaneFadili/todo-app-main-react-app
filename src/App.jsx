import React from "react";
import GlobalStyle from "./themes/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./themes/theme";

const App = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <>
        <GlobalStyle />
      </>
    </ThemeProvider>
  );
};

export default App;
