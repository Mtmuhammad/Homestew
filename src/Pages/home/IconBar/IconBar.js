import React from "react";
import "./IconBar.scss";
import { Link } from "react-router-dom";

const SubscribeBar = () => {
  return (
    <div className="icon-bar">
      <div className="container" style={{ maxWidth: "1100px" }}>
        <div className="row">
          <h3 className="tertiary text-center">Explore Recipes:</h3>
          <div className="col-6 col-lg-3">
            <div data-testid="icon-container" className="icon text-center">
              <Link to="recipes/type/bread">
                <i data-testid="icon" className="fa-solid fa-bread-slice"></i>
                <p>Bread Recipes</p>
              </Link>
            </div>
          </div>
          <div className="col-6 col-lg-3">
            <div data-testid="icon-container" className="icon text-center">
              <Link to="recipes/type/main course">
                <i
                  data-testid="icon"
                  className="fa-solid fa-drumstick-bite"
                ></i>
                <p>Main Course</p>
              </Link>
            </div>
          </div>
          <div className="col-6 col-lg-3">
            <div data-testid="icon-container" className="icon text-center">
              <Link to="recipes/type/side dish">
                <i data-testid="icon" className="fa-solid fa-bowl-food"></i>
                <p>Side Dishes</p>
              </Link>
            </div>
          </div>
          <div className="col-6 col-lg-3">
            <div data-testid="icon-container" className="icon text-center">
              <Link to="recipes/type/dessert">
                <i data-testid="icon" className="fa-solid fa-cookie"></i>
                <p>Desserts</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscribeBar;
