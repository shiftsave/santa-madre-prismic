import React from "react";
import styled from "@emotion/styled";
import { Link, Blackout, BlackoutArea } from "../components";
import { COLOR } from "../constants";
import {Above} from "../utils/mq";

const Container = styled.div`
  position: relative;
  padding: 4px 0 32px 0;
`;

const Subtext = styled.div`
  font-size: 10px;
  position: absolute;
  right: 0;
  top: -12px;
  text-transform: uppercase;
  font-family: "Maison";

  ${Above[1]} {
    font-size: 12px;
    top: -16px;
  }
`;

const ListItemLink = styled(Link)`
  align-items: center;
  display: block;
  line-height: 1.2;
  font-size: 24px;
  font-family: "Romana";
  text-transform: capitalize;
  text-decoration: none;
  transition: 0ms 100ms ease;

  &:before {
    content: "";
    background: ${COLOR.INK};
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    transition: 300ms cubic-bezier(0.760, 0.285, 0.000, 1.080);
    width: 0;
    z-index: -1;
  }

  :hover {
    color: ${COLOR.PAPER};
    :before {
      width: 100%;
    }
  }

  ${Above[0]} {
    font-size: 36px;
  }

  ${Above[1]} {
    font-size: 48px;
  }
`;

// Define the animation behavior for the blackout lines
const BlackoutAreaParams = {
  in: { 
    transition: {
      delay: 2,
      staggerChildren: .12,
      delayChildren: .2
      
    }
  }
}

const BlackoutParams = {
  in: {
    x: "101%",
    transition: { 
      type: "spring",
      delay: 0.25,
      damping: 90,
      stiffness: 100,
      duration: 1.25
    }
  }
}

export const Listing = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  margin-bottom:90px;
  max-width: 660px;
  position: relative;
  width: 100%;

  ${Above[0]} {
    margin-bottom: 160px;
  }

  ${Above[1]} {
    margin-bottom: 140px;
  }
`;

export const ListItem = ({ to, name, subtext }) => {
  return (
    <>
    <Container>
      <BlackoutArea animate="in" variants={BlackoutAreaParams}>
        <Blackout size="54px" variants={BlackoutParams} />
      </BlackoutArea>
      <Subtext>{subtext}</Subtext>
      <ListItemLink to={to}>
        {name}
      </ListItemLink>
    </Container>
    </>
  )
}