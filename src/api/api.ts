import { IJoke } from "./../types/joke-types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export type JokesResponse = {
  total: number;
  results: IJoke[];
};

// Define a service using a base URL and expected endpoints
export const jokesApi = createApi({
  reducerPath: "jokesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://cors-anywhere.herokuapp.com/http://api.chucknorris.io/",
  }),
  endpoints: (builder) => ({
    getJokes: builder.query<JokesResponse, void>({
      query: () => ({
        url: `jokes/search?query=all`,
        headers: {
          "Access-Control-Allow-Headers":
            "Origin, X-Requested-With, Content-Type, Accept",
        },
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetJokesQuery } = jokesApi;
