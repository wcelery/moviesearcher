import React from "react";
import { Link } from "react-router-dom";

export default function Similar({ poster, id }) {
  return (
    <div>
      <Link to={`/${id}`}>
        <img
          src={`https://image.tmdb.org/t/p/original${poster}`}
          alt=""
          width="210"
          className="img-similar"
        />
      </Link>
    </div>
  );
}
