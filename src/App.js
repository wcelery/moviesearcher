import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/containers/Nav";
import Home from "./components/containers/Home";
import MovieDetails from "./components/containers/MovieDetails";
import Favorites from "./components/Favorites";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/movie:id" component={MovieDetails} />
          <Route path="/favorites" component={Favorites} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
