import styled from "styled-components";
import { black, offBlack, offWhite, white } from "../constants/colors";

/**
 * color: hex
 * circleLink: string that matches string id of section
 * size: the large hero size or the small navbar size
 */
type CircleNavProps = {
  color: string;
  circleLink: string;
  size?: "large" | "small";
};

const CircleNav = ({ color, circleLink, size = "large" }: CircleNavProps) => {
  return (
    <Circle size={size} color={color}>
      <Link href={`#${circleLink}`}>
        <Text size={size} color={color}>
          {circleLink}
        </Text>
      </Link>
    </Circle>
  );
};

export default CircleNav;

const Circle = styled.div<{ size: "large" | "small"; color: string }>`
  width: ${({ size }) => (size === "large" ? "22.5vw" : "4rem")};
  height: ${({ size }) => (size === "large" ? "22.5vw" : "4rem")};
  border-radius: 50%;
  background-color: ${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ size }) =>
    size === "large" &&
    `
      &:hover {
        background-color: ${offBlack};
        border: 4px solid currentColor;
        border-radius: 50%;
      }
    `}

  @media (max-width: 768px) {
    width: ${({ size }) => (size === "large" ? "35vw" : "4rem")};
    height: ${({ size }) => (size === "large" ? "35vw" : "4rem")};
  }
`;

const Link = styled.a`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Text = styled.span<{ size: "large" | "small"; color: string }>`
  font-size: ${({ size }) => (size === "large" ? "2.25rem" : "0.75rem")};
  font-family: "Darwin", Georgia, serif;
  color: ${offWhite};

  @media (max-width: 900px) {
    font-size: ${({ size }) => (size === "large" ? "2rem" : "0.75rem")};
  }

  @media (max-width: 500px) {
    font-size: ${({ size }) => (size === "large" ? "2rem" : "0.75rem")};
  }
`;
