// /* eslint react/destructuring-assignment: 0 */
// import React from "react";
// import PropTypes from "prop-types";
// import { graphql } from "gatsby";
// import Img from "gatsby-image";
// import styled from "@emotion/styled";
// import { Heading, Paragraph, TransitionHelper, SlideUp } from "../components";
// import website from "../../config/website";
// import { LocaleContext } from "../components/Layout";
// import { Above } from "../utils/mq"


// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   width: 100%;
//   min-height: 100vh;

//   ${Above[1]} {
//     flex-direction: row;
//   }
// `

// const Content = styled.div`
//   height: 100vh;
//   padding: 48px;
//   padding-top: 160px;
//   width: 100%;
//   overflow: scroll;

//   ${Above[1]} {
//     width: 50%;
//   }
// `

// const ImageArea = styled.div`
//   min-height: 100%;
//   height: 100vh;
//   width: 100%;

//   ${Above[1]} {
//     width: 50%;
//   }
// `

// const Image = styled(Img)`
//   width: 100%;
//   height: 100%;
//   `

// const Cocktail = ({ data: { prismicCocktail } }) => {
//   const lang = React.useContext(LocaleContext);
//   const i18n = 'lang.i18n[lang.locale]';

//   const { data } = prismicCocktail;

//   return (
//     <>
//     <p>cocktail</p>
//       {/* <TransitionHelper />
//       <Container id={website.skipNavId}>
//         <Content>
//           <Heading capitalize>{data.name.text}</Heading>
//           <Paragraph lg>— {data.description.text}
//           </Paragraph>
//           <Paragraph inset dangerouslySetInnerHTML={{ __html: data.ingredients.html }} />
//           <Paragraph inset dangerouslySetInnerHTML={{ __html: data.instructions.html }} />
//         </Content>
//         <ImageArea><Image fluid={data.photo.localFile.childImageSharp.fluid} /></ImageArea>
//       </Container> */}
//     </>
//   );
// };

// export default Cocktail;

// Cocktail.propTypes = {
//   data: PropTypes.shape({
//     prismicCocktail: PropTypes.object.isRequired
//   }).isRequired,
//   location: PropTypes.object.isRequired,
//   pageContext: PropTypes.shape({
//     locale: PropTypes.string.isRequired
//   }).isRequired
// };

// // The typenames come from the slice names
// // If this doesn't work for you query for __typename in body {} and GraphiQL will show them to you

// export const pageQuery = graphql`
//   query CocktailItem {
//     prismicCocktail {
//       uid
//       data {
//         name {
//           text
//         }
//         description {
//           text
//         }
//         inspiration
//         ingredients {
//           html
//         }
//         instructions {
//           html
//         }
//         photo {
//           localFile {
//             childImageSharp {
//               fluid(maxWidth: 1200, quality: 90) {
//                 ...GatsbyImageSharpFluid_withWebp
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `;