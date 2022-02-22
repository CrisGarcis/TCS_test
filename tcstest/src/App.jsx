
import React, { useEffect, useContext } from "react";
import "./App.css";

import {
  SecurityContextProvider,
  SecurityContext
} from "./contexts/SecurityContext";

const AppRender = ({ match }) => {
  const [{ }, { }] = useContext(SecurityContext)

  return (
    <div className="flex">
      <h1>hola</h1>
    </div>
  );



};

const App = () => {
  return (


    <SecurityContextProvider>
      <AppRender />
    </SecurityContextProvider>

  );
};

export default App;
