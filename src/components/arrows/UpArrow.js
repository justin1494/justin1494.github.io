import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesUp } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const UpArrow = ({ currentCard }) => {
  let animation = "";

  if (currentCard === "skills") {
    animation = "animated";
  }

  return (
    <UpArrowStyled className={`up-arrow arrow ${animation}`}>
      <FontAwesomeIcon icon={faAnglesUp} />
      <p>My skills</p>
    </UpArrowStyled>
  );
};

const UpArrowStyled = styled.div`
  top: 50px;

  @media screen and (max-width: 800px) {
    top: 6%;
    right: 10%;
  }
`;

export default UpArrow;
