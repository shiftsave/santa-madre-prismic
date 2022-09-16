import React from 'react';
  
function App() {
    return ( 
      <h1> Hello World! </h1>
    );
}
  
export default App;


/*
import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { Hero, SliceZone, TransitionHelper } from "../components";
import { LocaleContext } from "../components/Layout";
import SEO from "../components/SEO";

const Index = ({
  data: { homepage },
  pageContext: { locale },
  location
}) => {
  const lang = React.useContext(LocaleContext);
  const i18n = lang.i18n[lang.locale];
  const { data } = homepage;

  return (
    <>
      <TransitionHelper />
      <SEO pathname={location.pathname} locale={locale} />
      <Hero
        heading={homepage.data.title.text}
        subheading={homepage.data.subtitle.text}
        multiline
      />
      <SliceZone allSlices={data.body} />
    </>
  );
};

export default Index;

Index.propTypes = {
  data: PropTypes.shape({
    posts: PropTypes.object.isRequired,
    homepage: PropTypes.object.isRequired
  }).isRequired,
  pageContext: PropTypes.shape({
    locale: PropTypes.string.isRequired
  }).isRequired,
  location: PropTypes.object.isRequired
};

export const pageQuery = graphql`
  query IndexQuery($locale: String!) {
    homepage: prismicHomepage(lang: { eq: $locale }) {
      data {
        title {
          text
        }
        subtitle {
          text
        }
        body {
          ... on PrismicHomepageBodyHomepageBlock {
            slice_type
            id
            primary {
              block_variant
              block_title {
                text
              }
              block_content {
                html
                text
              }
              link {
                text
              }
              link_desc {
                text
              }
              block_image {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 1200, quality: 90) {
                      ...GatsbyImageSharpFluid_noBase64
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    posts: allPrismicPost(
      sort: { fields: [data___date], order: DESC }
      filter: { lang: { eq: $locale } }
    ) {
      edges {
        node {
          uid
          data {
            title {
              text
            }
            date(formatString: "DD.MM.YYYY")
            categories {
              category {
                document {
                  data {
                    name
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
*/