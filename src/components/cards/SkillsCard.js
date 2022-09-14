import React from "react";

/// styles
import styled, { keyframes } from "styled-components";

// animations
import { bounceInDown } from "react-animations";

// font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faBootstrap,
  faCss3Alt,
  faSass,
  faJsSquare,
  faReact,
  faFigma,
} from "@fortawesome/free-brands-svg-icons";

const SkillsCard = () => {
  return (
    <CardStyled>
      <SkillsCardStyled>
        <div className="title">
          <h1>Skills</h1>
          <div className="underline"></div>
        </div>
        <div className="main-text">
          <div className="column">
            <FontAwesomeIcon icon={faHtml5} />
            <FontAwesomeIcon icon={faBootstrap} />
          </div>
          <div className="column">
            <FontAwesomeIcon icon={faCss3Alt} />
            <FontAwesomeIcon icon={faSass} />
          </div>
          <div className="column">
            <FontAwesomeIcon icon={faJsSquare} />
            <FontAwesomeIcon icon={faReact} />
          </div>
          <div className="column">
            <FontAwesomeIcon icon={faFigma} />
          </div>
        </div>
      </SkillsCardStyled>
    </CardStyled>
  );
};

const Animation = keyframes`${bounceInDown}`;

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
    overflow: hidden;
  animation: 800ms ${Animation};


  &:hover svg{
    scale: 1.1;
  }
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
    gap: 60px;
    width: 100%;
    color: #3a3a3a;
    font-size: 20px;

    .column {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 40px;
      font-size: 70px;

      svg {
        transition: all 500ms;
      }
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
