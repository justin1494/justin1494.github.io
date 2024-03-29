import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesLeft } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";


const LeftArrow = ({ currentCard }) => {
  let animation = "";

  if (currentCard === "about") {
    animation = "animated";
  }

  return (
    <LeftArrowStyled className={`left-arrow arrow ${animation}`}>
      <FontAwesomeIcon icon={faAnglesLeft} />
      <p>About me</p>
    </LeftArrowStyled>
  );
};

const LeftArrowStyled = styled.div`
  left: 50px;

  @media screen and (max-width: 1200px) {
    left: 20px;

    @media screen and (max-width: 800px) {
      left: 10%;
      top: 10%;

  }
  }
`;

export default LeftArrow;
