import React from "react";
import AboutContent from "./AboutContent/AboutContent";
import Testimonials from "./Testimonials/Testimonials";


const About = () => {
  return (
    <div style={{ maxWidth: "1100px" }} className="container about">
      <div className="container">
        <div className="row">
          <AboutContent />
          <Testimonials/>
        </div>
      </div>
    </div>
  );
};

export default About;
