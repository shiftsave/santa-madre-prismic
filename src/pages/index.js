import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { Hero, SliceZone, TransitionHelper, Layout } from "../components";

const Index = ({
  data: { homepage },
  location
}) => {
  const { data } = homepage;
  console.log(location.pathname);

  return (
    <Layout>
      <TransitionHelper />
      <Hero
        heading={homepage.data.title.text}
        subheading={homepage.data.subtitle.text}
        multiline
      />
      <SliceZone allSlices={data.body} />
    </Layout>
  );
};

export default Index;

Index.propTypes = {
  data: PropTypes.shape({
    homepage: PropTypes.object.isRequired
  }).isRequired
};

export const pageQuery = graphql`
  query IndexQuery {
    homepage: prismicHomepage {
        data {
          title {
            text
            html
          }
          subtitle {
            text
            html
          }
          body {
            ... on PrismicHomepageDataBodyHomepageBlock {
              id
              slice_type
              primary {
                block_content {
                  html
                  text
                }
                link {
                  text
                }
                block_variant
                block_title {
                  text
                }
                link_desc {
                  text
                }
                block_image {
                    alt
                    copyright
                    url
                    gatsbyImageData (
                      width: 1600
                      placeholder: BLURRED
                    )
                }
              }
            }
          }
        }
      }
    }`
    