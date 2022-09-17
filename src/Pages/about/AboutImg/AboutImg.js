import React from "react";
import "./AboutImg.scss";

const AboutImg = ({ img, classes }) => {
  return (
    <div className={`col-6 col-sm-4 ${classes || ""}`}>
      <img
        className="mb-4 about-img img-fluid"
        src={img}
        alt="About"
      />
    </div>
  );
};

export default AboutImg;
