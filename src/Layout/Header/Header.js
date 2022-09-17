import React from "react";
import "./Header.scss"
import {Link} from "react-router-dom"
import braisedSteak from "../../Assets/Images/home/braisedSteak.jpg"
import caesarSalad from "../../Assets/Images/home/caesarSalad.jpg"
import blueberryMuffins from "../../Assets/Images/home/blueberryMuffins.jpg"

const Header = () => {
  return (
    <header style={{ maxWidth: "1100px" }} className="container mt-5">
      <div className="container pt-3 pb-4">
        <h1 className="mb-4">
          Featured Recipes<i className="fa-solid fa-utensils"></i>
        </h1>
        {/* featured recipes */}
        <div className="row">
          <div className="latest-post col-6 col-md-4">
            
            <img
              className="img-fluid"
              src={braisedSteak}
              alt="Braised Steak"
            />
            <div className="caption">
              <Link to="recipes/635874"><p className="caption-text">Braised Steak</p></Link>
            </div>
            
          </div>
          <div className="latest-post col-6 col-md-4">
            
            <img
              className="img-fluid"
              src={caesarSalad}
              alt="Simple Caesar Salad"
            />
            <div className="caption">
              <Link to="recipes/660085"><p className="caption-text">Simple Caesar Salad</p></Link>
            </div>
            
          </div>
          <div className="latest-post col-md-4 d-none d-md-block">
            
            <img
              className="img-fluid"
              src={blueberryMuffins}
              alt="Blueberry Muffins"
            />
            <div className="caption">
            <Link to="recipes/648647"><p className="caption-text">Blueberry Muffins</p></Link>
            </div>
            
          </div>
        </div>
        {/* end featured recipes */}
      </div>
      <hr className="mt-4" />
    </header>
  );
};

export default Header;
