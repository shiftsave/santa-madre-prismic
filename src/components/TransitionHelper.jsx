import React from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import {COLOR} from "../constants"

const Container = styled(motion.div)`
  background: ${COLOR.PAPER};
  height: 100%;
  position: fixed;
  opacity: 1;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;
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
