import React from "react";
import { Link } from "react-router-dom";

export default function Movie({ poster, title, id }) {
  return (
    <div className="movie">
      <Link to={`/${id}`}>
        <img
          src={`https://image.tmdb.org/t/p/original${poster}`}
          alt=""
          width="210"
        />
      </Link>
      <h1>{title}</h1>
    </div>
  );
}
