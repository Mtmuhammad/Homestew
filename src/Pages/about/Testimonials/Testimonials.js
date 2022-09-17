import React from "react";
import "./Testimonials.scss";

const Testimonials = () => {
  return (
    <>
      <hr />
      <div className="testimonials">
        <div className="row d-flex justify-content-center">
          <div className="col-md-10 col-xl-8 text-center">
            <h3 className="mb-4">Testimonials</h3>
            <p className="mb-5 pb-2 mb-md-5 pb-md-0">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
              error amet numquam iure provident voluptate esse quasi, veritatis
              totam voluptas nostrum quisquam eum porro a pariatur veniam.
            </p>
          </div>
        </div>

        <div
          style={{ marginTop: "3rem", marginBottom: "15rem" }}
          className="row text-center"
        >
          <div className="col-md-4 mt-5 mb-5 mb-md-0">
            <div className="d-flex justify-content-center mb-4">
              <img
                src="https://randomuser.me/api/portraits/men/80.jpg"
                className="rounded-circle shadow-1-strong"
                alt="Tim Perry"
              />
            </div>
            <h5 className="mb-3">Tim Perry</h5>
            <h6 className="mb-3">Web Developer</h6>
            <p className="px-xl-3">
              <i className="fas fa-quote-left pe-2"></i>Lorem ipsum dolor sit
              amet, consectetur adipisicing elit. Quod eos id officiis hic
              tenetur quae quaerat ad velit ab hic tenetur.
            </p>
            <ul className="list-unstyled d-flex justify-content-center mb-0">
              <li>
                <i className="fas fa-star fa-lg text-warning"></i>
              </li>
              <li>
                <i className="fas fa-star fa-lg text-warning"></i>
              </li>
              <li>
                <i className="fas fa-star fa-lg text-warning"></i>
              </li>
              <li>
                <i className="fas fa-star fa-lg text-warning"></i>
              </li>
              <li>
                <i className="fas fa-star-half-alt fa-lg text-warning"></i>
              </li>
            </ul>
          </div>
          <div className="col-md-4 mb-5 mb-md-0">
            <div className="d-flex mt-5 justify-content-center mb-4">
              <img
                src="https://randomuser.me/api/portraits/women/75.jpg"
                className="rounded-circle shadow-1-strong"
                alt="Letitia Powell"
              />
            </div>
            <h5 className="mb-3">Letitia Powell</h5>
            <h6 className="mb-3">Graphic Designer</h6>
            <p className="px-xl-3">
              <i className="fas fa-quote-left pe-2"></i>Ut enim ad minima
              veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid commodi.
            </p>
            <ul className="list-unstyled d-flex justify-content-center mb-0">
              <li>
                <i className="fas fa-star fa-lg text-warning"></i>
              </li>
              <li>
                <i className="fas fa-star fa-lg text-warning"></i>
              </li>
              <li>
                <i className="fas fa-star fa-lg text-warning"></i>
              </li>
              <li>
                <i className="fas fa-star fa-lg text-warning"></i>
              </li>
              <li>
                <i className="fas fa-star fa-lg text-warning"></i>
              </li>
            </ul>
          </div>
          <div className="col-md-4 mb-0">
            <div className="d-flex mt-5 justify-content-center mb-4">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
                className="rounded-circle shadow-1-strong"
                alt="John Smith"
              />
            </div>
            <h5 className="mb-3">John Smith</h5>
            <h6 className="mb-3">Marketing Specialist</h6>
            <p className="px-xl-3">
              <i className="fas fa-quote-left pe-2"></i>At vero eos et accusamus
              et iusto odio dignissimos ducimus qui blanditiis praesentium
              voluptatum deleniti atque corrupti.
            </p>
            <ul className="list-unstyled d-flex justify-content-center mb-0">
              <li>
                <i className="fas fa-star fa-lg text-warning"></i>
              </li>
              <li>
                <i className="fas fa-star fa-lg text-warning"></i>
              </li>
              <li>
                <i className="fas fa-star fa-lg text-warning"></i>
              </li>
              <li>
                <i className="fas fa-star fa-lg text-warning"></i>
              </li>
              <li>
                <i className="far fa-star fa-lg text-warning"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
