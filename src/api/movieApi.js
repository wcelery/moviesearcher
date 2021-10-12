import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_KEY } from "../redux/config";

export const movieApi = createApi({
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.themoviedb.org/3/" }),
  endpoints: (builder) => ({
    getPopularMovies: builder.query({
      query: (page) =>
        `discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=${page}`,
    }),
  }),
});

export const { useGetPopularMoviesQuery } = movieApi;
