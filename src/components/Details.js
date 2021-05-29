import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFavorites,
  removeFromFavorites,
} from "../redux/reducers/actions/favoritesActions";
import { useParallax } from "../assets/useParallax";
import { motion } from "framer-motion";

export default function Details() {
  const dispatch = useDispatch();

  const {
    primaryX,
    primaryY,
    secondaryX,
    secondaryY,
    onMouseMoveHandler,
    onMouseLeaveHandler,
  } = useParallax();

  const details = useSelector((state) => state.movies.fetchedDetails);
  const genres = useSelector((state) => state.movies.fetchedGenres);
  const favorites = useSelector((state) => state.favoriteStore.favorites);

  const movie = {
    poster: details.poster_path,
    title: details.title,
    id: details.id,
  };

  const isFavorite = movie.id in favorites;

  const isStored = (value) => {
    if (value) {
      dispatch(removeFromFavorites(movie));
    } else {
      dispatch(addToFavorites(movie));
    }
  };

  return (
    <div className="details">
      <motion.div
        onMouseMove={onMouseMoveHandler}
        onMouseLeave={onMouseLeaveHandler}
        className="parallax"
      >
        <motion.img
          style={{
            x: secondaryX,
            y: secondaryY,
          }}
          src={`https://image.tmdb.org/t/p/original${details.poster_path}`}
          alt=""
          width="342px"
          className="poster"
        />
        <motion.h1
          style={{
            x: primaryX,
            y: primaryY,
          }}
          className="movie-title"
        >
          {details.title}
        </motion.h1>
      </motion.div>

      <div className="text">
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
          {genres.map((genre) => (
            <button key={genre.id} className="genre">
              {genre.name}
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
