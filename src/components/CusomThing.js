import styled from "styled-components";

const CustomThing = ({ mousePosition }) => {
  return (
    <>
      <CustomThingStyled
        style={{ top: mousePosition.mouseY, left: mousePosition.mouseX }}
      />
    </>
  );
};

const CustomThingStyled = styled.div`
  position: absolute;
  width: 2px;
  height: 2px;
  translate: -50% -50%;
  background-color: royalblue;
  border-radius: 50%;
  animation: thingAnimation 1s;

  @keyframes thingAnimation {
    from {
      scale: 0.2;
      opacity: 1;
    }
    to {
      scale: 2;
      opacity: 0;
    }
  }
`;

export default CustomThing;
