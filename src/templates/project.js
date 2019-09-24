import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";

export default ({ data: { projectsJson: project } }) => {
  console.log("Project data here: ", project);
  return (
    <Layout>
      <h1>Project: {project.name}</h1>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    projectsJson(fields: {slug: {eq: $slug}}) {
      id
      name
    }
  }
`;