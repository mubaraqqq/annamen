import { jokesApi, JokesResponse } from "./../api/api";
import { IJoke } from "./../types/joke-types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

// Define a type for the slice state
export interface IJokesStore extends IJoke {
  likeCount: number;
  dislikeCount: number;
}

interface jokesState {
  jokes: IJokesStore[];
  isLoading: boolean;
}

// Define the initial state using that type
const initialState: jokesState = {
  jokes: [],
  isLoading: false,
};

export const jokesSlice = createSlice({
  name: "jokes",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    updateJokesInStore: (state, action: PayloadAction<JokesResponse>) => {
      // const { payload } = action;
      // if (payload.results) {
      // let jokesArr = payload.results;
      // //   console.log(payload.results);
      // //   let jokesArr: IJoke[] = [];
      // // console.log(jokesArr);
      // for (let joke of jokesArr) {
      //   state.jokes.push({ ...joke, likeCount: 0, dislikeCount: 0 });
      // }
      // }
    },
    updateLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    likeJoke: (state, action: PayloadAction<string>) => {
      const { payload: id } = action;
      const jokeIndex = state.jokes.findIndex((joke) => joke.id === id);
      const joke = state.jokes[jokeIndex];
      if (joke) joke.likeCount++;
      state.jokes[jokeIndex] = joke;
    },
    dislikeJoke: (state, action: PayloadAction<string>) => {
      const { payload: id } = action;
      const jokeIndex = state.jokes.findIndex((joke) => joke.id === id);
      const joke = state.jokes[jokeIndex];
      if (joke) joke.dislikeCount++;
      state.jokes[jokeIndex] = joke;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      jokesApi.endpoints.getJokes.matchFulfilled,
      (state, action: PayloadAction<JokesResponse>) => {
        const { payload } = action;
        let jokesArr = payload.result;
        for (let joke of jokesArr) {
          state.jokes.push({ ...joke, likeCount: 0, dislikeCount: 0 });
        }
      }
    );
  },
});

export const { updateJokesInStore, likeJoke, dislikeJoke, updateLoading } =
  jokesSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectJokesInStore = (state: RootState) => state.jokes;

export default jokesSlice.reducer;
