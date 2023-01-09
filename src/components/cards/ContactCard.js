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
            <a
              href="https://www.linkedin.com/in/marcin-jask%C3%B3%C5%82owski-903869117/"
              target="_blank"
              rel="noreferrer">
              <div className="contact__icon">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </div>
              <p>LinkedIn</p>
            </a>
          </div>
          <div className="contact">
            <a
              href="https://github.com/justin1494"
              target="_blank"
              rel="noreferrer">
              <div className="contact__icon">
                <FontAwesomeIcon icon={faGithub} />
              </div>
              <p>GitHub</p>
            </a>
          </div>
          <div className="contact">
            <a href="mailto:m.jaskolowski1994@gmail.com">
              <div className="contact__icon">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <p>m.jaskolowski1994@gmail.com</p>
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
`;

const ContactCardStyled = styled.div`
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
    margin-left: 100px;
    margin-top: 100px;
    font-size: 20px;

    .contact {
      a {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 30px;
        text-decoration: none;
        color: #3a3a3a;

        .contact__icon {
          font-size: 40px;
        }

        p {
          text-decoration: none;
          color: #8d5151;
          font-size: 24px;

          &:hover {
            color: #ba9d9d;
          }
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
        a {
          .contact__icon {
            font-size: 28px;
          }
          P {
            font-size: 18px;
          }
        }
      }
    }
  }
  @media screen and (max-width: 800px) {
    .main-text {
      margin: 70px 0;
      width: 90%;

      .contact {
        width: 100%;
        a {
          flex-direction: column;
          gap: 10px;

          .contact__icon {
            font-size: 24px;
          }
        }
      }
    }
  }
`;

export default ContactCard;
