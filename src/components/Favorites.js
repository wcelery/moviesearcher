import React from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import Movie from "./Movie";
import FavoritesContainer from "./containers/FavoritesContainer";
import { pageVariants, pageTransition } from "../assets/animationVariants";
import { BackButton } from "../assets/components/BackButton";

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
        <BackButton />
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
