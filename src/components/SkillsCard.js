import React from "react";

/// styles
import styled, { keyframes } from "styled-components";

// animations
import { bounceInDown } from "react-animations";

const SkillsCard = () => {
  return (
    <CardStyled>
      <SkillsCardStyled>
        <h1 className="title">Skills</h1>
        <div className="main-text">
          <p>I am based in Warsaw Poland</p>
          <p>Currently I am in my final year of PhD in chemistry</p>
          <p>I am a self thought JS/React developer</p>
        </div>
      </SkillsCardStyled>
    </CardStyled>
  );
};

const Animation = keyframes`${bounceInDown }`;

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
  animation: 1s ${Animation};
`;

const SkillsCardStyled = styled.div`
  display: flex;
  justify-content: flex-start;
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
    margin-top: 50px;
    color: #3a3a3a;
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

export default SkillsCard;
