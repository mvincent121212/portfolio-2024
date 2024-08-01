import styled from "styled-components";
import screens from "./screens";
import { WINDOW_HEIGHT } from "../../constants/windowHeight";

const screensLength = screens.length;

type KeyboardKeyProps = {
  direction: "up" | "down";
  screenPositionIndex: number;
  setScreenPositionIndex: (newIndex: number) => void;
};

const KeyboardKey = ({
  direction,
  screenPositionIndex,
  setScreenPositionIndex,
}: KeyboardKeyProps) => {
  // don't show the key if there's no next index
  if (
    (screenPositionIndex === 0 && direction === "up") ||
    (screenPositionIndex === screensLength - 1 && direction === "down")
  ) {
    return undefined;
  }

  const handleKeyPress = () => {
    const newIndex =
      direction === "down" ? screenPositionIndex + 1 : screenPositionIndex - 1;
    setScreenPositionIndex(newIndex);

    window.scrollTo({
      left: 0,
      top: WINDOW_HEIGHT * newIndex,
      behavior: "smooth",
    });
  };

  return (
    <KeyContainer onClick={handleKeyPress}>
      {direction === "down" ? "Down" : "Up"}
    </KeyContainer>
  );
};

export default KeyboardKey;

const KeyContainer = styled.div`
  width: 100px;
  height: 100px;
  background-color: blue;
`;
