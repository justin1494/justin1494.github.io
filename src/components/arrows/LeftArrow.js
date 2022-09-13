import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesLeft } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

import { v4 as uuidv4 } from "uuid";

const LeftArrow = () => {
  return (
    <LeftArrowStyled className="left-arrow arrow" key={uuidv4()} >
      <FontAwesomeIcon icon={faAnglesLeft} />
      <p>About me</p>
    </LeftArrowStyled>
  );
};

const LeftArrowStyled = styled.div`
  left: 50px;
`;

export default LeftArrow;
