/* eslint react/destructuring-assignment: 0 */
import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { Layout, Heading, Paragraph, Button, TransitionHelper } from "../components";
import { COLOR } from "../constants";
import { Above } from "../utils/mq"


const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;

  ${Above[1]} {
    flex-direction: row;
  }
`

const Content = styled.div`
  max-height: 100vh;
  padding: 48px;
  padding-top: 160px;
  width: 100%;
  overflow: scroll;

  ${Above[1]} {
    width: 50%;
  }
`

const ImageArea = styled.div`
  height: 100vh;
  width: 100%;

  ${Above[1]} {
    width: 50%;
  }
`

const Image = styled(GatsbyImage)`
  width: 100%;
  height: 100%;
  object-fit: cover;

  `
  
const Table = styled.div`
  margin-top: 48px;
  width: 100%;
`

const Row = styled.div`
  border-bottom: ${props => props.fixed ? "none" : `1px solid ${COLOR.SLATE}`};
  bottom: 0;
  display: inline-flex;
  font-family: "Maison", sans-serif;
  left: 0;
  position: ${props => props.fixed && "absolute"};
  width: 100%;
`

const Column = styled.div`
  font-size: 14px;
  text-transform: ${props => props.uppercase && "uppercase"};
  padding: 16px 0 14px 0;
  width: ${props => props.large ? "60%" : "40%"};
`

const Checkout = styled(motion.div)`
  align-items: center;
  background: ${COLOR.PAPER};
  top: 100%;
  display: inline-flex;
  font-family: "Maison", sans-serif;
  left: 0;
  padding: 16px;
  position: fixed;
  justify-content: space-between;
  width: 100%;
  z-index: 1;

  ${Above[1]} {
    width: 100%;
  }
`

// const CheckoutContent = styled.div`
//   width: "100%"
// `

// const CheckoutPrice = styled.p`
//   display: inline-block;
//   font-size: 28px;
//   line-height: 1;
//   margin: 0;

//   &:first-letter {
//     font-size: 18px;
//   }]
// `


  

const Product = ({ data: { prismicProducts }}) => {
  const { data } = prismicProducts;
  const image = getImage(data.photo)

  return (
    <Layout>
      <TransitionHelper />

      <Container>
        <Content>
          <Heading small capitalize>{data.brand}</Heading>
          <Paragraph lg>— {data.flavor_summary.text}
          </Paragraph>
            <Table>
              <Row>
                <Column uppercase>Producer</Column>
                <Column large>{data.producer}</Column>
              </Row>
              <Row>
                <Column uppercase>Region</Column>
                <Column large>{data.location.text}</Column>
              </Row>
              <Row>
                <Column uppercase>Agave Type</Column>
                <Column large>100% {data.harvest_type && "wild"} Agave {data.agave__scientific}</Column>
              </Row>
              <Row>
                <Column uppercase>Oven Type</Column>
                <Column large>{data.oven_type}</Column>
              </Row>
              <Row>
                <Column uppercase>Mash</Column>
                <Column large>{data.mash}</Column>
              </Row>
              <Row>
                <Column uppercase>Fermentation</Column>
                <Column large>{data.fermentation}</Column>
              </Row>
              <Row>
                <Column uppercase>Distillation</Column>
                <Column large>2x {data.distillation}</Column>
              </Row>
            </Table>
            <Checkout animate={{y: "-100%"}} transition={{delay: 0.25}}>
              {/* <CheckoutContent>
                  <CheckoutPrice>$120</CheckoutPrice>
                <Paragraph>{data.total_bottles} bottles </Paragraph>
              </CheckoutContent> */}
              <Button disabled href="tel:+64210723537" >Contact us for pricing details</Button>
            </Checkout>
        </Content>
        <ImageArea>
          <Image image={image} alt="" />
        </ImageArea>
      </Container>
    </Layout>
  );
};

export default Product;

Product.propTypes = {
  data: PropTypes.shape({
    prismicProducts: PropTypes.object.isRequired
  }).isRequired,
  location: PropTypes.object.isRequired
};

// The typenames come from the slice names
// If this doesn't work for you query for __typename in body {} and GraphiQL will show them to you

export const pageQuery = graphql`
query ProductPost($uid: String!) {
    prismicProducts(uid: { eq: $uid }) {
      uid
      data {
        brand
        agave__common
        agave__scientific
        distillation
        fermentation
        mash
        oven_type
        harvest_type
        producer
        type
        total_bottles
        alcohol_content
        location {
          text
        }
        flavor_summary {
          text
        }
        photo {
          gatsbyImageData (
            width: 1600
            placeholder: BLURRED
          )
        }
      }
    }
    products: allPrismicProducts {
      edges {
      node {
        uid
        data {
          agave__common
        }
      }
    }
  }
}
`;
