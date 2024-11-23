import React from "react";
import Layout from "../Layout/Layout";
import PageTop from "../Layout/PageTop";
import AboutInro from "../Layout/AboutInro";

const About = () => {
  return (
    <Layout>
      <PageTop title={"About us"} />
      <AboutInro />
    </Layout>
  );
};

export default About;
