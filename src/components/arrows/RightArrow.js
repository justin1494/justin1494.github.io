import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

import { v4 as uuidv4 } from "uuid";

const RightArrow = () => {
  return (
    <RightArrowStyled className="right-arrow arrow" key={uuidv4()}>
      <FontAwesomeIcon icon={faAnglesRight} />
      <p>Projects</p>
    </RightArrowStyled>
  );
};

const RightArrowStyled = styled.div`
  right: 50px;
`;

export default RightArrow;
