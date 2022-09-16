import React from "react";
import PropTypes from "prop-types";

const Footer = ({ children }) => <div>{children}</div>;

export default Footer;

Footer.propTypes = {
  children: PropTypes.node.isRequired
};
