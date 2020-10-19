import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieDetails } from "../redux/actions";
import Movie from "./Movie";
import { Loader } from "./Loader";

export default function MovieDetails(props) {
  const dispatch = useDispatch();

  let location = useLocation();

  React.useEffect(() => {
    dispatch(fetchMovieDetails(props.match.params.id));
  }, [location]); //rerender component if URL was changed

  const details = useSelector((state) => state.movies.fetchedDetails);
  const loading = useSelector((state) => state.app.loading);
  const genres = useSelector((state) => state.movies.fetchedGenres);
  const genreNames = genres.map((genre) => genre.name);
  const similars = useSelector((state) => state.movies.fetchedSimilars);

  if (loading) {
    return <Loader />;
  }

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
            {genreNames.map((genre) => (
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
