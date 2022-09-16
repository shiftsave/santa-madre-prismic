import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-bottom: 40px;
  max-width: 680px;
`;

const BodyText = ({ input }) => (
  <Container>
    <div dangerouslySetInnerHTML={{ __html: input.primary.text.html }} />
  </Container>
);

export default BodyText;

BodyText.propTypes = {
  input: PropTypes.object.isRequired
};
