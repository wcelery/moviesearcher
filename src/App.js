import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Nav from "./components/containers/Nav";
import Home from "./components/containers/Home";
import MovieDetails from "./components/containers/MovieDetails";
import Favorites from "./components/Favorites";
import AlertMessage from "./assets/components/AlertMessage";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Route
          render={({ location }) => (
            <AnimatePresence exitBeforeEnter initial={false}>
              <Switch location={location} key={location.pathname}>
                <Route exact path="/" component={Home} />
                <Route path="/movie:id" component={MovieDetails} />
                <Route exact path="/favorites" component={Favorites} />
                <Route path="*">
                  <AlertMessage
                    primaryText="Hey buddy, I think you've got the wrong door"
                    secondaryText="The leather club is three blocks down"
                  />
                </Route>
              </Switch>
            </AnimatePresence>
          )}
        />
      </Router>
    </div>
  );
}

export default App;
