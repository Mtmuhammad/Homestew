import React from "react";
import "./SmallPost.scss";
import { Link } from "react-router-dom";

const SmallPost = ({ id, title, img }) => {
  return (
    <div className="col-6 col-lg-3 mb-5">
      <Link to={`/recipes/${id}`}>
        <article className="text-center small-post">
          <div className="small-post-img">
            <img
              src={img || "./No-image.svg"}
              alt={title}
              className="img-fluid"
            />
          </div>
          <div className="small-post-content mt-4">
            <h4 className="quaternary">{title}</h4>
          </div>
        </article>
      </Link>
    </div>
  );
};

export default SmallPost;
