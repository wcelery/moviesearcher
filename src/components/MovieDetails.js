import React from "react";
import { v4 as uuidv4 } from "uuid";

export default function MovieDetails(props) {
  const [details, setDetails] = React.useState({});
  const [genres, setGenres] = React.useState([]);

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

  React.useEffect(() => {
    fetchGenres();
  }, [details]);

  const fetchGenres = () => {
    if (details.genres) {
      const test = details.genres.map((genre) => genre.name);
      setGenres(test);
    }
  };

  return (
    <div className="details">
      <img
        src={`https://image.tmdb.org/t/p/original${details.poster_path}`}
        alt=""
        width="342px"
      />
      <div className="text">
        <h1 className="title">{details.title}</h1>
        <p className="overview">{details.overview}</p>
        <section className="info">
          <table>
            <tbody>
              <tr>
                <th scope="row">Release</th>
                <td>{details.release_date}</td>
              </tr>
              <tr>
                <th scope="row">Average rating</th>
                <td>
                  {details.vote_average} (based on {details.vote_count} votes)
                </td>
              </tr>
              <tr>
                <th scope="row">Budget</th>
                <td>{details.budget} $</td>
              </tr>
              <tr>
                <th scope="row">Tagline</th>
                <td>{details.tagline || "No tagline presented"}</td>
              </tr>
            </tbody>
          </table>
        </section>
        <button className="add-to-fav">Add to favorites</button>
        <section className="tags">
          {genres.map((genre) => (
            <button key={uuidv4()}>{genre}</button>
          ))}
        </section>
      </div>
    </div>
  );
}
