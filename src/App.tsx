import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Country from "./pages/Country";
import Home from "./pages/Home";

import FavoritesContext from "./context/Context";
import useInitialState from "./hooks/useInitialState";

import "./styles/Style.scss";

const App: React.FC = () => {
  const initalState: any = useInitialState();
  return (
    <FavoritesContext.Provider value={initalState}>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/:country" exact component={Country} />
        </Switch>
      </Router>
    </FavoritesContext.Provider>
  );
};

export default App;
