import { Link } from "react-router-dom";
import styled from "styled-components";
import flash from "../assets/green-light-copy@3x.png";
import arrow from "../assets/path-copy-5@3x.png";

const Box = styled.div`
  width: 320px;
  min-height: 200px;
  max-height: 300px;
  padding: 1em;
  border: 1px solid grey;
  border-radius: 5px;
  position: relative;
  margin-right: 10px;
  margin-bottom: 10px;

  div {
    display: flex;
    align-items: center;
  }

  p {
    font-family: "Montserrat";
    color: #303030;
    margin-left: 5px;
  }

  div p {
    font-size: 16px;
    font-weight: 600;
    text-transform: uppercase;
  }
`;

const JokeText = styled.p`
  margin-top: 10px;
  font-size: 14px;
  overflow-y: scroll;
  height: 80%;
`;

const StyledLink = styled(Link)`
  position: absolute;
  color: #cfb995;
  text-transform: uppercase;
  font-size: 16px;
  font-family: "Montserrat";
  bottom: 10px;
  right: 10px;
  text-decoration: none;
  display: flex;
  align-items: center;

  img {
    margin-left: 5px;
  }
`;

type Props = {
  joke: string;
  number: number;
  id: string;
};

const JokeCategoryCard = ({ joke, number, id }: Props) => {
  return (
    <Box>
      <div>
        <img src={flash} alt="lightning icon" width="20px" height="20px" />
        <p>Chuck Joke {number}</p>
      </div>
      <JokeText>{joke}</JokeText>
      <StyledLink to="">
        See more
        <img src={arrow} alt="arrow icon" width="30px" height="15px" />
      </StyledLink>
    </Box>
  );
};

export default JokeCategoryCard;
