import { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useAppSelector } from "../hooks/hooks";
import { IJokeCategory } from "../types/joke-types";
import { filterJokesByCategory } from "../utils/utils";
import JokeCategoryCard from "./JokeCategoryCard";
import LoadMoreButton from "./LoadMoreButton";

const Box = styled.div`
  width: 89%;
  margin: 40px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const JokesCategory = () => {
  const [limit, setLimit] = useState(2);

  const jokes = useAppSelector((state) => state.jokes.jokes);
  const isLoading = useAppSelector((state) => state.jokes.isLoading);

  const { category } = useParams();

  const jokesCategory = filterJokesByCategory(jokes, category as IJokeCategory);

  function increaseLimit() {
    setLimit((limit) => (limit += 1));
  }

  if (isLoading)
    return <div style={{ width: "89%", margin: "0 auto" }}>Loading...</div>;

  if (jokesCategory.length === 0)
    return (
      <div style={{ width: "89%", margin: "0 auto" }}>
        <h2>No {category} jokes found</h2>
      </div>
    );

  let lengthLeft = jokesCategory.length - limit;

  return (
    <div>
      <Box>
        {jokesCategory.slice(0, limit).map((joke, idx) => (
          <JokeCategoryCard
            key={idx}
            number={idx}
            joke={joke.value}
            id={joke.id}
          />
        ))}
      </Box>
      <div style={{ textAlign: "center", padding: "30px 0" }}>
        <LoadMoreButton
          key={category}
          length={lengthLeft}
          click={increaseLimit}
        />
      </div>
    </div>
  );
};

export default JokesCategory;
