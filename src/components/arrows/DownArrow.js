import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

import { v4 as uuidv4 } from "uuid";

const DownArrow = () => {
  return (
    <DownArrowStyled className="down-arrow arrow" key={uuidv4()}>
      <FontAwesomeIcon icon={faAnglesDown} />
      <p>My skills</p>
    </DownArrowStyled>
  );
};

const DownArrowStyled = styled.div`
  bottom: 50px;
`;

export default DownArrow;
