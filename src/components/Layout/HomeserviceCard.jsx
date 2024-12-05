import React from "react";
import "./HomeserviceCard.css";

const HomeserviceCard = ({ ServiceName, image, desc }) => {
  return (
    <div className="HomeserviceCard-container">
      <img src={image} alt="serviceimage" className="servicecardImg" />
      <div className="ServiceCardInfowrapper">
        <span className="serviceCardName">{ServiceName}</span>
        <span className="serviceCardPara">{desc}</span>
        {/* <Link className="linktoservice" to={"/"}>
          Explore More
        </Link> */}
      </div>
    </div>
  );
};

export default HomeserviceCard;
