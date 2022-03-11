import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

// Pages in Gatsby have to be a default export
export default function IndexPage() {
  const data = useStaticQuery(graphql`
    query GetSiteTitle {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const meta = data?.site?.siteMetadata ?? {};

  return (
    <>
      <header>
        <Link to="/">{meta.title}</Link>
      </header>
      <main>
        <h1>Hello Frontend Masters</h1>
        <Link to="/about">About</Link>
      </main>
    </>
  );
}
