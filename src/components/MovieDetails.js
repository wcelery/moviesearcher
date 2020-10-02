import React from "react";

export default function MovieDetails(props) {
  const [details, setDetails] = React.useState({});

  const API_KEY = "3898867ebc97917c67c0d9841df34dce";

  const fetchMovieDetail = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${props.match.params.id}?api_key=${API_KEY}`
    );
    const details = await data.json();
    setDetails(details);
  };

  React.useEffect(() => {
    fetchMovieDetail();
  }, []);

  console.log(details);

  return (
    <div className="details">
      <img
        src={`https://image.tmdb.org/t/p/original${details.poster_path}`}
        alt=""
        width="342px"
      />
      <h1>{details.title}</h1>
    </div>
  );
}
