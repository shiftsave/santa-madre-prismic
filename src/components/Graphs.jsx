import React from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { Above } from "../utils/mq"
import { COLOR } from "../constants";
import { Paragraph } from "."

const Container = styled(motion.div)`
  max-width: 720px;
  padding: 8px;
  width: 100%;
`;

const Graph = styled(motion.div)`
  padding-bottom: 16px;
`;

const Row = styled(motion.div)`
  border-bottom: 1px dashed ${COLOR.SLATE};
  cursor: default;
  display: flex;
  justify-content: center;
  font-size: 14px;
  height: 48px;
  text-align: right;
  width: 100%;

  :hover {
    background: ${COLOR.SUBTLE};
  }
`

const Column = styled(motion.div)`
  align-items: center;
  display: flex;
  height: 48px;
  justify-content: ${props => props.legend && "flex-end"};;
  padding: 8px 0;
  padding-right: ${props => props.legend && "16px"};;
  width: ${props => props.legend ? "160px" : "100%"};
`

const Bar = styled(motion.div)`
  align-items: center;
  background: black;
  border-radius: 4px;
  color: ${COLOR.PAPER};
  display: flex;
  height: 100%;
  margin-left: ${props => props.displacement && props.displacement};
  padding-left: 4px;
  width: ${props => props.value && props.value};
`

const dataset = [
  {title: "Producer", value: 20 },
  {title: "Bottling", value: 12.5 },
  {title: "Packaging", value: 12.5 },
  {title: "Sustainability",  value: 10 },
  {title: "Profit", value: 10 },
  {title: "Taxes", value: 35 },
]

export const PricingBreakdown = ({ price }) => {

  let aggDisplacement = 0;
  let currDisplacement = 0;

  return (
  <Container>
    <Graph>
      {dataset.map((entry) => {

        // Positioning variables
        aggDisplacement = aggDisplacement + entry.value
        currDisplacement = aggDisplacement - entry.value

        return (
          <Row key={entry.title}>
          <Column legend>
            {entry.title}
          </Column>
          <Column>
            <Bar value={`${entry.value}%`} displacement={`${currDisplacement}%`}>
              {entry.value}%
            </Bar>
          </Column>
        </Row>
      )})}
    </Graph>
    <Paragraph center subtle sm>
      This is where your money goes when purchasing a ${price} bottle
    </Paragraph>
  </Container>
)}