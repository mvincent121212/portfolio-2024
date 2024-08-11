import styled from "styled-components";
import CircleNav from "./CircleNav";
import {
  black,
  green,
  mustard,
  night,
  offBlack,
  offWhite,
  red,
  white,
} from "../constants/colors";
import { useState } from "react";

interface NavbarProps {
  isVisible: boolean;
}

const Navbar = ({ isVisible }: NavbarProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <NavbarWrapper>
      <ToggleCircle
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        {isExpanded ? (
          <NavbarContainer isExpanded={isExpanded} isVisible={isVisible}>
            <CircleNav color={green} circleLink="About" size="small" />
            <CircleNav color={night} circleLink="Experience" size="small" />
            <CircleNav color={mustard} circleLink="Quiz" size="small" />
            <CircleNav color={red} circleLink="Contact" size="small" />
          </NavbarContainer>
        ) : (
          <Container>
            <NavbarDisplay>
              <Text>Navigate</Text>
            </NavbarDisplay>
          </Container>
        )}
      </ToggleCircle>
    </NavbarWrapper>
  );
};

export default Navbar;

const NavbarWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 1rem;
`;

const ToggleCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NavbarContainer = styled.div<{ isVisible: boolean; isExpanded: boolean }>`
  background-color: ${offWhite};
  border: 1px solid ${black};
  border-radius: 16px;
  padding: 0.5rem;
  display: ${({ isVisible }) => (isVisible ? "flex" : "none")};
  justify-content: center;
  gap: 1rem;
  pointer-events: ${({ isVisible }) => (isVisible ? "auto" : "none")};
  overflow: hidden;
  z-index: 9999;

  @media (max-width: 768px) {
    display: none;
  }

`;

const NavbarDisplay = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background-color: ${offBlack};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.span`
  font-size: "0.75rem";
  font-family: "Darwin", Georgia, serif;
  color: ${white};
`;

const Container = styled.div`
  padding-bottom: 0.5rem;
`;
