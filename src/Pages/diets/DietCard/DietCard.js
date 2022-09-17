import React from "react";
import "./DietCard.scss";

const DietCard = ({ title, img, text }) => {
  return (
    <div className="col-12 col-sm-6 col-lg-4 mb-5">
      <article className="text-center diet-post">
        <div className="diet-img">
          <img src={img} alt={title} className="img-fluid" />
        </div>
        <div className="diet-content">
          <h2>{title}</h2>
          <p className="px-5 px-md-3">{text}</p>
        </div>
      </article>
    </div>
  );
};

export default DietCard;
