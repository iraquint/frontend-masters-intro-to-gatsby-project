import * as React from 'react';
import { Link, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';

/*
Page query
- injected into the component as data at build time

This is an example for the sake of example, you'd want to use
useStaticQuery here

However, page queries have access to the page context
*/

export const query = graphql`
  query CocktailQuery {
    file(name: { eq: "cocktail" }) {
      childImageSharp {
        gatsbyImageData(placeholder: DOMINANT_COLOR)
      }
    }
  }
`;

export default function AboutPage({ data }) {
  return (
    <Layout
      title="About This Site"
      description="More information about this site"
    >
      <GatsbyImage
        image={getImage(data.file)}
        alt="a cocktail set inside an elaborate floral arrangement with dry ice mist curling around it"
      />
      <h1>About this site</h1>
      <Link to="/">Home</Link>
    </Layout>
  );
}
