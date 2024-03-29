import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const RightArrow = ({ currentCard }) => {
  let animation = "";

  if (currentCard === "projects") {
    animation = "animated";
  }

  return (
    <RightArrowStyled className={`right-arrow arrow ${animation}`}>
      <FontAwesomeIcon icon={faAnglesRight} />
      <p>Projects</p>
    </RightArrowStyled>
  );
};

const RightArrowStyled = styled.div`
  right: 50px;

  @media screen and (max-width: 1200px) {
    right: 20px;
  }
  @media screen and (max-width: 800px) {
    bottom: 10%;
    right: 10%;
  }
`;

export default RightArrow;
