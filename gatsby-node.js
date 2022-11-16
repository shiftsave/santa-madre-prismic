const path = require(`path`);
const _ = require("lodash");
const {  wrapper } = require("./src/utils/gatsby-node-helpers");


exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // const cocktailTemplate = path.resolve("./src/templates/cocktail.js");
  const productTemplate = path.resolve("./src/templates/product.js");

  const result = await wrapper(
    graphql(`
      {
        cocktails: allPrismicCocktail {
          edges {
            node {
              id
              uid
              lang
            }
          }
        }
        products: allPrismicProducts {
          edges {
            node {
              id
              uid
              lang
            }
          }
        }
        categories: allPrismicCategory {
          edges {
            node {
              lang
              data {
                name
              }
            }
          }
        }
      }
    `)
  );

  // const cocktailsList = result.data.cocktails.edges;
  const productsList = result.data.products.edges;

  productsList.forEach(p => {
    const product = p.node.uid;
    const productPath = `/destilados/${_.kebabCase(product)}`;

    createPage({
      path:productPath,
      component: productTemplate,
      context: {
        // Pass the unique ID (uid) through context so the template can filter by it
        uid: p.node.uid,
      }
    });
  });

  // cocktailsList.forEach(p => {
  //   const cocktail = p.node.uid;
  //   const cocktailPath = `/cocktails/${_.kebabCase(cocktail)}`;

  //   createPage({
  //     path:cocktailPath,
  //     component: cocktailTemplate,
  //     context: {
  //       // Pass the unique ID (uid) through context so the template can filter by it
  //       uid: p.node.uid,
  //     }
  //   });
  // });

};
