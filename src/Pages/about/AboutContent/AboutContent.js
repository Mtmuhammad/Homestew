import React from "react";
import "./AboutContent.scss";
import AboutImg from "../AboutImg/AboutImg";
import About1 from "../../../Assets/Images/about/About1.jpg";
import About2 from "../../../Assets/Images/about/About2.jpg";
import About3 from "../../../Assets/Images/about/About3.jpg";
import About4 from "../../../Assets/Images/about/About4.jpg";
import About5 from "../../../Assets/Images/about/About5.jpg";
import About6 from "../../../Assets/Images/about/About6.jpg";
import About7 from "../../../Assets/Images/about/About7.jpg";
import About8 from "../../../Assets/Images/about/About8.jpg";
import About9 from "../../../Assets/Images/about/About9.jpg";
import Culinary from "../../../Assets/Images/about/Culinary.jpg";
import { Link } from "react-router-dom";

const AboutContent = () => {
  return (
    <>
      <div className="col-12 col-lg-6">
        <div className="about-text text-center text-lg-start">
          <h2>What Are We About</h2>
          <p>
            Homestew was created to help users connect through the power and joy
            of food while experiencing the COVID-19 pandemic. We strive to be
            all families' best friends in food and are committed to teaching,
            inspiring, and empowering the every day foodie!
          </p>
          <div className="mt-5 about-btn">
            <Link to="/search">Explore Now</Link>
          </div>
        </div>
      </div>
      <div className="col-12 col-lg-6 mb-5">
        <div className="about-images text-center">
          <div className="row">
            <AboutImg img={About1} />
            <AboutImg img={About2} />
            <AboutImg img={About3} />
            <AboutImg img={About4} />
            <AboutImg img={About5} classes={"d-none d-sm-block"} />
            <AboutImg img={About6} classes={"d-none d-sm-block"} />
            <AboutImg img={About7} classes={"d-none d-sm-block"} />
            <AboutImg img={About8} classes={"d-none d-sm-block"} />
            <AboutImg img={About9} classes={"d-none d-sm-block"} />
          </div>
        </div>
      </div>
      <div
        style={{ marginTop: "8rem", marginBottom: "6rem" }}
        className="d-none d-lg-flex row"
      >
        <div className="d-none d-lg-block col-12 col-lg-6">
          <div className="text-center">
            <img className="img-fluid" src={Culinary} alt="Sushi" />
          </div>
        </div>
        <div className="d-none d-lg-block ps-5 about-list col-12 col-lg-6 text-center text-lg-start">
          <h2>Improve Your Culinary Skills</h2>
          <ul>
            <li>Learn new recipes</li>
            <li>Experiment with foods</li>
            <li>Live a healthier lifestyle</li>
            <li>Understand nutrition facts</li>
            <li>Get cooking tips</li>
            <li>Eat wholesome meals</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default AboutContent;
