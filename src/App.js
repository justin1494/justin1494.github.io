import React, { useState, useEffect } from "react";
import GlobalStyle from "./globalStyles";
import HomeCard from "./components/HomeCard";
import AboutCard from "./components/AboutCard";
import ProjectsCard from "./components/ProjectsCard";
import ContactCard from "./components/ContactCard";
import SkillsCard from "./components/SkillsCard";

import BackgroundImage from "./img/bg2.jpg";

// sstyles
import styled from "styled-components";

function App() {
  const allCards = [
    <HomeCard />,
    <ProjectsCard />,
    <ContactCard />,
    <SkillsCard />,
    <AboutCard />,
  ];

  const [card, setCard] = useState(0);

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

  return (
    <AppStyled>
      <GlobalStyle />
      {allCards[card]}
    </AppStyled>
  );
}

const AppStyled = styled.div`
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
