const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, actions: { createNodeField }   }) => {
  if (node.internal.type === "ProjectsJson") {
    const slug = createFilePath({ node, getNode, basePath: `pages` });
    createNodeField({
      node,
      name: `slug`,
      value: `/projects${slug}`,
    });
  }
};

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const result = await graphql(`
    query {
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
  `);
  result.data.allProjectsJson.edges.forEach(({ node: p}) => {
    createPage({
      path: p.fields.slug,
      component: path.resolve(`./src/templates/project.js`),
      context: {
        slug: p.fields.slug,
      }
    });
  });
};