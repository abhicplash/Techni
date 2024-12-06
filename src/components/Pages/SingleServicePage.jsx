import React from "react";
import Layout from "../Layout/Layout";
import PageTop from "../Layout/PageTop";
import { useParams } from "react-router-dom";

const SingleServicePage = () => {
  const { ServiceName } = useParams();
  return (
    <Layout>
      <PageTop title={ServiceName} />
      <div>SingleServicePage</div>
    </Layout>
  );
};

export default SingleServicePage;
