import React from "react";
import { motion } from "framer-motion";
import { Link } from "gatsby";
import styled from "@emotion/styled";
import { COLOR } from "../constants";
import {Above} from "../utils/mq";

const Container = styled.div`
  height: 144px;
  position: absolute;
  z-index: 99;
`;

export const Nav = styled(motion.div)`
  align-items: center;
  display: flex;
  height: 120px;
  justify-content: space-between;
  width: 100%;
  opacity: 0;
  padding: 24px;
  position: fixed;
  top: -144px;
  z-index: ;

  ${Above[0]} {
    height: 144px;
    padding: 48px;
  }
`;

export const NavItem = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const NavMenu = styled(motion.div)`
  background: #fff;
  display: flex;
  flex-direction: column;
  height: 100vh;
  left: -360px;
  min-height: 600px;
  padding: 48px;
  position: fixed;
  top: 0;
  width: 360px;
  z-index: 4;

  &:before {
    background: ${COLOR.CHALK};
    content: "";
    height: 100%;
    left: -100%;
    width: 100%;
    top: 0;
    position: absolute;
  }
`;

export const NavMenuGroup = styled.div`
  align-items: ${props => props.tertiary ? "flex-end" : "flex-start"};
  display: flex;
  flex-direction: ${props => props.row ? "row" : "column"};
  flex-grow: ${props => props.grow ? props.grow : 0};
  padding: 0;
  width: 100%;
  margin: 0 auto;

  a {
    font-size: ${props => props.secondary ? "16px" : "27px"};
    font-size: ${props => props.tertiary && "12px"};
    padding-top: 4px;
    text-decoration: none;
  }
`;

export const LocaleSwitcher = styled.div`
  p {
    display: inline-block;
    padding: 0 13px;
  }
`;

export const LocaleLink = styled(Link)`
  text-decoration: ${props => props.selected ? "underline" : "none"};

  &:after {
    background: ${props => props.selected ? COLOR.INK : COLOR.CHALK};
    bottom: -2px;
    content: "";
    height: 2px;
    left: 0;
    position: absolute;
    width: 100%;
  }
`;

export const Navigation = ({ animate, children, transition }) => (
  <Container>
    <Nav transition={transition} animate={animate}>
      {children}
    </Nav>
  </Container>
);
