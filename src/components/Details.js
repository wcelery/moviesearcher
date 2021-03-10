import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFavorites,
  removeFromFavorites,
} from "../redux/reducers/actions/favoritesActions";

export default function Details() {
  const dispatch = useDispatch();

  const details = useSelector((state) => state.movies.fetchedDetails);
  const genres = useSelector((state) => state.movies.fetchedGenres);
  const favorites = useSelector((state) => state.favoriteStore.favorites);

  const genreNames = genres.map((genre) => genre.name);

  const parse = (poster, title, id) => {
    return {
      poster: poster,
      title: title,
      id: id,
    };
  };
  let movie = parse(details.poster_path, details.title, details.id);

  let isFavorite = movie.id in favorites;

  const isStored = (value) => {
    if (value) {
      dispatch(removeFromFavorites(movie));
    } else {
      dispatch(addToFavorites(movie));
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
        <h1 className="movie-title">{details.title}</h1>
        <p className="description">{details.overview}</p>
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
        <button
          className="add-to-fav"
          onClick={() => {
            isStored(isFavorite);
          }}
        >
          {isFavorite ? "Remove from favorites" : "Add to favorites"}
        </button>
      </div>
    </div>
  );
}
