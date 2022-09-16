import React from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import {COLOR} from "../constants"

const Container = styled(motion.div)`
  opacity: 0;
`;

export const TransitionHelper = () =>
  <Container 
    animate={{ x: "100%" }}
    transition={{
      type: 'spring',
      stiffness: 80,
      damping: 900
    }}
   />

export const SlideUp = ({children, delay}) => 
  <Container
    animate={{ y: -50, opacity: 1 }}
    transition={{
      type: 'spring',
      stiffness: 80,
      damping: 1200,
      delay: delay
    }}
  >
    {children}
  </Container>

export const BlackoutArea = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  left: 0%;
  height: 100%;
  position: absolute;
  overflow:hidden;
  top: 0;
  width: 100%;
`

export const Blackout = styled(motion.div)`
  background: transparent;
  height: ${props => props.size ? props.size : "100%"};
  width: 100%;
  opacity: 1;
  transform: translateX(-100%);
  z-index: 2;

  &:after {
    background: transparent;
    content: '';
    height: 100%;
    left: 100%;
    position: absolute;
    top: 0;
    width: 100%;
  }
`