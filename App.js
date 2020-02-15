import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Movie from "./componentes/Movies";
import DetailsMovie from "./componentes/DetailsMovie";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/home" component={Movie} />
        <Route exact path="/detalle/:handle" component={DetailsMovie} />
        <Redirect from="*" to="/home" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
