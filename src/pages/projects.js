import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ data }) => {
  console.log("Data here", data);
  return (
    <Layout>
      <SEO title="Projects Page" />
      <h1>Projects Here</h1>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  );
};

export const query = graphql`
  {
    allProjectsJson {
      edges {
        node {
          id
          name
        }
      }
    }
  }
`;