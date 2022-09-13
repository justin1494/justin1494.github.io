import React from "react";

// styles
import styled, { keyframes } from "styled-components";

// animations
import {  bounceInLeft  } from "react-animations";

const AboutCard = () => {
  return (
    <CardStyled>
      <AboutCardStyled>
        <h1 className="title">About</h1>
        <div className="main-text">
          <p>I am based in Warsaw Poland</p>
          <p>Currently I am in my final year of PhD in chemistry</p>
          <p>I am a self thought JS/React developer</p>
        </div>
      </AboutCardStyled>
    </CardStyled>
  );
};

const Animation = keyframes`${ bounceInLeft }`;

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

const AboutCardStyled = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 80%;
  height: 80%;
  /* background-color: rgb(0 10 100 / 0.1); */

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

export default AboutCard;