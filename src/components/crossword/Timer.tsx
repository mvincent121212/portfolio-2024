import { styled } from "styled-components";
import { formatTime } from "../../utils/crosswordUtils";
import { SmallHeader } from "../../styles/Typography";
import { green } from "../../constants/colors";

type TimerProps = {
  time: number;
};

const Timer = ({ time }: TimerProps) => {
  const { minutes, seconds, milliseconds } = formatTime(time);
  return (
    <Container>
      <SSmallHeader>
        {minutes}:{seconds}
      </SSmallHeader>
    </Container>
  );
};

export default Timer;

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
`;

const SSmallHeader = styled(SmallHeader)`
  background-color: ${green};
  padding: 0.25rem;
  border-radius: 8px;
  font-size: 3rem;
  width: 7.5rem;
`;
