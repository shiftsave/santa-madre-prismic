import React from "react";
import PropTypes from "prop-types";
import { BodyText, CodeBlock, Image, Quote, HomeBlock } from "../slices";

const SliceZone = ({ allSlices }) => {
  const slice = allSlices.map(s => {
    switch (s.slice_type) {
      // These are the API IDs of the slices
      case "text":
        return <BodyText key={s.id} input={s} />;
      case "code_block":
        return <CodeBlock key={s.id} input={s} />;
      case "image":
        return <Image key={s.id} input={s} />;
      case "quote":
        return <Quote key={s.id} input={s} />;
      case "homepage_block":
        return <HomeBlock key={s.id} input={s} />;
      default:
        return null;
    }
  });
  return <div>{slice}</div>;
};

export default SliceZone;

SliceZone.propTypes = {
  allSlices: PropTypes.array.isRequired
};
