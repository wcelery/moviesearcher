import React from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { fetchMovieDetails } from "../../redux/actions";
import { pageVariants, pageTransition } from "../../assets/animationVariants";
import { Loader } from "../../assets/components/Loader";
import { BackButton } from "../../assets/components/BackButton";
import Similars from "../Similars";
import Details from "../Details";

export default function MovieDetails(props) {
  const dispatch = useDispatch();
  let location = useLocation();

  React.useEffect(() => {
    dispatch(fetchMovieDetails(props.match.params.id)); // eslint-disable-next-line
  }, [location]); //rerender component if URL was changed

  const loading = useSelector((state) => state.app.loading);

  if (loading) {
    return <Loader />;
  }

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <div className="wrapper">
        <BackButton />
        <Details />
        <Similars />
      </div>
    </motion.div>
  );
}
