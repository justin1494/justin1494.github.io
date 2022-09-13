import React from "react";

// styles
import styled, {keyframes} from "styled-components";

// imgs
import arrowsImg from "../../img/arrows.svg";

// animaitons
import { zoomIn } from "react-animations";

const HomeCard = () => {
  return (
    <CardStyled>
      <HomeCardStyled>
        <div className="main-text">
          <p>Hello to my portfolio page!</p>
          <p>
            My name is <span>Marcin Jaskółowski</span>
          </p>
          <p>I am a self thought JS/React developer</p>
        </div>
        <div className="controls">
          <img src={arrowsImg} alt="arrows" />
          <p>Use your arrows to navigate trough the site</p>
        </div>
      </HomeCardStyled>
    </CardStyled>
  );
};

const Animation = keyframes`${zoomIn}`;

const CardStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 750px;
  height: 400px;
  border: 0.5px solid black;
  border-radius: 6px;
  background-color: white;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  z-index: 1;
  animation: 1s ${Animation};
`;

const HomeCardStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 80%;
  height: 80%;

  .main-text {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    gap: 25px;
    width: 100%;
    margin-top: 10px;
    font-size: 20px;

    span {
      font-weight: bold;
    }
  }

  .controls {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    p {
      font-style: italic;
    }
  }
`;

export default HomeCard;
