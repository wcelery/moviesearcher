import React from "react";
import { useSelector, useDispatch } from "react-redux";
import InfiniteScroll from "react-infinite-scroller";
import Movie from "./Movie";
import { Loader } from "../assets/components/Loader";
import NotFound from "../assets/components/NotFound";
import EmptyQuery from "../assets/components/EmptyQuery";
import { requestMovies, requestSearch } from "../redux/actions";

export default function Content() {
  //pulling things from state like that:
  const bestMovies = useSelector((state) => state.movies.fetchedMovies);
  const searchedMovies = useSelector((state) => state.search.fetchedSearch);
  let movies;
  const loading = useSelector((state) => state.app.loading);
  let query = useSelector((state) => state.search.query);

  const dispatch = useDispatch();

  if (loading) {
    return <Loader />;
  }

  query ? (movies = searchedMovies) : (movies = bestMovies);

  const fetchMoreData = () => {
    const isScrolling = true;
    if (query) {
      dispatch(requestSearch(query, isScrolling));
    } else if (searchedMovies.length === 0) {
      dispatch(requestMovies());
    }
  };

  if (!movies) {
    return <EmptyQuery />;
  } else if (movies.length === 0) {
    return <NotFound />;
  }

  return (
    <InfiniteScroll
      pageStart={1}
      initialLoad={false}
      loadMore={() => fetchMoreData()}
      hasMore={true}
      loader={<Loader key={-1} />}
    >
      <div className="content">
        {movies.map((movie) => (
          <Movie
            key={movie.id}
            poster={movie.poster_path}
            title={movie.title}
            id={movie.id}
          />
        ))}
      </div>
    </InfiniteScroll>
  );
}
