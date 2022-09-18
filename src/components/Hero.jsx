import React from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { Above } from "../utils/mq"

import { Heading, Paragraph, Blackout, BlackoutArea } from "../components"

const Container = styled(motion.div)`
  margin: 0 auto;
  margin-bottom: 10px;
  margin-top: 180px;
  max-width: 940px;
  text-align: center;
  padding: 0 8px;
  position: relative;

  ${Above[0]} {
    margin-bottom: 10px;
    margin-top: 240px;
  

  ${Above[1]} {
    margin-bottom: 10px;
  }
  
`;

// Define the animation behavior for the blackout lines
const BlackoutAreaParams = {
  in: { 
    transition: {
      delay: 1,
      staggerChildren: .12,
      delayChildren: .2
      
    }
  }
}

const BlackoutParams = {
  in: {
    x: "100%",
    transition: { 
      type: "spring",
      damping: 90,
      stiffness: 100,
      duration: 1.25
    }
  }
}


const Hero = ({ heading, subheading, multiline,small }) => (
  <Container>
    {multiline ?
      <BlackoutArea animate={"in"} variants={BlackoutAreaParams}>
            <Blackout size="30%" variants={BlackoutParams} />
            <Blackout size="30%" variants={BlackoutParams} />
            <Blackout size="30%" variants={BlackoutParams} />
      </BlackoutArea>
      : 
      <BlackoutArea animate={"in"} variants={BlackoutAreaParams}>
            <Blackout variants={BlackoutParams} />
      </BlackoutArea>
      
    }
    <Heading small={small}>{heading}</Heading>
    {subheading && <Paragraph lg>{subheading}</Paragraph>}
  </Container>
);

export default Hero;