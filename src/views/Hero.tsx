import styled from "styled-components";
import { Container } from "../styles/Container";
import { HeroHeader, SmallHeader, Subheader } from "../styles/Typography";
import { green, mustard, night, red } from "../constants/colors";
import CircleNav from "../components/CircleNav";

const Hero = () => {
  return (
    <Container>
      <Content>
        <CirclesContainer>
          <CircleNav color={green} circleLink="About" />
          <CircleNav color={night} circleLink="Experience" />
          <CircleNav color={mustard} circleLink="Quiz" />
          <CircleNav color={red} circleLink="Contact" />
        </CirclesContainer>
        <HeadersContainer>
          <Subheader>software engineer</Subheader>
          <Subheader>frontend developer</Subheader>
          <Subheader>designer</Subheader>
          <HeroHeader>
            MICHAEL VINCENT<SSmallHeader>(based in Brooklyn, NY)</SSmallHeader>
          </HeroHeader>
        </HeadersContainer>
      </Content>
    </Container>
  );
};

export default Hero;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: calc(100vw - 4rem);
  height: 100vh;
  margin: 0 2rem;


  @media (max-width: 500px) {
   justify-content: center; 
  }
`;

const SSmallHeader = styled(SmallHeader)`
  @media (max-width: 768px) {
    display: block;
    font-size: 1.25rem;
  }
`;

const CirclesContainer = styled.div`
  display: flex;
  align-items: space-between;
  justify-content: center;
  padding-top: 8rem;
  gap: 2rem;

  @media (max-width: 1100px) {
    flex-wrap: wrap;
    margin-bottom: 2rem;
    margin-left: 0;
    justify-content: flex-start;
    align-items: center;
  }

`;

const HeadersContainer = styled.div`
  padding-bottom: 1rem;
`;
