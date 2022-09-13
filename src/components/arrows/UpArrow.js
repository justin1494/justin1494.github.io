import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesUp } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

import { v4 as uuidv4 } from "uuid";

const UpArrow = () => {
  return (
    <UpArrowStyled className="up-arrow arrow" key={uuidv4()}>
      <FontAwesomeIcon icon={faAnglesUp} />
      <p>Contact </p>
    </UpArrowStyled>
  );
};

const UpArrowStyled = styled.div`
  top: 50px;
`;

export default UpArrow;
