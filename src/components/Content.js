import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../redux/actions";
import Movie from "./Movie";
import { Loader } from "./Loader";

export default function Content() {
  const dispatch = useDispatch();
  //pulling things from store like that:
  const movies = useSelector((state) => state.movies.fetchedMovies);
  const loading = useSelector((state) => state.app.loading);

  React.useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  if (loading) {
    return <Loader />;
  }

  console.log(alert);

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
