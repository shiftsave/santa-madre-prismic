const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // Define a template for blog post
  const homePage = path.resolve(`./src/templates/home-page.jsx`);
  const blogPost = path.resolve(`./src/templates/blog-post.jsx`);

}