import React from "react";
import "./Subscription.scss";

const Subscription = () => {
  return (
    <div className="subscription my-5 p-5">
      <div className="row">
        <div className="content text-lg-start text-center col-12 col-lg-6">
          <h3>Want to get weekly tips and tricks?</h3>
          <p role="paragraph">Sign up and receive your first email guide!</p>
        </div>
        <div className="sub align-items-center d-block d-lg-flex col-12 text-lg-end text-center col-lg-6">
          <input
            className="mb-4 mb-lg-0"
            type="email"
            name="email"
            placeholder="Your Email"
          />
          <a href="#0">Subscribe</a>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
