import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto Mono', monospace;
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
