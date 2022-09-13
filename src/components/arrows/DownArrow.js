import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const DownArrow = ({currentCard}) => {

  let animation = "";

  if (currentCard === "contact") {
    animation = "animated";
  }

  return (
    <DownArrowStyled className={`down-arrow arrow ${animation}`} >
      <FontAwesomeIcon icon={faAnglesDown} />
      <p>Contact</p>
    </DownArrowStyled>
  );
};

const DownArrowStyled = styled.div`
  bottom: 50px;
`;

export default DownArrow;
