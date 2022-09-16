import React from "react";
import PropTypes from "prop-types";

const CodeBlock = ({ input }) => (
  <div dangerouslySetInnerHTML={{ __html: input.primary.code_block.html }} />
);

export default CodeBlock;

CodeBlock.propTypes = {
  input: PropTypes.object.isRequired
};
