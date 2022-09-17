import "./TopBar.scss";
import React from "react"
import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <>
      <div className="topbar">
        <div className="container d-flex justify-content-between">
          {/* social icons */}
          <div style={{ marginLeft: "15px" }} className="socials">
            <a data-testid="social-icon" href="#0">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a data-testid="social-icon" href="#0">
              <i className="fa-solid fa-rss"></i>
            </a>
            <a data-testid="social-icon" href="#0">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a data-testid="social-icon" href="#0">
              <i className="fa-brands fa-pinterest"></i>
            </a>
            <a data-testid="social-icon" href="#0">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a data-testid="social-icon" href="#0">
              <i className="fa-brands fa-youtube"></i>
            </a>
          </div>
          {/* end social icons */}

          {/* user icons */}
          <div className="socials">
            <Link data-testid="user-icon" to="search">
              <i className="fa-solid fa-magnifying-glass"></i>
            </Link>
          </div>
          {/* end user icons */}
        </div>
      </div>
    </>
  );
};

export default TopBar;
