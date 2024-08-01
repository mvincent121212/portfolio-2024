import styled from "styled-components";
import KeyboardKey from "./KeyboardKey";

type NavigationProps = {
  screenPositionIndex: number;
  setScreenPositionIndex: (newIndex: number) => void;
};

const Navigation = ({
  screenPositionIndex,
  setScreenPositionIndex,
}: NavigationProps) => {
  return (
    <Flex>
      <KeyboardKey
        direction="up"
        screenPositionIndex={screenPositionIndex}
        setScreenPositionIndex={setScreenPositionIndex}
      />
      <KeyboardKey
        direction="down"
        screenPositionIndex={screenPositionIndex}
        setScreenPositionIndex={setScreenPositionIndex}
      />
    </Flex>
  );
};

export default Navigation;

const Flex = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  width: 500px;
  height: 200px;
`;
