import React from "react";
import "./BlogPost.scss";

const BlogPost = ({title, author, img, comments, likes, date}) => {
  return (
    
    <div className="col-12 col-md-6 col-lg-4">
      <div className="blog-post">
        <div className="blog-post-thumb">
          <img
            className="img-fluid"
            src={img}
            alt={title}
          />
        </div>

        <div className="mt-4">
          <div className="justify-content-between align-items-center d-flex">
            <div className="d-flex">
              <div className="blog-post-author">
                <a href="#0">By {author}</a>
              </div>

              <div className="blog-post-date">
                <a href="#0">{date}</a>
              </div>
            </div>

            <div className="d-flex">
              <div className="blog-post-fav">
                <a href="#0">
                  <i className="fa fa-heart-o" aria-hidden="true"></i> {likes}
                </a>
              </div>

              <div className="blog-post-comments">
                <a href="#0">
                  <i className="fa fa-comment-o" aria-hidden="true"></i> {comments}
                </a>
              </div>

              <div className="blog-post-share">
                <a href="#0">
                  <i className="fa fa-share-alt" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
          <a className="blog-post-headline" href="#0">
            <h4 >
              {title}
            </h4>
          </a>
        </div>
      </div>
    </div>
    
  );
};

export default BlogPost;
