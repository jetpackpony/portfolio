import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ data: { allProjectsJson: { edges: projects }}}) => {
  console.log("Projects: ", projects);
  return (
    <Layout>
      <SEO title="Portfolio Page" />
      <h1>Portfolio Here</h1>
      <ul>
        {
          projects.map(({ node: p }) => (
            <li key={p.id}>
              <Link to={p.fields.slug}>
                {p.name}
              </Link>
            </li>
          ))
        }
      </ul>
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
          fields {
            slug
          }
        }
      }
    }
  }
`;