import React from "react";
import "./FooterBox.scss"

const FooterBox = ({ img }) => {
  return (
    <div className="col-6 col-sm-4 col-md-2">
      <img
        className="img-fluid instagram-post"
        src={img}
        alt="Instagram post"
      />
    </div>
  );
};

export default FooterBox;
