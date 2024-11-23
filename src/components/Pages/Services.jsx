import React from "react";
import Layout from "../Layout/Layout";
import PageTop from "../Layout/PageTop";
import "./Services.css";
import ServiceCard from "../Layout/ServiceCard";
import { servicesList } from "../../utils/serviceList";

const Services = () => {
  return (
    <Layout>
      <PageTop title={"Services"} />
      <div className="serviceswrapper">
        <span className="subhead">our services</span>
        <span className="mainhead">what we offer</span>
        <span className="desc">
          Discover a wide range of services designed to meet your needs
        </span>
      </div>
      <div className="serviceLists">
        {servicesList.map((list, index) => (
          <ServiceCard
            key={index}
            serviceName={list.ServiceName}
            image={list.Image}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Services;
