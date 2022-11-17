import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import { Container, Hero, Subheading, TransitionHelper, Layout, Paragraph } from "../components";
import { Above } from "../utils/mq";

const ImageContainer = styled(motion.div)`
  align-items: center;
  display: flex;
  justify-content: center;
  overflow: hidden;
  position: relative;
  width: 100%;
  ${Above[1]} {
    height: 600px;
    margin-bottom: 80px;
  }
`

const Image = styled(motion.div)`
  ${Above[1]} {
    height: 400px;
    overflow: hidden;
    margin: ${props => props.left && "-200px 48px 0 0"};
    margin: ${props => props.right && "200px 0 0 48px"};
    min-width: 640px;
  }
`

const About = ({
  data: { about }}) => {
  return (
    <Layout>
      <TransitionHelper />
      <Hero
        heading={about.data.title.text}
        multiline
        small
      />
      <Container stacked>
        <Subheading center>
          {about.data.subtitle.text}
        </Subheading>
      </Container>
      <ImageContainer>
        <Image left>
          <GatsbyImage image={getImage(about.data.images[1].image)} alt="" />
        </Image>
        <Image>
        <GatsbyImage image={getImage(about.data.images[0].image)} alt="" />
        </Image>
        <Image right>
        <GatsbyImage image={getImage(about.data.images[2].image)} alt="" />
        </Image>
      </ImageContainer>
      <Container stacked>
        <Paragraph inset dangerouslySetInnerHTML={{ __html: about.data.content.html }} />
      </Container>
    </Layout>
  );
};

export default About;

About.propTypes = {
  data: PropTypes.shape({
    about: PropTypes.object.isRequired
  }).isRequired,
};

export const pageQuery = graphql`
  query AboutQuery {
    about: prismicAbout {
      data {
        content {
          html
          text
        }
        highlight {
          text
        }
        images {
            image {
                gatsbyImageData (
                    width: 1600
                    placeholder: BLURRED
                  )
            }
        }
        subtitle {
          text
        }
        title {
          text
        }
      }
    }
  }
`
