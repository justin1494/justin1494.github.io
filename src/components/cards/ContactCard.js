import React from "react";

// styles
import styled, { keyframes } from "styled-components";

// animations
import { bounceInUp } from "react-animations";

// font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const ContactCard = () => {
  return (
    <CardStyled className="card">
      <ContactCardStyled>
        <div className="title">
          <h1>Contact</h1>
          <div className="underline"></div>
        </div>
        <div className="main-text">
          <div className="contact">
            <div className="contact__icon">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </div>
            <a
              href="https://www.linkedin.com/in/marcin-jask%C3%B3%C5%82owski-903869117/"
              target="_blank"
              className="contact__text"
              rel="noreferrer">
              LinkedIn
            </a>
          </div>
          <div className="contact">
            <div className="contact__icon">
              <FontAwesomeIcon icon={faGithub} />
            </div>
            <a
              href="https://github.com/justin1494"
              target="_blank"
              className="contact__text"
              rel="noreferrer">
              GitHub
            </a>
          </div>
          <div className="contact">
            <div className="contact__icon">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <a
              href="mailto:m.jaskolowski1994@gmail.com"
              className="contact__text">
              m.jaskolowski1994@gmail.com
            </a>
          </div>
        </div>
      </ContactCardStyled>
    </CardStyled>
  );
};

const Animation = keyframes`${bounceInUp}`;

const CardStyled = styled.div`
animation: 800ms ${Animation};
`

const ContactCardStyled = styled.div`
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
    margin-left: 100px;
    color: #3a3a3a;
    font-size: 20px;

    .contact {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 30px;

      &__icon {
        font-size: 40px;
      }

      &__text {
        text-decoration: none;
        color: #8d5151;
        font-size: 24px;

        &:hover {
          color: #ba9d9d;
        }
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

  @media screen and (max-width: 1200px) {
    .main-text {
      margin: 60px 0;
      width: 90%;
      .contact {
        
        &__icon {
          font-size: 28px;
        }
        &__text {
          font-size: 18px;
        }
      }
    }
  }
`;

export default ContactCard;
