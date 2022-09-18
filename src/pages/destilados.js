import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { kebabCase } from "lodash";
import website from "../../config/website";
import { Layout } from "../components";
import SEO from "../components/SEO";

import { 
  Container,
  Divider,
  Hero,
  Paragraph,
  Subheading, 
  TransitionHelper,
  Listing,
  ListItem,
  SlideUp
} from "../components";

const Product = ({ data: { products, destilados } }) => {
  return (
    <Layout>
      <TransitionHelper />
      <Hero 
            heading=""
            />
        <Container stacked id={website.skipNavId}>
          <Listing>
          {products.edges.map((p, index) => {
            {console.log(p)}
            return (
              <React.Fragment key={p.node.data.agave__common}>
                <ListItem
                  to={`/destilados/${kebabCase(p.node.uid)}`}
                  name={p.node.data.agave__common}
                  subtext={p.node.data.state}
                >
                  {p.node.data.agave__common}
                </ListItem>
                {index + 2 <= products.edges.length && <Divider />}
                </React.Fragment>
            );
          })}
          </Listing>
          <SlideUp>
            <Subheading center>
              {destilados.data.subtitle.text}
            </Subheading>
            <Paragraph inset dangerouslySetInnerHTML={{ __html: destilados.data.content.html }} />
          </SlideUp>
        </Container>
    </Layout>
  );
};



export default Product;

Product.propTypes = {
  data: PropTypes.shape({
    products: PropTypes.object.isRequired,
    destilados: PropTypes.object.isRequired,
  }).isRequired,
  pageContext: PropTypes.shape({
    locale: PropTypes.string.isRequired
  }).isRequired,
  location: PropTypes.object.isRequired
};

export const pageQuery = graphql`
  query ProductQuery {
    products: allPrismicProducts {
      edges {
        node {
          uid
          data {
            agave__common
            state
          }
        }
      }
    }
    
    destilados: prismicDestilados {
      data {
        content {
          text
          html
        }
        subtitle {
          text
        }
        title {
          text
        }
      }
    }
  }

`;
