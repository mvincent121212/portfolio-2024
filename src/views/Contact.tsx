import { styled } from "styled-components";
import { Container } from "../styles/Container";
import { red, white } from "../constants/colors";
import { HeaderWhite } from "../styles/Typography";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <Container>
      <Content id="Contact">
        <SHeaderWhite>CONTACT</SHeaderWhite>
        <Socials>
          <a href="mailto:mvincent121212@gmail.com">
            <Email color={white} />
          </a>
          <Link href="https://github.com/mvincent121212" target="_blank">
            <Github />
          </Link>
          <Link href="https://www.linkedin.com/in/mvincent12/" target="_blank">
            <Linkedin />
          </Link>
        </Socials>
        <CirclesContainer>
          <CircleOne />
          <CircleTwo />
          <CircleThree />
          <CircleFour />
          <CircleFive />
          <CircleSix />
        </CirclesContainer>
      </Content>
    </Container>
  );
};

export default Contact;

const Content = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  flex-direction: column;
  // transform: rotate(0.5deg);
`;

const SHeaderWhite = styled(HeaderWhite)`
  @media (max-width: 768px) {
    font-size: 3rem;
  }

  @media (max-width: 500px) {
    font-size: 2rem;
  }
`;

const Socials = styled.div`
  display: flex;
  align-items: space-between;
  justify-content: center;
  gap: 2rem;
  z-index: 2;
`;

const Email = styled(MdOutlineEmail)`
  width: 64px;
  height: 64px;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 3rem;
    height: 3rem;
  }

  @media (max-width: 500px) {
    width: 2rem;
    height: 2rem;
  }
`;

const Linkedin = styled(CiLinkedin)`
  width: 64px;
  height: 64px;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 3rem;
    height: 3rem;
  }

  @media (max-width: 500px) {
    width: 2rem;
    height: 2rem;
  }
`;

const Github = styled(FaGithub)`
  width: 48px;
  height: 48px;
  padding-top: 0.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 2.5rem;
    height: 2.5rem;
    padding-top: 0.25rem;
  }

  @media (max-width: 500px) {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

const CirclesContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  filter: blur(2px);
  animation: fade 8s ease-in-out infinite;
  transition-delay: 1s;
  transform: rotate(5deg);

  @keyframes fade {
    0% {
      opacity: 0.25;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0.25;
    }
  }
`;

const CircleOne = styled.div`
  // width: 748px;
  // height: 350px;
  width: 42vw;
  height: 21vw;
  border: 8px solid ${red};
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: 1100px) {
    height: 42vw;
  }

  @media (max-width: 768px) {
    height: 50vw;
    width: 50vw;
  }
`;

const CircleTwo = styled(CircleOne)`
  // width: 868px;
  width: 49vw;

  @media (max-width: 768px) {
    width: 55vw;
  }
`;

const CircleThree = styled(CircleOne)`
  // width: 948px;
  width: 53vw;

  @media (max-width: 768px) {
    width: 60vw;
  }
`;

const CircleFour = styled(CircleOne)`
  // width: 1038px;
  width: 58vw;

  @media (max-width: 768px) {
    width: 65vw;
  }
`;

const CircleFive = styled(CircleOne)`
  // width: 1133px;
  width: 63vw;

  @media (max-width: 768px) {
    width: 74vw;
  }
`;

const CircleSix = styled(CircleOne)`
  // width: 1200px;
  width: 67vw;

  @media (max-width: 768px) {
    width: 82vw;
  }
`;

const Link = styled.a`
  color: ${white};

  :hover {
    color: ${white};
  }
`;
