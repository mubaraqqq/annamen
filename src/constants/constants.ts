import { IJokeCategory } from "./../types/joke-types";
export const categories = [
  "animal",
  "career",
  "celebrity",
  "dev",
  "explicit",
  "fashion",
  "food",
  "history",
  "money",
  "movie",
  "music",
  "political",
  "religion",
  "science",
  "sport",
  "travel",
];

export const jokeCategoryLinks: {
  name: IJokeCategory;
  color: string;
  bg: string;
}[] = [
  { name: "animal", color: "black", bg: "#b2b2b2" },
  { name: "career", color: "white", bg: "#ff5b5b" },
  { name: "celebrity", color: "black", bg: "#57e690" },
  { name: "dev", color: "black", bg: "#ff915b" },
  { name: "explicit", color: "white", bg: "#57deb6" },
  { name: "fashion", color: "black", bg: "#d0ba93" },
  { name: "food", color: "black", bg: "#ffbe5b" },
  { name: "history", color: "white", bg: "#8fe360" },
  { name: "money", color: "black", bg: "#ffdf5b" },
  { name: "movie", color: "white", bg: "#5e5e5e" },
  { name: "music", color: "black", bg: "#cfb995" },
  { name: "political", color: "white", bg: "#303030" },
  { name: "religion", color: "white", bg: "#57deb6" },
  { name: "science", color: "black", bg: "#ffdf5b" },
  { name: "sport", color: "black", bg: "#b2b2b2" },
  { name: "travel", color: "white", bg: "#57deb6" },
  { name: "uncategorized", color: "white", bg: "#5e5e5e" },
];
