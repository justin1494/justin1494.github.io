import { createGlobalStyle, keyframes } from "styled-components";

import { fadeInUp } from "react-animations";

const UnderlineAnimation = keyframes`${fadeInUp}`;

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto Mono', monospace;
  }

  .title, .controls {
    position: relative;
    opacity: 0;
    animation: 1s ${UnderlineAnimation} forwards;
    animation-delay: 900ms;

    h1 {
      position: relative;
      z-index: 1;
    }

    .underline {
      position: absolute;
      bottom: -5px;
      left: -10%;
      width: 120%;
      height: 50%;
      background-color: rgb(200, 10, 10, 0.5);
      opacity: 0;
    animation: 1s ${UnderlineAnimation} forwards;
    animation-delay: 900ms;;
    }
  }

  .main-text {
    opacity: 0;
    animation: 1s ${UnderlineAnimation} forwards;
    animation-delay: 900ms;
  }

.arrow {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  animation: 0.5s startAnimation;

  @keyframes startAnimation {
    from {
        opacity: 0;
        scale: 0;
      }
      to {
        opacity: 1;
        scale: 1;
      }
  }

}
.animated {
    animation: 0.3s arrowAnimation forwards;
    @keyframes arrowAnimation {
      from {
        opacity: 1;
        scale: 1;
      }
      to {
        opacity: 0;
        scale: 0;
      }
    }
  }
`;

export default GlobalStyle;
