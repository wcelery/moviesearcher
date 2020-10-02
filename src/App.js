import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Content from "./components/Content";
import MovieDetails from "./components/MovieDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => <Content {...props} count={5} />}
          />
          <Route path="/:id" component={MovieDetails} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
