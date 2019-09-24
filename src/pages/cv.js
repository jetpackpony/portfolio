import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

export default () => {
  return (
    <Layout>
      <SEO title="CV" />
      <h1>CV here</h1>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  );
};
