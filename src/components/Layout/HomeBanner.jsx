import React from "react";
import "./HomeBanner.css";

const HomeBanner = () => {
  return (
    <div className="HomeBanner-container">
      <div className="bannerWrapper">
        <div className="textwrapper">
          <span className="textmain">Techni Trust</span>
          <div>
            <button class="btn">
              <i class="animation"></i>Explore more<i class="animation"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
