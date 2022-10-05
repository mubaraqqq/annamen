import { Outlet, useParams } from "react-router-dom";
import styled from "styled-components";
import { jokeCategoryLinks } from "../constants/constants";
import CategoryLink from "./CategoryLink";
import Hero from "./Hero";
import Navbar from "./Navbar";

const LinkContainer = styled.div`
  padding: 40px 0;
  width: 89%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const CategoryHeader = styled.h3`
  padding: 2px;
  border-radius: 7px;
  font-family: "Montserrat";
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  text-align: center;
  width: 100px;
  margin-left: 5%;
`;

const Line = styled.hr`
  width: 89%;
  margin: 0 auto;
`;

function Layout() {
  const { category } = useParams();

  const foundCategory = jokeCategoryLinks.find(
    (joke) => joke.name === category
  );

  return (
    <div>
      <Navbar />
      <Hero />
      <LinkContainer>
        {jokeCategoryLinks.map((joke, idx) => (
          <CategoryLink
            key={idx}
            text={joke.name}
            color={joke.color}
            bg={joke.bg}
            to={joke.name}
          />
        ))}
      </LinkContainer>

      <Line />
      {foundCategory && (
        <CategoryHeader
          style={{
            color: foundCategory.color,
            backgroundColor: foundCategory.bg,
          }}
        >
          {foundCategory.name}
        </CategoryHeader>
      )}
      <Outlet />
    </div>
  );
}

export default Layout;
