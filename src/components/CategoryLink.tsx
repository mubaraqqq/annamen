import { Link } from "react-router-dom";
import styled from "styled-components";
import { IJokeCategory } from "../types/joke-types";

const StyledLink = styled(Link)`
  text-decoration: none;
  font-family: "Montserrat";
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  width: 200px;
  padding: 14px;
  text-align: center;
  margin-right: 10px;
  margin-bottom: 10px;
  border: 2px solid transparent;

  &:focus,
  &:active {
    border: 2px solid grey;
  }
`;

type LinkProps = {
  color: string;
  bg: string;
  text: string;
  to: IJokeCategory;
  header?: boolean;
};

const CategoryLink = ({ color, bg, text, to, header }: LinkProps) => {
  return (
    <StyledLink
      style={{
        color: color,
        backgroundColor: bg,
      }}
      to={`/jokes/${to}`}
    >
      {text}
    </StyledLink>
  );
};

export default CategoryLink;
