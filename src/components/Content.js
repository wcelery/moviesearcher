import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";
import InfiniteScroll from "react-infinite-scroller";
import Movie from "./Movie";
import { Loader } from "../assets/components/Loader";
import NotFound from "../assets/components/NotFound";
import { pageVariants, pageTransition } from "../assets/animationVariants";
import { requestMovies, requestSearch } from "../redux/actions";

export default function Content() {
  let movies;
  let page;

  //pulling things from state like that:
  const bestMovies = useSelector((state) => state.movies.fetchedMovies);
  const bestPage = useSelector((state) => state.movies.page);
  const searchedMovies = useSelector((state) => state.search.fetchedSearch);
  let query = useSelector((state) => state.search.query);
  const searchPage = useSelector((state) => state.search.scroll_page);
  const loading = useSelector((state) => state.app.loading);
  const totalPages = useSelector((state) => state.app.totalPages);

  const dispatch = useDispatch();

  if (loading) {
    return <Loader />;
  }

  if (query) {
    movies = searchedMovies;
    page = searchPage;
  } else {
    movies = bestMovies;
    page = bestPage;
  }

  const fetchMoreData = () => {
    const isScrolling = true;
    if (query) {
      dispatch(requestSearch(query, isScrolling));
    } else if (searchedMovies.length === 0) {
      dispatch(requestMovies());
    }
  };

  if (!totalPages) {
    return <NotFound />;
  }

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <InfiniteScroll
        pageStart={1}
        initialLoad={false}
        loadMore={() => fetchMoreData()}
        hasMore={loading ? false : page <= totalPages}
        loader={<Loader key={-1} />}
      >
        <div className="content">
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              poster={movie.poster_path}
              title={movie.title}
              id={movie.id}
            />
          ))}
        </div>
      </InfiniteScroll>
    </motion.div>
  );
}
