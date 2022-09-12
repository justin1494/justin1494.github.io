import React from "react";
import Card from "./components/Card";
import GlobalStyle from "./globalStyles";

// sstyles
import styled from "styled-components";

function App() {

  return (
    <AppStyled>
      <GlobalStyle />
      <Card />
    </AppStyled>
  );
}

const AppStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

export default App;
