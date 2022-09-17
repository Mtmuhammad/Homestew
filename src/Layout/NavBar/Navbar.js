import React from "react";
import TopBar from "../TopBar/TopBar";
import "./Navbar.scss";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const handleCollapse = () => {
    let nav = document.querySelector("#navbarCollapse");
    let btn = document.querySelector(".navbar-toggler");
    nav.classList.remove("show");
    btn.classList.add("collapsed");
    btn.ariaExpanded = "false";
  };
  let activeClassName = "active nav-link";
  let inactiveClassName = "nav-link";
  return (
    <nav>
      <TopBar />
      {/* Navbar Main Logo */}
      <div className="d-flex justify-content-center">
        <div className="mt-3 mb-1">
          <a href="/">
            <img
              className="d-none d-lg-block logo"
              src="./homestewLogo.svg"
              alt="Homestew Logo"
            />
          </a>
        </div>
      </div>
      {/* end Navbar Main Logo */}

      {/* navbar */}
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          {/* navbar alt logo */}
          <a className="navbar-brand" href="/">
            <img
              className="d-lg-none logo-alt"
              src="/Homestew-alt-logo.svg"
              alt="Homestew Alt logo"
            />
          </a>
          {/* end navbar alt logo */}

          {/* navbar toggler */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* end navbar toggler */}

          {/* nav links */}
          <div
            className="justify-content-center collapse navbar-collapse"
            id="navbarCollapse"
          >
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                end
                  reloadDocument
                  onClick={handleCollapse}
                  to="/"
                  className={({ isActive }) =>
                    isActive ? activeClassName : inactiveClassName
                  }
                >
                  HOME
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  onClick={handleCollapse}
                  to="about"
                  className={({ isActive }) =>
                    isActive ? activeClassName : inactiveClassName
                  }
                >
                  ABOUT
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  onClick={handleCollapse}
                  to="search"
                  className={({ isActive }) =>
                    isActive ? activeClassName : inactiveClassName
                  }
                >
                  RECIPES
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  onClick={handleCollapse}
                  to="diets"
                  className={({ isActive }) =>
                    isActive ? activeClassName : inactiveClassName
                  }
                >
                  DIETS
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  onClick={handleCollapse}
                  to="blog"
                  className={({ isActive }) =>
                    isActive ? activeClassName : inactiveClassName
                  }
                >
                  BLOG
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  onClick={handleCollapse}
                  to="contact"
                  className={({ isActive }) =>
                    isActive ? activeClassName : inactiveClassName
                  }
                >
                  CONTACT
                </NavLink>
              </li>
            </ul>
          </div>
          {/* end nav links */}
        </div>
      </nav>
      {/* end navbar */}
      <hr />
    </nav>
  );
};

export default Navbar;
