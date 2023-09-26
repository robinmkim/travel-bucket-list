import React from "react";
import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";
import Root from "./Root";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "./theme/darktheme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <RecoilRoot>
        <Root />
      </RecoilRoot>
    </ThemeProvider>
  </React.StrictMode>
);
