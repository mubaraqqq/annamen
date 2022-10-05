import { IJokeCategory } from "./../types/joke-types";
import { IJokesStore } from "./../store/jokesSlice";

export function filterJokesByCategory(
  data: IJokesStore[],
  category: IJokeCategory
): IJokesStore[] {
  let jokesArray: IJokesStore[] = [];
  if (category === "uncategorized") {
    jokesArray = data.filter((joke) => joke.categories.length < 1);
    return jokesArray;
  }

  jokesArray = data.filter((joke) => joke.categories.includes(category));

  return jokesArray;
}
