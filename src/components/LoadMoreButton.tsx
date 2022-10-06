import styled from "styled-components";
import arrowDown from "../assets/path-copy-7@3x.png";

const Button = styled.button`
  border: 1px solid #cfb995;
  color: #cfb995;
  background: white;
  text-transform: uppercase;
  padding: 15px 30px;

  &:hover {
    cursor: pointer;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  img {
    margin-left: 10px;
  }
`;

type Props = {
  click: () => void;
  length: number;
};

const LoadMoreButton = ({ click, length }: Props) => {
  if (length === 0) return <p>No more items left</p>;

  return (
    <Button onClick={click}>
      <div>
        View More{" "}
        <img src={arrowDown} alt="arrow down icon" width="15px" height="20px" />
      </div>
    </Button>
  );
};

export default LoadMoreButton;
