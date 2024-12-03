import React from "react";
import Layout from "../Layout/Layout";
import HomeBanner from "../Layout/HomeBanner";
import HomeContact from "../Layout/HomeContact";

const Home = () => {
  return (
    <Layout>
      <HomeBanner />
      <HomeContact/>
    </Layout>
  );
};

export default Home;
