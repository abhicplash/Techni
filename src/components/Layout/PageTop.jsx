import React from "react";
import "./PageTop.css";

const PageTop = ({title}) => {
  return (
    <div className="PageTop-container">
      <h1>{title}</h1>
    </div>
  );
};

export default PageTop;
