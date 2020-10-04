import React from "react";

export default function Similar({ poster, title }) {
  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/original${poster}`}
        alt=""
        width="210"
        className="img-similar"
      />
    </div>
  );
}
