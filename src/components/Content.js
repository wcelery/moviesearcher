import React from "react";
import { useSelector } from "react-redux";
import Movie from "./Movie";
import { Loader } from "../assets/components/Loader";
import NotFound from "../assets/components/NotFound";
import EmptyQuery from "../assets/components/EmptyQuery";

export default function Content() {
  //pulling things from store like that:
  const movies = useSelector((state) => state.movies.fetchedMovies);
  const loading = useSelector((state) => state.app.loading);

  if (loading) {
    return <Loader />;
  }

  if (!movies) {
    return <EmptyQuery />;
  } else if (movies.length === 0) {
    return <NotFound />;
  }

  return (
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
  );
}
