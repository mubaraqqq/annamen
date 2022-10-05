import styled from "styled-components";
import bgImage from "../assets/bitmap.png";
import searchIcon from "../assets/search-copy@3x.png";
import searchIcon2 from "../assets/search-copy1@3x.png";

const HeroSection = styled.section`
  background-image: url(${bgImage});
  object-fit: cover;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  padding: 50px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Heading = styled.h1`
  font-family: "Montserrat";
  font-size: 48px;
  line-height: 72px;
  color: #cfb995;
`;

const SubHeading = styled.h2`
  font-family: "Montserrat";
  font-size: 20px;
  /* line-height: 72px; */
  color: #ffffff;
`;

const InputBox = styled.div`
  border: 1px solid white;
  margin: 30px 0;
  width: 120%;
  height: 40px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 5px;
  background-color: transparent;

  &:focus-within {
    background-color: white;

    input {
      color: black;
    }

    img:first-of-type {
      display: none;
    }

    img:nth-child(2) {
      display: block;
    }
  }

  input {
    background: transparent;
    padding: 0 5px;
    border: none;
    outline: none;
    width: 90%;
    height: 40px;
    font-weight: 700;
  }

  img:nth-child(2) {
    display: none;
  }
`;

const Hero = () => {
  return (
    <HeroSection>
      <Box>
        <Heading>The Joke Bible</Heading>
        <SubHeading>Daily Laughs for you and yours</SubHeading>
        <InputBox>
          <input type="text" placeholder="How can we make you laugh today?" />
          <div>
            <img
              src={searchIcon}
              alt="search icon"
              width="20px"
              height="20px"
            />
            <img
              src={searchIcon2}
              alt="search icon"
              width="20px"
              height="20px"
            />
          </div>
        </InputBox>
      </Box>
    </HeroSection>
  );
};

export default Hero;
