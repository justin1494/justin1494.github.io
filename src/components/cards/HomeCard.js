import React from "react";

// styles
import styled, { keyframes } from "styled-components";

// imgs
import arrowsImg from "../../img/arrows.svg";
import avatar from "../../img/MJ_zdjęcie.jfif";

// animaitons
import { zoomIn } from "react-animations";

const HomeCard = () => {
  return (
    <CardStyled className="card">
      <HomeCardStyled>
        <div className="main">
          <img
            className="main__img"
            src={avatar}
            alt="marcin jaskółowski avatar"
          />
          <div className="main__text">
            <p>
              Welcome to my <span>portfolio</span> page!
            </p>
            <p>
              My name is <span>Marcin Jaskółowski</span>
            </p>
            <p>I am a self-taught JS/React developer</p>
          </div>
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
  animation: 1s ${Animation};
`;

const HomeCardStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 80%;
  height: 80%;

  .main {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;

    &__img {
      width: 200px;
      border-radius: 50%;
    }
    &__text {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 25px;
      width: 100%;
      text-align: center;
      font-size: 20px;

      span {
        font-weight: bold;
        color: #aa4141;
      }
    }
  }

  .controls {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 40px;

    img {
      width: 120px;
    }

    p {
      font-style: italic;
    }
  }

  @media screen and (max-width: 1200px) {
    width: 90%;

    .main {
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
      gap: 0;
      &__img {
        width: 150px;
        border-radius: 50%;
      }
      &__text {
        gap: 15px;
        font-size: 18px;
      }
    }
    .controls {
      display: none;
    }
  }
`;

export default HomeCard;
