import React, { useState, useEffect, useRef } from "react";
import GlobalStyle from "./globalStyles";
import HomeCard from "./components/cards/HomeCard";
import AboutCard from "./components/cards/AboutCard";
import ProjectsCard from "./components/cards/ProjectsCard";
import ContactCard from "./components/cards/ContactCard";
import SkillsCard from "./components/cards/SkillsCard";

// arrows
import RightArrow from "./components/arrows/RightArrow";
import LeftArrow from "./components/arrows/LeftArrow";
import UpArrow from "./components/arrows/UpArrow";
import DownArrow from "./components/arrows/DownArrow";

import BackgroundImage from "./img/bg2.jpg";

// styles
import styled from "styled-components";

function App() {
  // states
  const [card, setCard] = useState(0);
  const [currentCard, setCurrentCard] = useState("home");

  const allCards = [
    <HomeCard />,
    <ProjectsCard />,
    <ContactCard />,
    <SkillsCard />,
    <AboutCard />,
  ];

  const keyDownHandler = (e) => {
    if (e.key === "ArrowRight") {
      setCard(1);
      setCurrentCard("projects");
    } else if (e.key === "ArrowDown") {
      setCard(2);
      setCurrentCard("contact");
    } else if (e.key === "ArrowUp") {
      setCard(3);
      setCurrentCard("skills");
    } else if (e.key === "ArrowLeft") {
      setCard(4);
      setCurrentCard("about");
    }
  };
  useEffect(() => {
    document.addEventListener("keydown", keyDownHandler, true);
  }, []);

  // useEffect(() => {
  //   if (card === 1) {
  //   } else if (card === 2) {
  //   } else if (card === 3) {
  //   } else if (card === 4) {
  //   }
  // }, [card]);

  return (
    <AppStyled className="app">
      <GlobalStyle />
      {allCards[card]}
      <RightArrow currentCard={currentCard} />
      <DownArrow currentCard={currentCard} />
      <UpArrow currentCard={currentCard} />
      <LeftArrow currentCard={currentCard} />
    </AppStyled>
  );
}

const AppStyled = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-image: url(${BackgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
`;

export default App;
