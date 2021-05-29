import React from "react";
import { useSelector } from "react-redux";
import Movie from "./Movie";

export default function Similars() {
  const similars = useSelector((state) => state.movies.fetchedSimilars);
  return (
    <>
      <h1 className="similar-title">You may also like</h1>
      <div className="similar">
        {similars.map((similar) => (
          <Movie
            key={similar.id}
            poster={similar.poster_path}
            title={similar.title}
            id={similar.id}
          />
        ))}
      </div>
    </>
  );
}
