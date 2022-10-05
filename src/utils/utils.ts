import { IJokeCategory } from "./../types/joke-types";
import { IJokesStore } from "./../store/jokesSlice";

export function filterJokesByCategory(
  data: IJokesStore[],
  category: IJokeCategory
): IJokesStore[] | void {
  let jokesArray: IJokesStore[] = [];
  if (category === "uncategorized") {
    jokesArray = data.filter((joke) => joke.categories.length === 0);
  }

  jokesArray = data.filter((joke) => joke.categories.includes(category));

  return jokesArray;
}
