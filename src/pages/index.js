import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';

// Pages in Gatsby have to be a default export
export default function IndexPage() {
  return (
    <Layout>
      <h1>Hello Frontend Masters</h1>
      <Link to="/about">About</Link>
    </Layout>
  );
}
