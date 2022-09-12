import React, { useState, useEffect } from "react";
import HomeCardInner from "./HomeCardInner";
import AboutCardInner from "./AboutCardInner";

// styles
import styled from "styled-components";

const Card = () => {
  const allCards = [<HomeCardInner />, <AboutCardInner />];

  const [card, setCard] = useState(0);

  const keyDownHandler = (e) => {
    if (e.key === "ArrowUp") {
      setCard(1);
    } else if (e.key === "ArrowDown") {
      setCard(0);
    }
  };
  useEffect(() => {
    document.addEventListener("keydown", keyDownHandler, true);
  }, []);

  return (
    <>
      <CardStyled>{allCards[card]}</CardStyled>
    </>
  );
};

const CardStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 750px;
  height: 400px;
  border: 0.5px solid black;
  border-radius: 6px;
  background-color: white;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
`;

export default Card;
