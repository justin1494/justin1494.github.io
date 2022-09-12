import React from "react";

// styles
import styled from "styled-components";

const AboutCardInner = () => {
  return (
    <AboutCardInnerStyled>
      <h1 className="title">About</h1>
      <div className="main-text">
        <p>I am based in Warsaw Poland</p>
        <p>Currently I am in my final year of PhD in chemistry</p>
        <p>I am a self thought JS/React developer</p>
      </div>
    </AboutCardInnerStyled>
  );
};

const AboutCardInnerStyled = styled.div`
  * {
    /* background: rgb(0 100 0 / 0.1); */
  }

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

export default AboutCardInner;
