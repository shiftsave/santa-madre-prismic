import React from "react";
import PropTypes from "prop-types";
import { getImage, GatsbyImage } from "gatsby-plugin-image";


const Image = ({ image }) => (
  <div className="image">
    <GatsbyImage image={getImage(image)} alt="" />
  </div>
);

export default Image;

Image.propTypes = {
  input: PropTypes.object.isRequired
};
