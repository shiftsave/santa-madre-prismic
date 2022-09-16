import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import styled from "@emotion/styled";
import { Link, Subheading, Paragraph, SlideUp } from "../components";
import { Above } from "../utils/mq";

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  margin:0 auto;
  margin-top: 60px;
  max-width: 1200px;
  padding: 16px;
  position: relative;

  ${Above[0]} {
    margin-top: 120px;
    margin-bottom: 80px;
  }

  ${Above[1]} {
    flex-direction: ${props => props.position == "right" ? "row-reverse" : "row"};
    height: 400px;
    margin-top: 240px;
    padding: 16px;
  }

  ${Above[2]} {
    padding: 24px;
  }
`;

const Content = styled.div`
  height: max-content;
  width: 100%;
  padding: 8px;

  p {
    margin-bottom: 12px;
  }

  ${Above[1]} {
    width: 50%;
    padding: 16px;
    max-width: 600px;
  }

  ${Above[2]} {
    padding: 24px;
    padding-left: ${props => props.position == "left" && "80px"};
    padding-right: ${props => props.position == "right" && "80px"};
  }
`;

const Image = styled.div`
  height: 100%;
  left: ${props => props.variant == "right" && "0"};
  overflow: hidden;
  position: relative;
  right: ${props => props.variant == "left" && "0"};
  width: 100%;

  ${Above[1]} {
    position: absolute;
    width: 40%;
  }
`;

const HomeBlock = ({ input }) => (
  <SlideUp delay={.2}>
    <Container
      position={input.primary.block_variant}
    >
    <Content position={input.primary.block_variant}>
      <Subheading>{input.primary.block_title.text}</Subheading>
      
      <Paragraph>
        {input.primary.block_content.text}
      </Paragraph>
      <Link to={input.primary.link.text}>{input.primary.link_desc.text}</Link>
    </Content>
    <Image variant={input.primary.block_variant}>
      <Img fluid={input.primary.block_image.localFile.childImageSharp.fluid} />
    </Image>
  </Container>
  </SlideUp>
);

export default HomeBlock;

HomeBlock.propTypes = {
  input: PropTypes.object.isRequired
};
