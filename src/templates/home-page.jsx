import * as React from "react";
import { Link, graphql } from "gatsby";

import { withPrismicPreview } from "gatsby-plugin-prismic-previews";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Bio from "../components/bio";

const HomePageTemplate = ({ data, location }) => {
  const {
    title,
    description,
    user_image: userImage,
  } = data?.prismicHomePage?.data || {};

  const blogList = data?.allPrismicPost?.nodes || [];

  return (
    <Layout location={location} title={title.text}>
      <Bio image={userImage} description={description.richText} />
      <ol style={{ listStyle: `none` }}>
        {blogList.map((post) => {
          const title = post.data.title.text;

          return (
            <li key={post.uid}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2>
                    <Link to={post.url} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h2>
                  <small>{post.data.post_date}</small>
                  <p>{post.data.excerpt}</p>
                </header>
              </article>
            </li>
          );
        })}
      </ol>
    </Layout>
  );
};

export const Head = ({ data }) => {
  const { title, description } = data?.prismicHomePage?.data || {};
  return <Seo title={title.text} description={description.text} />;
};

export const homePageQuery = graphql`
query AboutQuery($locale: String!) {
  about: prismicAbout(lang: { eq: $locale }) {
    data {
      content {
        html
        text
      }
      highlight {
        text
      }
      images {
        image {
          localFile {
              childImageSharp {
                fluid(maxWidth: 1200, quality: 90) {
                  ...GatsbyImageSharpFluid_noBase64

                }
              }
          }
          
        }
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
`

export default withPrismicPreview(HomePageTemplate);
