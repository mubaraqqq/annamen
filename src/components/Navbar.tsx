import styled from "styled-components";
import userIcon from "../assets/shape@3x.png";
import arrowIcon from "../assets/path_2@3x.png";
import { useState } from "react";

const Nav = styled.nav`
  height: 60px;
  background-color: #303030;
  position: relative;
  /* padding: 10px; */

  > ul:first-child {
    height: 100%;
    display: flex;
    justify-content: flex-end;
  }

  > ul:first-child > li {
    list-style-type: none;
    text-transform: uppercase;
    color: white;
    font-family: "Montserrat";
    font-weight: 600;
    font-size: 15px;
    height: 100%;
    margin-right: 64px;
    padding: 0 20px;
    letter-spacing: normal;
    font-stretch: wider;
    /* width: 170px; */
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 600px) {
      font-size: 10px;
      margin-right: 10px;
      padding: 0 10px;
      letter-spacing: normal;
      font-stretch: wider;
    }
  }

  > ul:first-child > li:last-child {
    margin-right: 100px;
    background-color: #cfb995;
    justify-content: space-evenly;
    width: 200px;

    @media (max-width: 600px) {
      width: 150px;
      margin-right: 10px;
    }
  }
`;

const Menu = styled.ul`
  background-color: white;
  width: 190px;
  padding: 5px;
  border-radius: 5px;
  position: absolute;
  right: 105px;
  top: 110%;
  transform: translateY(10);
  transition: all 0.1s ease-out;
  animation-duration: 0.7s;
  animation-name: animate-fade;
  animation-fill-mode: backwards;

  @media (max-width: 600px) {
    width: 120px;
    right: 10px;

    li {
      padding: 5px;
      font-size: 7px;
      line-height: 10px;
      color: #5e5e5e;
    }
  }

  @keyframes animate-fade {
    0% {
      opacity: 0;
      transform: translateY(-10);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  li {
    padding: 5px;
    font-size: 14px;
    line-height: 20px;
    color: #5e5e5e;
    border-bottom: 0.5px solid black;
    list-style-type: none;
  }

  li:last-child {
    border-bottom: none;
    color: #cfb995;
  }
`;

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <Nav>
        <ul>
          <li>
            <p>So functionierts</p>
          </li>
          <li>
            <p>sonderangebote</p>
          </li>
          <li
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
          >
            <img src={userIcon} alt="user icon" width="15px" height="15px" />
            <p>mein bereich</p>
            <img
              src={arrowIcon}
              alt="bottom caret"
              width="12px"
              height="12px"
              style={{ marginLeft: "10px" }}
            />
          </li>
        </ul>
        {menuOpen && (
          <Menu>
            <li>My published jokes</li>
            <li>My saved jokes</li>
            <li>Account information</li>
            <li>Publish new joke</li>
          </Menu>
        )}
      </Nav>
    </header>
  );
};

export default Navbar;
