import React from "react";
import ContactForm from "./ContactForm/ContactForm";

const Contact = () => {
  return (
    <div
      className="contact container"
      style={{
        maxWidth: "1100px",
        padding: "7rem 0",
        backgroundColor: "rgba(97,97,97, 0.03)",
      }}
    >
      <ContactForm />
    </div>
  );
};

export default Contact;
