import React from "react";
import Movie from "./Movie";

export default function Content() {
  const [movies, setMovies] = React.useState([]);

  const API_KEY = "3898867ebc97917c67c0d9841df34dce";

  const fetchMovies = async () => {
    const data = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1
`);
    const movies = await data.json();
    setMovies(movies.results);
  };

  React.useEffect(() => {
    fetchMovies();
  }, []);

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
