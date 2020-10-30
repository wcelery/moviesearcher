import React from "react";
import { useSelector } from "react-redux";
import Movie from "./Movie";

export default function Favorites() {
  const favorites = useSelector((state) => state.favoriteStore.favorites);
  return (
    <div className="favorites">
      <h1>this is favorites</h1>
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
  );
}
