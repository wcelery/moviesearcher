import React from "react";
import Movie from "./Movie";

export default function SearchContent({ searchContent }) {
  console.log(searchContent);
  return (
    <div className="content">
      {searchContent.map((movie) => (
        <Movie
          key={movie.id}
          poster={movie.poster_path}
          title={movie.title}
          id={movie.id}
        />
      ))}
    </div>
  );
}
