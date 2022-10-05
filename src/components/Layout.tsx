import { Outlet } from "react-router-dom";
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

function Layout() {
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
      <Outlet />
    </div>
  );
}

export default Layout;
