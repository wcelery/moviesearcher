import React from "react";
import { useDispatch } from "react-redux";
import { DebounceInput } from "react-debounce-input";
import { requestMovies, requestSearch } from "../redux/actions";
import { ReactComponent as SearchSvg } from "../assets/svg/search.svg";

export default function SearchBar() {
  const dispatch = useDispatch();
  return (
    <form className="search-wrapper">
      <div className="search-bar">
        <SearchSvg className=" search-icon" />
        <DebounceInput
          minLength={3}
          debounceTimeout={200}
          onChange={(e) => {
            dispatch(requestSearch(e.target.value));
            if (e.target.value.length === 0) {
              dispatch(requestMovies());
            }
          }}
          className="search"
          placeholder="Search for ..."
        />
      </div>
    </form>
  );
}
