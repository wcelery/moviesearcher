import React from "react";
import { useSelector, useDispatch } from "react-redux";
import InfiniteScroll from "react-infinite-scroller";
import Movie from "./Movie";
import ContentContainer from "./containers/ContentContainer";
import { Loader } from "../assets/components/Loader";
import { requestMovies, requestSearch } from "../redux/actions";
import { useGetPopularMoviesQuery } from "../api/movieApi";

export default function Content() {
  /* let movies;
  let page; */

  //pulling things from store like that:
  const bestMovies = useSelector((state) => state.movies.fetchedMovies);
  const bestPage = useSelector((state) => state.movies.page);
  const searchedMovies = useSelector((state) => state.search.fetchedSearch);
  let query = useSelector((state) => state.search.query);
  const searchPage = useSelector((state) => state.search.scroll_page);
  const loading = useSelector((state) => state.app.loading);
  const totalPages = useSelector((state) => state.app.totalPages);

  const [page, setPage] = React.useState(1);
  const { data, error, isLoading } = useGetPopularMoviesQuery(page);
  const [movies, setMovies] = React.useState([]);

  const dispatch = useDispatch();

  React.useEffect(() => {
    setMovies([...movies, data?.results].filter((movie) => movie !== undefined).flat(1));
  }, [data?.results]);

  /* if (query) {
    movies = searchedMovies;
    page = searchPage;
  } else {
    movies = bestMovies;
    page = bestPage;
  } */

  const fetchMoreData = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <ContentContainer movies={data}>
      <InfiniteScroll
        pageStart={1}
        initialLoad={false}
        loadMore={() => fetchMoreData()}
        hasMore={data?.page !== data?.total_pages}
        loader={<Loader key={-1} />}
      >
        <div className="content">
          {movies?.map((movie) => (
            <Movie
              key={movie.id}
              poster={movie.poster_path}
              title={movie.title}
              id={movie.id}
            />
          ))}
        </div>
      </InfiniteScroll>
    </ContentContainer>
  );
}
