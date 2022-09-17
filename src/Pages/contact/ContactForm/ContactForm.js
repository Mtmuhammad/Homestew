import React from "react";
import "./ContactForm.scss";
import contact from "../../../Assets/Images/home/Contact.jpg";

const ContactForm = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-12">
          <div className="wrapper">
            <div className="row no-gutters">
              <div className="col-lg-6">
                <div className="contact-wrap w-100 p-md-5 p-4">
                  <h3 className="mb-3">Contact Us</h3>
                  <p className="mb-4">
                    We're open for any suggestion or just to have a chat
                  </p>
                  <div className="row mb-4">
                    <div className="col-md-4">
                      <div className="w-100 d-flex align-items-start">
                        <div className="text">
                          <p>
                            <span>Address:</span> 198 West 21th Street, Suite
                            721 New York NY 10016
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="w-100 d-flex align-items-start">
                        <div className="text">
                          <p>
                            <span>Email:</span>{" "}
                            <a href="mailto:info@yoursite.com">
                              info@homestew.com
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="w-100 d-flex align-items-start">
                        <div className="text">
                          <p>
                            <span>Phone:</span>{" "}
                            <a href="tel://1234567920">(646)123-7654</a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <form
                    method="POST"
                    id="contactForm"
                    name="contactForm"
                    className="contactForm"
                  >
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            name="name"
                            id="name"
                            placeholder="Name"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control"
                            name="email"
                            id="email"
                            placeholder="Email"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            name="subject"
                            id="subject"
                            placeholder="Subject"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <textarea
                            name="message"
                            className="form-control mb-5 mt-2"
                            id="message"
                            cols="30"
                            rows="4"
                            placeholder="Create a message here"
                            style={{ height: "100px" }}
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group text-center text-lg-start">
                          <a href="#0">Send Message</a>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-6 d-none d-lg-flex align-items-stretch">
                <div
                  className="info-wrap w-100 p-5 img"
                  style={{
                    background: `url(${contact})`,
                    backgroundSize: "cover",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
