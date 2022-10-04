import { JokesResponse } from "./../api/api";
import { IJoke } from "./../types/joke-types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

// Define a type for the slice state
interface CategoryState {
  animal: IJoke[];
  career: IJoke[];
  celebrity: IJoke[];
  dev: IJoke[];
  explicit: IJoke[];
  fashion: IJoke[];
  food: IJoke[];
  history: IJoke[];
  money: IJoke[];
  movie: IJoke[];
  music: IJoke[];
  political: IJoke[];
  religion: IJoke[];
  science: IJoke[];
  sport: IJoke[];
  travel: IJoke[];
  uncategorized: IJoke[];
}

// Define the initial state using that type
const initialState: CategoryState = {
  animal: [],
  career: [],
  celebrity: [],
  dev: [],
  explicit: [],
  fashion: [],
  food: [],
  history: [],
  money: [],
  movie: [],
  music: [],
  political: [],
  religion: [],
  science: [],
  sport: [],
  travel: [],
  uncategorized: [],
};

export const jokesCategorySlice = createSlice({
  name: "jokesCategory",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    updateJokeCategories: (state, action: PayloadAction<JokesResponse>) => {
      // const { payload } = action;
      // let jokesArr = payload.results;
      // // for (let joke of jokesArr) {
      // // }
    },
  },
});

export const { updateJokeCategories } = jokesCategorySlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.jokesCategory;

export default jokesCategorySlice.reducer;
