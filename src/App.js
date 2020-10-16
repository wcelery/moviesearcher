import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Content from "./components/Content";
import MovieDetails from "./components/MovieDetails";
import SearchContent from "./components/SearchContent";

function App() {
  const [query, setQuery] = React.useState("");
  const [searchContent, setSearchContent] = React.useState("fight club");

  const API_KEY = "3898867ebc97917c67c0d9841df34dce";

  const fetchSearch = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`
    );
    const searchResults = await data.json();
    setSearchContent(searchResults.results);
  };

  React.useEffect(() => {
    fetchSearch();
  }, [query]);

  return (
    <Router>
      <div className="App">
        <Nav setQuery={setQuery} />
        <Switch>
          <Route exact path="/" component={Content} />
          <Route path="/:id" component={MovieDetails} />
          <Route
            path="/search"
            render={(props) => (
              <SearchContent {...props} searchContent={searchContent} />
            )}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
