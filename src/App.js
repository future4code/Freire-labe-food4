import { GlobalStyled } from "./styled";
import { Router } from "./router/Routes";
import { useState } from "react";
import { Context } from "./Context";

const App = () => {
  const [currentScreen, setCurrentScreen] = useState();

  return (
    <Context.Provider value={{ currentScreen, setCurrentScreen }}>
      <GlobalStyled />
      <Router />
    </Context.Provider>
  );
};

export default App;
