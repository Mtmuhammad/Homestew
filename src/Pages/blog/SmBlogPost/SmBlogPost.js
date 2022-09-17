import React from "react";
import "./SmBlogPost.scss";

const SmBlogPost = ({ img, title, category }) => {
  return (
    <div className="text-center mb-5 sm-blog-post col-12 col-md-6 col-lg-4">
      <img className="img-fluid" src={img} alt={title} />
      <div className="sm-blog-text text-light">
        <p role="paragraph" className="my-4">
          {category}
        </p>
        <h4>{title}</h4>
        <a href="#0">Read More</a>
      </div>
    </div>
  );
};

export default SmBlogPost;
