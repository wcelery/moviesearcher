import React from "react";
import "./App.css";
import { BrowserRouter as Switch, Route, useLocation } from "react-router-dom";
import Nav from "./components/containers/Nav";
import Home from "./components/containers/Home";
import MovieDetails from "./components/containers/MovieDetails";
import Favorites from "./components/Favorites";

function App() {
  let location = useLocation();
  return (
    <div className="App">
      <Nav />
      <Switch location={location} key={location.pathname}>
        <Route exact path="/" component={Home} />
        <Route path="/movie:id" component={MovieDetails} />
        <Route path="/favorites" component={Favorites} />
      </Switch>
    </div>
  );
}

export default App;
