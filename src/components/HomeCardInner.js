import React from "react";

// styles
import styled from "styled-components";

// imgs
import arrowsImg from "../img/arrows.svg";

const HomeCardInner = () => {
  return (
    <HomeCardInnerStyled>
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
    </HomeCardInnerStyled>
  );
};

const HomeCardInnerStyled = styled.div`
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

export default HomeCardInner;
