import React from "react";
import { useDispatch } from "react-redux";
import { fetchMovies, requestSearch } from "../redux/actions";
import { DebounceInput } from "react-debounce-input";

export default function SearchBar() {
  const dispatch = useDispatch();
  return (
    <form className="search-wrapper">
      <div className="search-bar">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="svg-filter-grey search-icon"
        >
          <path
            fillRule="evenodd"
            d="M16.3198574,14.9056439 L21.7071068,20.2928932 L20.2928932,21.7071068 L14.9056439,16.3198574 C13.5509601,17.3729184 11.8487115,18 10,18 C5.581722,18 2,14.418278 2,10 C2,5.581722 5.581722,2 10,2 C14.418278,2 18,5.581722 18,10 C18,11.8487115 17.3729184,13.5509601 16.3198574,14.9056439 Z M10,16 C13.3137085,16 16,13.3137085 16,10 C16,6.6862915 13.3137085,4 10,4 C6.6862915,4 4,6.6862915 4,10 C4,13.3137085 6.6862915,16 10,16 Z"
          />
        </svg>
        <DebounceInput
          minLength={3}
          debounceTimeout={400}
          onChange={(e) => dispatch(requestSearch(e.target.value))}
          className="search"
          placeholder="Search for ..."
        />
      </div>
    </form>
  );
}
