import React from "react";
// routes
import Router from "./routes";
// theme
import ThemeProvider from "./theme";
// components
import { MotionLazyContainer } from "./components/animate";
import { ProgressBarStyle } from "./components/ProgressBar";
import ThemeSettings from "./components/settings";

// ------------------------------------------------------------------------

function App() {
  return (
    <MotionLazyContainer>
      <ThemeProvider>
        <ThemeSettings>
          <ProgressBarStyle />
          <Router />
        </ThemeSettings>
      </ThemeProvider>
    </MotionLazyContainer>
  );
}

export default App;
