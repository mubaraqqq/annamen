import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useAppSelector } from "../hooks/hooks";
import { IJokeCategory } from "../types/joke-types";
import { filterJokesByCategory } from "../utils/utils";
import JokeCategoryCard from "./JokeCategoryCard";

const Box = styled.div`
  width: 89%;
  margin: 40px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const JokesCategory = () => {
  const jokes = useAppSelector((state) => state.jokes.jokes);
  const isLoading = useAppSelector((state) => state.jokes.isLoading);

  const { category } = useParams();

  const jokesCategory = filterJokesByCategory(jokes, category as IJokeCategory);

  console.log(jokesCategory);

  if (isLoading)
    return <div style={{ width: "89%", margin: "0 auto" }}>Loading...</div>;

  if (isLoading)
    return <div style={{ width: "89%", margin: "0 auto" }}>Loading...</div>;

  return (
    <Box>
      {jokesCategory.map((joke, idx) => (
        <JokeCategoryCard
          key={idx}
          number={idx}
          joke={joke.value}
          id={joke.id}
        />
      ))}
    </Box>
  );
};

export default JokesCategory;
