import { useParams } from "react-router-dom";
import { useAppSelector } from "../hooks/hooks";
import { IJokeCategory } from "../types/joke-types";
import { filterJokesByCategory } from "../utils/utils";

const JokesCategory = () => {
  const jokes = useAppSelector((state) => state.jokes.jokes);
  const isLoading = useAppSelector((state) => state.jokes.isLoading);

  const { category } = useParams();

  const jokesCategory = filterJokesByCategory(jokes, category as IJokeCategory);

  console.log(jokesCategory);

  if (isLoading)
    return <div style={{ width: "89%", margin: "0 auto" }}>Loading...</div>;

  return <div>JokesCategory</div>;
};

export default JokesCategory;
