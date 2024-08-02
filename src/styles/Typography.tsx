import styled from "styled-components";
import {
  black,
  blueInkPen,
  mustard,
  night,
  offBlack,
  offWhite,
  red,
  white,
} from "../constants/colors";

export const HeroHeader = styled.span`
  font-size: 7rem;
  font-family: "Proxima Nova Semibold Italic", Helvetica, sans-serif;
  color: ${offWhite};

  @media (max-width: 1100px) {
    font-size: 5rem;
  }

  @media (max-width: 900px) {
    font-size: 4rem;
  }

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

export const Subheader = styled.p`
  font-size: 2.5rem;
  font-family: "Darwin", Georgia, serif;
  color: ${offWhite};
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
`;

export const SubheaderBlack = styled(Subheader)`
  color: ${black};
`;
export const SubheaderRed = styled(Subheader)`
  color: ${red};
`;

export const SmallHeader = styled.span`
  font-size: 1.5rem;
  font-family: "Darwin", Georgia, serif;
  color: ${offWhite};
`;

export const Header = styled.span`
  font-size: 6rem;
  font-family: "Proxima Nova Semibold Italic", Helvetica, sans-serif;
  color: ${offBlack};

  @media (max-width: 1280px) {
    font-size: 5rem;
  }

  @media (max-width: 1024px) {
    font-size: 4rem;
  }
`;

export const HeaderInk = styled(Header)`
  color: ${blueInkPen};
`;

export const HeaderOffBlack = styled(Header)`
  color: ${offBlack};
`;

export const HeaderWhite = styled(Header)`
  color: ${white};
  font-family: "Proxima Nova Semibold Italic", Helvetica, sans-serif;
`;

export const HeaderWhiteNormal = styled(HeaderWhite)`
  font-family: "Proxima Nova Medium", Helvetica, sans-serif;
`;

export const BodyText = styled.p`
  font-size: 2rem;
  font-family: "Darwin", Georgia, serif;
  margin: 2rem 0;
  color: ${offBlack};

  @media (max-width: 1280px) {
    font-size: 1.5rem;
  }

  @media (max-width: 1024px) {
    font-size: 1.25rem;
  }

  @media (max-width: 768px) {
    margin: 1rem 0;
  }

  @media (max-width: 500px) {
    font-size: 1rem;
  }
`;

export const BodyTextWhite = styled(BodyText)`
  color: ${white};
`;

export const CutoutSmallHeader = styled(SmallHeader)`
  // background-color: ${white};
  color: ${mustard};
  mix-blend-mode: screen;
  padding: 0.25rem 0.25rem 0 0.25rem;
`;

export const BigCutout = styled(Header)`
  background-color: ${night};
  color: ${white};
  padding: 1rem;
  border-radius: 16px;
  font-family: 'Darwin', Georgia, serif;

  @media (max-width: 500px) {
    margin: 0 1rem;
    font-size: 3rem;
  }
`;
