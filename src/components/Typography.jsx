import styled from "@emotion/styled";
import { Above } from "../utils/mq"

export const Heading = styled.h1`
  display: ${props => props.inline && "inline"};
  font-family: "Romana", sans-serif;
  font-weight: normal;
  font-size: 21px;
  letter-spacing: -0.5px;
  line-height: 1.4;
  margin-bottom: 8px;
  text-transform: ${props => props.capitalize && "capitalize"};

  ${Above[0]} {
    font-size: 28px;
    max-width: 800px;
    margin: 0 auto;
  }

  ${Above[1]} {
    font-size: ${props => props.small ? "52px" : "72px"};
  }

`;

export const Subheading = styled.h2`
  font-family: "Romana", sans-serif;
  font-size: 18px;
  font-weight: normal;
  line-height: 1.4;
  margin-bottom: 12px;
  text-align: ${props => props.center && "center"};

  ${Above[0]} {
    font-size: 19px;
    margin-bottom: 12px;
  }

  ${Above[1]} {
    font-size: 26px;
    margin-bottom: ${props => props.center ? "48px" : "16px"};;
  }
`;

export const Paragraph = styled.div`
  color: ${props => props.subtle ? "#8A95A5" : "#000000"};
  display: ${props => props.inline && "inline"};
  font-size: 16px;
  font-size: ${props => props.sm && "13px"};
  font-size: ${props => props.lg && "17px"};
  line-height: 1.8;
  font-family: "Maison", sans-serif;
  margin-bottom: 8px;
  text-align: ${props => props.center && "center"};

  ${Above[1]} {
    letter-spacing: -0.1px;
    padding: ${props => props.inset && "0 40px"};
  }
`;
