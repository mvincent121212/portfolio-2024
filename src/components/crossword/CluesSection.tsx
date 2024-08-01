import { styled } from "styled-components";
import { BodyText, SubheaderBlack } from "../../styles/Typography";

const CluesSection = () => {
  return (
    <Container>
      <Clues>
        <SubheaderBlack>ACROSS</SubheaderBlack>
        <BodyText>
          3. Past employer homophone for where something is created?
        </BodyText>
        <BodyText>5. Subject I taught middle schoolers</BodyText>
        <SBodyText>
          7. What the customer was showing in the Madeyn app
        </SBodyText>
        <SubheaderBlack>DOWN</SubheaderBlack>
        <BodyText>1. Neighborhood I live in</BodyText>
        <BodyText>
          2. What every recruiter reading this is now inspired to do?
        </BodyText>
        <BodyText>4. I turned my closet into a music ______.</BodyText>
        <BodyText>
          6. Original name for the accounting ledger I worked on at TaxBit
        </BodyText>
      </Clues>
    </Container>
  );
};

export default CluesSection;

const Container = styled.div`
  flex: 1 1 0;
  padding-right: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 1100px) {
  }
`;

const Clues = styled.div`
  @media (max-width: 1100px) {
    column-count: 2;
    padding: 0 2rem;
    column-gap: 2rem;
  }
`;

const SBodyText = styled(BodyText)`
  padding-bottom: 2rem;

  @media (max-width: 530px) {
    padding-bottom: 3rem;
  }
`;
