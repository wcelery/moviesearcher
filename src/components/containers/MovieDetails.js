import React from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieDetails } from "../../redux/actions";

import { Loader } from "../../assets/components/Loader";
import Similars from "../Similars";
import Details from "../Details";

export default function MovieDetails(props) {
  const dispatch = useDispatch();
  let location = useLocation();

  React.useEffect(() => {
    dispatch(fetchMovieDetails(props.match.params.id));
  }, [location]); //rerender component if URL was changed

  const loading = useSelector((state) => state.app.loading);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="wrapper">
      <Details />
      <Similars />
    </div>
  );
}
