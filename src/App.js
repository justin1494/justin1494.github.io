import React, { useState, useEffect } from "react";
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


  // CurrentCard deals with the animations of 'arrows'
  const keyDownHandler = (e) => {
    if (e.key === "ArrowRight" || e.target === "ArrowRight") {
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
    } else if (e.key === "Enter") {
      setCard(0);
      setCurrentCard("home");
    }
  };
  useEffect(() => {
    document.addEventListener("keydown", keyDownHandler, true);
  }, []);

  const checkTarget = (e) => {
    const target = e.target.innerText;

    if (target === "Projects") {
      setCard(1);
      setCurrentCard("projects");
    } else if (target === "Contact") {
      setCard(2);
      setCurrentCard("contact");
    } else if (target === "My skills") {
      setCard(3);
      setCurrentCard("skills");
    } else if (target === "About me") {
      setCard(4);
      setCurrentCard("about");
    }
  };

  return (
    <WrapperStyled>
      <AppStyled className="app" onClick={checkTarget}>
        <GlobalStyle />
        {allCards[card]}
        <RightArrow currentCard={currentCard} onClick={checkTarget} />
        <DownArrow currentCard={currentCard} onClick={checkTarget} />
        <UpArrow currentCard={currentCard} onClick={checkTarget} />
        <LeftArrow currentCard={currentCard} />
      </AppStyled>
    </WrapperStyled>
  );
}

const WrapperStyled = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AppStyled = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
  background-image: url(${BackgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;

  @media screen and (max-width: 1200px) {
    min-height: 90vh;
  }
`;

export default App;
