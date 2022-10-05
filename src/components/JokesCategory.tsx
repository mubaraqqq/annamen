import { useParams } from "react-router-dom";
import { useGetJokesQuery } from "../api/api";
import { jokeCategoryLinks } from "../constants/constants";

const JokesCategory = () => {
  const { data, isLoading } = useGetJokesQuery();
  const { category } = useParams();

  const foundCategory = jokeCategoryLinks.find(
    (joke) => joke.name === category
  );

  console.log(data);

  if (isLoading) return <div>Loading...</div>;

  return <div>JokesCategory</div>;
};

export default JokesCategory;
