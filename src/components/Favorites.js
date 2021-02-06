import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import Movie from "./Movie";
import FavoritesContainer from "./containers/FavoritesContainer";
import { ReactComponent as BackSvg } from "../assets/svg/back.svg";
import {
  pageVariants,
  pageTransition,
  backVariants,
} from "../assets/animationVariants";

export default function Favorites() {
  const favorites = useSelector((state) => state.favoriteStore.favorites);

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <div className="favorites">
        <motion.div
          className="back-btn-container"
          initial="exit"
          animate="enter"
          exit="exit"
          variants={backVariants}
        >
          <Link to="/" className="back-btn">
            <BackSvg className="svg-filter-grey" />
            <span>back</span>
          </Link>
        </motion.div>
        <h1 className="favorites-header">Favorites</h1>
        <FavoritesContainer favorites={favorites}>
          <div className="content">
            {Object.values(favorites).map((favorite) => (
              <Movie
                key={favorite.id}
                poster={favorite.poster}
                title={favorite.title}
                id={favorite.id}
              />
            ))}
          </div>
        </FavoritesContainer>
      </div>
    </motion.div>
  );
}
