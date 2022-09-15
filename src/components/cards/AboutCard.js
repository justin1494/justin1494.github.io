import React from "react";

// styles
import styled, { keyframes } from "styled-components";

// animations
import { bounceInLeft } from "react-animations";

const AboutCard = () => {
  return (
    <CardStyled className="card">
      <AboutCardStyled>
        <div className="title">
          <h1>About</h1>
          <div className="underline"></div>
        </div>
        <div className="main-text">
          <p>I am based in <span>Warsaw, Poland</span></p>
          <p>Currently I am in my final year of my <span>PhD </span>at the faculty of chemistry at the <span>University of Warsaw</span></p>
          <p>For the last <span>year and a half</span>, I have been following the path to becoming a <span> react front-end developer</span></p>
        </div>
      </AboutCardStyled>
    </CardStyled>
  );
};

const Animation = keyframes`${bounceInLeft}`;

const CardStyled = styled.div `
animation: 800ms ${Animation};
`

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
    margin-top: 40px;
    width: 100%;
    color: #3a3a3a;
    font-size: 20px;

    p{
      line-height: 30px;
    }

    span {
      font-weight: bold;
      color: #aa4141;
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
