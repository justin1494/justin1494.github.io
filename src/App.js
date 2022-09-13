import React, { useState, useEffect } from "react";
import GlobalStyle from "./globalStyles";
import HomeCard from "./components/cards/HomeCard";
import AboutCard from "./components/cards/AboutCard";
import ProjectsCard from "./components/cards/ProjectsCard";
import ContactCard from "./components/cards/ContactCard";
import SkillsCard from "./components/cards/SkillsCard";
import CustomThing from "./components/CusomThing";

// arrows
import RightArrow from "./components/arrows/RightArrow";
import LeftArrow from "./components/arrows/LeftArrow";
import UpArrow from "./components/arrows/UpArrow";
import DownArrow from "./components/arrows/DownArrow";

import BackgroundImage from "./img/bg2.jpg";

// styles
import styled from "styled-components";

// uuid
import { v4 as uuidv4 } from "uuid";

function App() {
  const allCards = [
    <HomeCard />,
    <ProjectsCard />,
    <ContactCard />,
    <SkillsCard />,
    <AboutCard />,
  ];

  const [card, setCard] = useState(0);
  const [mousePosition, setMousePosition] = useState({});
  const [arrows, setArrows] = useState([
    <RightArrow />,
    <DownArrow />,
    <UpArrow />,
    <LeftArrow />,
  ]);

  const keyDownHandler = (e) => {
    if (e.key === "ArrowRight") {
      setCard(1);
    } else if (e.key === "ArrowDown") {
      setCard(2);
    } else if (e.key === "ArrowUp") {
      setCard(3);
    } else if (e.key === "ArrowLeft") {
      setCard(4);
    }
  };
  useEffect(() => {
    document.addEventListener("keydown", keyDownHandler, true);
  }, []);

  useEffect(() => {
    if (card === 1) {
      setArrows([<LeftArrow />, <UpArrow />, <DownArrow />]);
    } else if (card === 2) {
      setArrows([<RightArrow />, <LeftArrow />, <UpArrow />]);
    } else if (card === 3) {
      setArrows([<RightArrow />, <LeftArrow />, <DownArrow />]);
    } else if (card === 4) {
      setArrows([<RightArrow />, <DownArrow />, <UpArrow />]);
    }
  }, [card]);

  const thingMoveHandler = (e) => {
    setMousePosition({
      mouseX: e.clientX,
      mouseY: e.clientY,
    });
  };

  return (
    <AppStyled className="app" onMouseMove={thingMoveHandler}>
      <GlobalStyle />
      <CustomThing mousePosition={mousePosition} />
      {allCards[card]}
      {arrows}
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
