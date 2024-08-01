import styled from "styled-components";
import { offBlack, offWhite } from "../constants/colors";

/**
 * color: hex
 * circleLink: string that matches string id of section
 */
type CircleNavProps = {
  color: string;
  circleLink: string;
};

const CircleNav = ({ color, circleLink }: CircleNavProps) => {
  return (
    <Circle color={color}>
      <Link href={`#${circleLink}`}>
        <Text color={color}>{circleLink}</Text>
      </Link>
    </Circle>
  );
};

export default CircleNav;

const Circle = styled.div`
  width: 22.5vw;
  height: 22.5vw;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    background-color: ${offBlack};
    border: 4px solid ${(props) => props.color};
    border-radius: 50%;
  }

  @media (max-width: 768px) {
    width: 35vw;
    height: 35vw;
  }

`;

const Link = styled.a`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Text = styled.span`
  font-size: 2.25rem;
  font-family: "Darwin", Georgia, serif;
  color: ${offWhite};

  @media (max-width: 900px) {
    font-size: 2rem;
  }

  @media (max-width: 500px) {
    font-size: 1.5rem;
  }
`;
