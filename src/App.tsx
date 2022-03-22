import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes/AppRoutes";
import { LayoutPageDefault } from "./shared/layout/LayoutPageDefault";

function App() {
  return (
    <BrowserRouter>
      <LayoutPageDefault>
        <AppRoutes />
      </LayoutPageDefault>
    </BrowserRouter>
  );
}

export default App;
