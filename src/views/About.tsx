import { styled } from "styled-components";
import { Container } from "../styles/Container";
import {
  green,
  green70,
  green80,
  green85,
  green90,
  green95,
} from "../constants/colors";
import {
  BodyText,
  BodyTextWhite,
  HeaderOffBlack,
  HeaderWhite,
  SmallHeader,
} from "../styles/Typography";
import { ViewIds } from "../constants/viewIds";

const About = () => {
  return (
    <Container>
      <Content id={ViewIds.About}>
        <TriangleDisplay>
          <RectangleOne />
          <RectangleTwo />
          <RectangleThree />
        </TriangleDisplay>
        <AboutContent>
          <Heading>
            <SHeaderWhite>ABOUT<br/></SHeaderWhite>
          </Heading>
          <BodyTextWhite>
            I am a software engineer based in Brooklyn, NY. Since moving to the
            city in 2021, I’ve worked for multiple early-stage startups spanning
            from retail to fintech. I also had the great (and challenging)
            experience of teaching 30+ sixth graders math. I’m looking to
            continue my career in a frontend or full-stack role in application
            development.
            <br />
            <br />
            When I’m not obsessing over font types, you can find me on the New
            York Times Games app or in the makeshift music studio closet I
            crafted in my Bed-Stuy apartment.{" "}
          </BodyTextWhite>
        </AboutContent>
      </Content>
    </Container>
  );
};

export default About;

const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Heading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const SHeaderWhite = styled(HeaderWhite)`
  margin-bottom: 0
`

const TriangleDisplay = styled.div`
  display: flex;
  flex: 1 1 0;

`;

const AboutContent = styled.div`
  flex: 1 1 0;
  width: 20vw;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  margin: 0 8rem 0 4rem;
  text-align: justify;

  @media (max-width: 768px) {
    width: auto;
    justify-content: center;
    align-items: center;
    margin: 0 1rem;
    gap: 1rem;
  }
`;

const RectangleOne = styled.div`
  width: 16.67vw;
  height: 100vh;
  background: linear-gradient(
    to bottom right,
    ${green85} 0 50%,
    ${green90} 50% 100%
  );
  animation: gradient 2s ease infinite;

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  @media (max-width: 768px) {
    width: 33.33vw;
    height: 50vh;
  }
`;

const RectangleTwo = styled.div`
  width: 16.67vw;
  height: 100vh;
  background: linear-gradient(
    to top right,
    ${green90} 0 50%,
    ${green95} 50% 100%
  );

  background-repeat: space;

  animation: grow 5s ease infinite;

  @keyframes grow {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(0.5);
    }
  }

  @media (max-width: 768px) {
    width: 33.33vw;
    height: 50vh;
  }
`;

const RectangleThree = styled.div`
  width: 16.66vw;
  height: 100vh;
  background: linear-gradient(
    to bottom right,
    ${green95} 0 50%,
    ${green} 50% 100%
  );

  animation: gradient 2s ease infinite;

  @keyframes grow {
    0% {
      transform: scale(1);
    }
    25% {
      transform: scale(0.9);
    }
    50% {
      tranform: scale(0.75);
    }
    75% {
      transform: scale(0.9);
    }
    100% {
      transform: scale(1);
    }
  }

  @media (max-width: 768px) {
    width: 33.34vw;
    height: 50vh;
  }
`;
