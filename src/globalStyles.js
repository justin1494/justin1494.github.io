import { createGlobalStyle, keyframes } from "styled-components";

import { fadeInUp, fadeInDown } from "react-animations";

const UnderlineAnimation = keyframes`${fadeInUp}`;
const HomeMainAnimations = keyframes`${fadeInDown}`;

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto Mono', monospace;
  }

  .card {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 750px;
    height: 500px;
    border: 0.5px solid black;
    border-radius: 6px;
    background-color: white;
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
    overflow: hidden;
  }

  .title, .controls {
    position: relative;
   
  }

    .title,  .controls {
      opacity: 0;
    animation: 700ms ${UnderlineAnimation} forwards;
    animation-delay: 600ms;
    }

    .main {
      opacity: 0;
      animation: 700ms ${HomeMainAnimations} forwards;
    animation-delay: 600ms;
    }


    h1 {
      position: relative;
      z-index: 1;
      color: #2d2d2d;
      font-family: 'Press Start 2P', cursive;
      font-size: 26px;
    }

    .underline {
      position: absolute;
      bottom: -5px;
      left: -10%;
      width: 120%;
      height: 50%;
      background-color: rgb(200, 10, 10, 0.5);
      opacity: 0;
    animation: 700ms ${UnderlineAnimation} forwards;
    animation-delay: 600ms;
    }
  

  .main-text {
    margin-top: 60px;
    opacity: 0;
    animation: 600ms ${UnderlineAnimation} forwards;
    animation-delay: 700ms;
  }

.arrow {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  animation: 0.5s startAnimation;
  cursor: pointer;

  p{
    font-family: 'Press Start 2P', cursive;
  }

  svg {
    font-size: 30px;
  }

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


  @media screen and (max-width: 1200px) {
h1 {
  font-size: 18px;
}

.card {
  width: 450px;
  height: 350px;
}

.arrow {
  padding: 0 10px;
  font-size: 14px;
  svg {
    display: none;
  }
}

  }

  @media screen and (max-width: 800px) {
h1 {
  font-size: 18px;
  }

.card {
  width: 350px;
  height: 490px;
  }

.arrow {
  font-size: 12px;
  }
}

`;

// nex breakpoint on 830px

export default GlobalStyle;
