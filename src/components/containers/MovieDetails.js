import React from "react";
import { useLocation, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { fetchMovieDetails } from "../../redux/actions";
import {
  pageVariants,
  pageTransition,
  backVariants,
} from "../../assets/animationVariants";
import { Loader } from "../../assets/components/Loader";
import { ReactComponent as BackSvg } from "../../assets/svg/search.svg";
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
        <motion.div
          className="back-btn-container"
          initial="exit"
          animate="enter"
          exit="exit"
          variants={backVariants}
        >
          <Link to="/" className="back-btn">
            <BackSvg className="svg-filter-grey" />
            <span>back</span>
          </Link>
        </motion.div>
        <Details />
        <Similars />
      </div>
    </motion.div>
  );
}
