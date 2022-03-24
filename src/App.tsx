import React from "react";
import { AppRoutes } from "./routes/AppRoutes";
import { BrowserRouter } from "react-router-dom";
import { LayoutPageDefault } from "./shared/layout/LayoutPageDefault";
import { UserProvider } from "./shared/contexts/UserContext";

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <LayoutPageDefault>
          <AppRoutes />
        </LayoutPageDefault>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
