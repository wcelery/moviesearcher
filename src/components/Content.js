import React from "react";
import { useSelector, useDispatch } from "react-redux";
import InfiniteScroll from "react-infinite-scroller";
import Movie from "./Movie";
import { Loader } from "../assets/components/Loader";
import NotFound from "../assets/components/NotFound";
import EmptyQuery from "../assets/components/EmptyQuery";
import { fetchMovies } from "../redux/actions";

export default function Content() {
  //pulling things from store like that:
  const movies = useSelector((state) => state.movies.fetchedMovies);
  const loading = useSelector((state) => state.app.loading);
  let page = useSelector((state) => state.movies.page);

  const dispatch = useDispatch();

  if (loading) {
    return <Loader />;
  }

  if (!movies) {
    return <EmptyQuery />;
  } else if (movies.length === 0) {
    return <NotFound />;
  }

  const fetchMoreData = () => {
    dispatch(fetchMovies());
  };

  return (
    <InfiniteScroll
      pageStart={1}
      initialLoad={false}
      loadMore={() => fetchMoreData()}
      hasMore={true}
      loader={<Loader />}
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
