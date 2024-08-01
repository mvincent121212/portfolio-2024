import styled from "styled-components";
import { lightBlue, lightestBlue, night } from "../constants/colors";
import {
  BodyTextWhite,
  CutoutSmallHeader,
  HeaderWhite,
  SmallHeader,
} from "../styles/Typography";

const Experience = () => {
  return (
    <LongContainer>
      <Content id="Experience">
        <TopHeader>
          EXPERIENCE
          <SSmallHeader>
            &nbsp;&nbsp;&nbsp;&nbsp;(more details in my{" "}
            <a
              href="src/assets/resources/michaelvincent_resume.pdf"
              target="blank"
            >
              resume
            </a>
            )
          </SSmallHeader>
        </TopHeader>
        <ArrowOne src="src/assets/images/arrow-1.png" />
        <ExperienceSection>
          <LTextSection>
            <SHeaderWhite>Madeyn</SHeaderWhite>
            <CutoutSmallHeader>JAN 2022 - OCT 2022</CutoutSmallHeader>
            <BodyTextWhite>
              Madeyn is an early-stage startup and social media app for buying
              and selling wholesale retail products, similar to Alibaba, that I
              worked on in 2022. <br />
              <br /> I primarily worked on frontend functionality on the iOS and
              Android versions of the app and worked closely with the product
              designer. <br />
              <br /> Pictured is a screenshot of the profile page and messaging
              page, both of which I created during my time there.
            </BodyTextWhite>
          </LTextSection>
          <ImagesSection>
            <MadeynImg src="src/assets/images/madeyn-one.png" />
            <MadeynImg src="src/assets/images/madeyn-two.png" />
          </ImagesSection>
        </ExperienceSection>
        <ArrowTwo src="src/assets/images/arrow-2.png" />
        <ExperienceSection>
          <ImagesSection>
            <TaxbitImg src="src/assets/images/taxbit-2.jpg" />
          </ImagesSection>
          <RTextSection>
            <SHeaderWhiteRight>TaxBit</SHeaderWhiteRight>
            <CutoutSmallHeader>OCT 2022 - JUNE 2024</CutoutSmallHeader>
            <BodyTextWhite>
              TaxBit, originally Tactic and acquired in Jan. 2023, is a crypto
              accounting subledger that I worked on from late 2022 to 2024.
              <br />
              <br /> I worked across the stack at this position and learned a
              lot about managing high volume and complex data. One such example
              is the dashboard pictured, which I developed full stack and aided
              in the design process of.
            </BodyTextWhite>
          </RTextSection>
        </ExperienceSection>
        <ArrowThree src="src/assets/images/arrow-3.png" />
      </Content>
      <Footer>
        <SBodyTextWhite>
          (And now I'm looking for my next experience, so I created this
          website!
        </SBodyTextWhite>
        <a
          href="https://www.figma.com/design/wlaNfClV6CPfnPfGFM27dO/michael_vincent_website?node-id=0-1&t=EBPuxQWtl5W6uC1D-1"
          target="_blank"
        >
          <FigmaIcon src="src/assets/images/figma.png" />
        </a>
        <a
          href="https://www.figma.com/design/wlaNfClV6CPfnPfGFM27dO/michael_vincent_website?node-id=0-1&t=EBPuxQWtl5W6uC1D-1"
          target="_blank"
        >
          <GithubIcon src="src/assets/images/github_white.png" />
        </a>
        <SBodyTextWhite>)</SBodyTextWhite>
      </Footer>
    </LongContainer>
  );
};

export default Experience;

const LongContainer = styled.div`
  width: 100%;
  height: auto;
  padding-top: 4rem;
  position: relative;

  background-image: repeating-linear-gradient(
    to bottom right,
    ${night} 0 60px,
    ${lightestBlue} 60px,
    ${lightBlue} 62px
  );
`;

const TopHeader = styled(HeaderWhite)`
  margin-top: 4rem;
  border-radius: 8px;
`;

const SSmallHeader = styled(SmallHeader)`
  @media (max-width: 768px) {
    display: block;
  }
`;

const Content = styled.div`
  width: 100%
  height: auto;
  padding: 0 2rem 0 2rem;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  gap: 1rem;
  position: relative;
`;

const ArrowOne = styled.img`
  width: 40vw;
  height: auto;
  margin: 0 auto;

  animation: fade 2s ease-in infinite;

  @keyframes fade {
    0% {
      opacity: 0.25;
    }
    100% {
      opacity: 1;
    }
  }
`;

const ExperienceSection = styled.div`
  display: flex;
  width: 100%;
  padding: 1rem 0;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const TextSection = styled.div`
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
`;

const LTextSection = styled(TextSection)``;

const RTextSection = styled(TextSection)`
  align-items: flex-end;
  padding-right: 4rem;
  text-align: right;

  @media (max-width: 768px) {
    text-align: left;
    padding-right: 0;
    align-items: flex-start;
  }
`;

const ImagesSection = styled.div`
  flex: 1 1 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

const SHeaderWhite = styled(HeaderWhite)`
  padding-bottom: 0;
`;

const SHeaderWhiteRight = styled(SHeaderWhite)`
  @media (max-width: 768px) {
    text-align: left;
  }
`;

const MadeynImg = styled.img`
  width: 20vw;
  height: auto;
  z-index: 3;

  @media (max-width: 768px) {
    width: 35vw;
  }
`;

const ArrowTwo = styled.img`
  width: 60vw;
  height: auto;
  margin: 0 auto;

  animation: fade 2s ease-in infinite;

  @keyframes fade {
    0% {
      opacity: 0.25;
    }
    100% {
      opacity: 1;
    }
  }
`;

const TaxbitImg = styled.img`
  width: 40vw;
  height: auto;
  z-index: 3;

  @media (max-width: 768px) {
    width: 75vw;
  }
`;

const ArrowThree = styled.img`
  width: 75vw;
  height: auto;
  margin: 0 auto 4rem auto;

  animation: fade 2s ease-in infinite;

  @keyframes fade {
    0% {
      opacity: 0.25;
    }
    100% {
      opacity: 1;
    }
  }
`;

const Footer = styled.div`
  position: absolute;
  bottom: 0;
  margin: 0 auto;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: 100%;
`;

const FigmaIcon = styled.img`
  width: 1.5rem;
  height: 1.55rem;
  margin-bottom: 1rem;
  padding: 0 0.5rem;
  cursor: pointer;

  @media (max-width: 600px) {
    width: 1.25rem;
    height: 1.25rem;
  }

  @media (max-width: 500px) {
    width: 1rem;
    height: 1rem;
  }
`;

const GithubIcon = styled.img`
  width: 1.75rem;
  height: 1.75rem;
  margin-bottom: 1rem;
  padding-right: 0.5rem;

  @media (max-width: 600px) {
    width: 1.5rem;
    height: 1.5rem;
  }

  @media (max-width: 600px) {
    width: 1rem;
    height: 1rem;
  }
`;

const SBodyTextWhite = styled(BodyTextWhite)`
  margin: 0;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 600px) {
    font-size: 0.75rem;
  }

  @media (max-width: 500px) {
    font-size: 0.75rem;
  }
`;
