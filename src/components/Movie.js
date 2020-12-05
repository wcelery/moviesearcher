import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import heart from "react-useanimations/lib/heart";
import { motion } from "framer-motion";
import UseAnimations from "react-useanimations";
import { addToFavorites, removeFromFavorites } from "../redux/actions";
import { detailsMotion } from "../assets/animationVariants";

export default function Movie({ poster, title, id }) {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favoriteStore.favorites);

  const parse = (poster, title, id) => {
    return {
      poster: poster,
      title: title,
      id: id,
    };
  };
  let movie = parse(poster, title, id);

  let isFavorite = movie.id in favorites;

  const isStored = (value) => {
    if (value) {
      dispatch(removeFromFavorites(movie));
    } else {
      dispatch(addToFavorites(movie));
    }
  };

  const stringDelimiter = (str, limit) => {
    let splitStr = str.split(" ");
    if (splitStr.length <= limit) {
      return str;
    } else {
      return splitStr.slice(0, limit).join(" ") + "...";
    }
  };

  const titleDelimited = stringDelimiter(title, 2);

  return (
    <div className="movie">
      <motion.div initial="rest" whileHover="hover" animate="rest">
        <Link to={`/movie${id}`}>
          <img
            src={`https://image.tmdb.org/t/p/original${poster}`}
            alt=""
            width="210"
          />
        </Link>
        <motion.div className="overview" variants={detailsMotion}>
          <h1 className="title" title={title}>
            {titleDelimited}
          </h1>
          <UseAnimations
            reverse={isFavorite}
            onClick={() => {
              isStored(isFavorite);
            }}
            size={32}
            animation={heart}
            strokeColor="#f54c4c"
            pathCss="fill: #f54c4c; cursor: pointer"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
