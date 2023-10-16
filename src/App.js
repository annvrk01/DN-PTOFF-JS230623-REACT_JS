import AppRouter from "./router";
import React from "react";
import NavBarHome from "./pages/site-admin/components/Navbar";
import { Context } from "./context/contextHelper";

function App() {
  return (
    <Context.Provider>
      <AppRouter>
        <NavBarHome></NavBarHome>
      </AppRouter>
    </Context.Provider>
  );
}

export default App;
