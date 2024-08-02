import { useEffect, useState } from "react";
import { styled } from "styled-components";
import CrosswordGrid from "../components/crossword/CrosswordGrid";
import { Container } from "../styles/Container";
import { black, green, mustard } from "../constants/colors";
import CluesSection from "../components/crossword/CluesSection";
import { BigCutout, BodyText, Header, SmallHeader } from "../styles/Typography";
import Timer from "../components/crossword/Timer";
import { EMPTY_GRID } from "../constants/solutionGrid";
import { formatTime } from "../utils/crosswordUtils";

const Quiz = () => {
  const [isActive, setIsActive] = useState(false);
  const [solved, setSolved] = useState(false);
  const [time, setTime] = useState(0);
  const [currentGrid, setCurrentGrid] = useState(EMPTY_GRID);

  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => setTime((t) => t + 10), 10);
    } else {
      if (!interval) {
        return;
      }

      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive]);

  const handleStart = () => {
    setIsActive(true);
  };

  if (solved) {
    return (
      <StartContainer>
        <BodyText>Congrats! Thanks for playing my game.</BodyText>;
        <BigCutout>
          Final time:&nbsp;
          {formatTime(time).minutes}:{formatTime(time).seconds}
        </BigCutout>
      </StartContainer>
    );
  }

  return (
    <Container>
      {isActive ? (
        <Content id="Quiz">
          <GridSection>
            <Timer time={time} />
            <CrosswordGrid
              currentGrid={currentGrid}
              setCurrentGrid={setCurrentGrid}
              setSolved={setSolved}
              setIsActive={setIsActive}
            />
          </GridSection>
          <CluesSection />
        </Content>
      ) : (
        <StartContainer id="Quiz">
          <Header>Quiz</Header>
          <SBodyText>
            Test yourself on what you have learned about me, if you'd like!
          </SBodyText>
          <SSmallHeader>(be prepared, a timer will start)</SSmallHeader>
          <Button onClick={handleStart}>
            <ButtonText>Start</ButtonText>
          </Button>
        </StartContainer>
      )}
    </Container>
  );
};

export default Quiz;

const Content = styled.div`
  width: 100%;
  min-height: 100vh;
  height: auto;
  padding: 2rem 0;
  background-color: ${mustard};
  display: flex;
  margin: 0 auto;

  @media (max-width: 1100px) {
    flex-direction: column;
    overflow-x: scroll;
  }
`;

const GridSection = styled.div`
  flex: 2 1 0;
  position: relative;
  display: flex;
  align-items: center;
`;

const StartContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${mustard};
  flex-direction: column;
  margin: 0 auto;
`;

const Button = styled.div`
  border: 1px solid ${black};
  width: 8rem;
  height: 4rem;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${green};
  cursor: pointer;
`;

const SBodyText = styled(BodyText)`
  margin: 0.5rem 0;
`;

const SSmallHeader = styled(SmallHeader)`
  margin-bottom: 2rem;
`;

const ButtonText = styled.span`
  font-family: "Proxima Nova Semibold Italic", Helvetica, sans-serif;
  font-size: 2rem;
`;
