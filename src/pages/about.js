import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

export default function AboutPage() {
  return (
    <Layout
      title="About This Site"
      description="More information about this site"
    >
      <h1>About this site</h1>
      <Link to="/">Home</Link>
    </Layout>
  );
}
