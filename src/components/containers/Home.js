import React from "react";
import { useDispatch } from "react-redux";
import { fetchMovies } from "../../redux/actions";
import Content from "../Content";
import SearchBar from "../SearchBar";

export default function Home() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  return (
    <div className="index">
      <SearchBar />
      <Content />
    </div>
  );
}
