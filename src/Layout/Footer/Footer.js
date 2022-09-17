import React from "react";
import "./Footer.scss";
import FooterBox from "../FooterBox/FooterBox";
import Instagram1 from "../../Assets/Images/instagram/Instagram1.jpg"
import Instagram2 from "../../Assets/Images/instagram/Instagram2.jpg"
import Instagram3 from "../../Assets/Images/instagram/Instagram3.jpg"
import Instagram4 from "../../Assets/Images/instagram/Instagram4.jpg"
import Instagram5 from "../../Assets/Images/instagram/Instagram5.jpg"
import Instagram6 from "../../Assets/Images/instagram/Instagram6.jpg"
import avatar from "../../Assets/Images/instagram/avatar.jpg"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container-fluid">
        <div className="footer-instagram">
          <div className="footer-instagram-avatar">
            <div className="footer-instagram-avatar-pic">
              <img
                src={avatar}
                alt="Instagram Avatar"
              />
            </div>
            <div className="footer-instagram-avatar-text">
              <h5>@homestew</h5>
              <span>22,5k followers</span>
            </div>
          </div>
          <div className="row">
            <FooterBox img={Instagram1} />
            <FooterBox img={Instagram2} />
            <FooterBox img={Instagram3} />
            <FooterBox img={Instagram4} />
            <FooterBox img={Instagram5} />
            <FooterBox img={Instagram6} />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="footer-text">
              <div className="footer-logo">
                <a href="/">
                  <img
                    className="img-fluid mb-4"
                    src="./Homestew-alt-logo.svg"
                    alt="Footer alt logo"
                  />
                </a>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus vel facilisis.
              </p>
              <div className="footer-social mb-5">
                <a href="#0">
                  <i data-testid="footer-icon" className="fa fa-facebook"></i>
                </a>
                <a href="#0">
                  <i data-testid="footer-icon" className="fa fa-twitter"></i>
                </a>
                <a href="#0">
                  <i data-testid="footer-icon" className="fa fa-instagram"></i>
                </a>
                <a href="#0">
                  <i data-testid="footer-icon" className="fa fa-youtube-play"
                  ></i>
                </a>
                <a href="#0">
                  <i data-testid="footer-icon" className="fa fa-envelope-o"></i>
                </a>
              </div>
              <div className="footer-copyright">
                <p className="mb-0">Copyright © 2022 All rights reserved</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
