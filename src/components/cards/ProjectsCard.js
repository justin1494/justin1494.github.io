import React from "react";

// styles
import styled, { keyframes } from "styled-components";

// animations
import { bounceInRight } from "react-animations";

const ProjectsCard = () => {
  return (
    <CardStyled className="card">
      <ProjectsCardStyled>
        <div className="title">
          <h1>Projects</h1>
          <div className="underline"></div>
        </div>
        <div className="main-text">
          <div className="project">
            <a
              href="https://magenta-marshmallow-a93473.netlify.app"
              target="_blank"
              className="project__title"
              rel="noreferrer">
              Notly - notes and articles managment tool
            </a>
            <p className="project__desc">
              (ReactJS, Redux toolkit, tailwindcss)
            </p>
          </div>
          <div className="project">
            <a
              href="https://sprightly-kulfi-f88543.netlify.app/"
              target="_blank"
              className="project__title"
              rel="noreferrer">
              Tic tac toe - popular Tic Tac Toe game{" "}
            </a>
            <p className="project__desc">(vanilla JS) </p>
          </div>
          <div className="project">
            <a
              href="https://cosmic-cranachan-b6e386.netlify.app/"
              target="_blank"
              className="project__title"
              rel="noreferrer">
              Waves - online music player
            </a>
            <p className="project__desc">(ReactJS)</p>
          </div>
        </div>
      </ProjectsCardStyled>
    </CardStyled>
  );
};

const Animation = keyframes`${bounceInRight}`;

const CardStyled = styled.div`
  animation: 800ms ${Animation};
`;

const ProjectsCardStyled = styled.div`
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
    gap: 30px;
    width: 100%;
    margin-top: 50px;
    color: #3a3a3a;

    .project {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-direction: column;

      &__title {
        text-decoration: none;
        color: #8d5151;
        font-size: 24px;

        &:hover {
          color: #ba9d9d;
        }
      }

      &__desc {
        margin-top: 3px;
        font-size: 18px;
        font-style: italic;
        color: #707070;
      }
    }
  }
  @media screen and (max-width: 1200px) {
    .main-text {
      .project {
        &__title {
          font-size: 15px;
        }
        &__desc {
          font-size: 12px;
        }
      }
    }
  }
`;

export default ProjectsCard;
