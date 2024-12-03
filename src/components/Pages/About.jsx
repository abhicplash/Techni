import React from "react";
import Layout from "../Layout/Layout";
import PageTop from "../Layout/PageTop";
import AboutInro from "../Layout/AboutInro";
import AboutOurValues from "../Layout/AboutOurValues";
import AboutGoals from "../Layout/AboutGoals";

const About = () => {
  return (
    <Layout>
      <PageTop title={"About us"} />
      <AboutInro />
      <AboutOurValues />
      <AboutGoals/>
    </Layout>
  );
};

export default About;
