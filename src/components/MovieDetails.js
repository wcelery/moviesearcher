import React from "react";
import { v4 as uuidv4 } from "uuid";
import Movie from "./Movie";
import { useLocation } from "react-router-dom";

export default function MovieDetails(props) {
  const [details, setDetails] = React.useState({});
  const [genres, setGenres] = React.useState([]);
  const [similars, setSimilars] = React.useState([]);

  let location = useLocation();

  const API_KEY = "3898867ebc97917c67c0d9841df34dce";

  const fetchMovieDetail = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${props.match.params.id}?api_key=${API_KEY}`
    );
    const details = await data.json();
    const genres = await details.genres.map((genre) => genre.name);
    const genresId = await details.genres.map((genre) => genre.id).toString();
    setDetails(details);
    setGenres(genres);
    const dataSimilars = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=${genresId}&include_adult=false&include_video=false&page=1`
    );
    const similar = await dataSimilars.json();
    similar.results.length = 14; //14 similar movie cards looks nice
    setSimilars(similar.results);
  };

  React.useEffect(() => {
    fetchMovieDetail();
  }, [location]); //rerender component if URL was changed

  return (
    <div className="wrapper">
      <div className="details">
        <img
          src={`https://image.tmdb.org/t/p/original${details.poster_path}`}
          alt=""
          width="342px"
        />
        <div className="text">
          <h1 className="movie-title">{details.title}</h1>
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
          <section className="tags">
            {genres.map((genre) => (
              <button key={uuidv4()} className="genre">
                {genre}
              </button>
            ))}
          </section>
          <button className="add-to-fav">Add to favorites</button>
        </div>
      </div>
      <h1 className="similar-title">You may also like</h1>
      <div className="similar">
        {similars.map((similar) => (
          <Movie
            key={uuidv4()}
            poster={similar.poster_path}
            title={similar.title}
            id={similar.id}
          />
        ))}
      </div>
    </div>
  );
}
