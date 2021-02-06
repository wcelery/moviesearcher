import React from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import Movie from "./Movie";
import AlertMessage from "../assets/components/AlertMessage";
import { pageVariants, pageTransition } from "../assets/animationVariants";

export default function Favorites() {
  const favorites = useSelector((state) => state.favoriteStore.favorites);

  if (!Object.values(favorites).length) {
    return (
      <AlertMessage
        primaryText="No Favorites"
        secondaryText="Add movies to favorites by pressing heart icon next to title."
      />
    );
  }

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <div className="favorites">
        <h1 className="favorites-header">Favorites</h1>
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
      </div>
    </motion.div>
  );
}
