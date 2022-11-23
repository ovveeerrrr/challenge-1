import React from "react"
import { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";
import { defaultTheme } from "./styles/defaultTheme";
import { GlobalStyled } from "./styles/globalStyles";
import Home from "./pages/Home/Home";

function App() {
  return (<>
    <ThemeProvider theme={defaultTheme}>
      <Normalize />
      <GlobalStyled debug={false} />
      <Home />
    </ThemeProvider>
  </>);
}

export default App;
