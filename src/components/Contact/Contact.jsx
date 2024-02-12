import React from "react";
import { Element } from "react-scroll";
import "./contact.scss";
import backgroundContact from "../../assets/images/background.jpg";


function Contact() {
  const email = "guillaume.bezie@yahoo.com";
  const phoneNumber = "06 66 82 63 16";

  return (
    <Element name="Contact" className="contact-info" style={{ backgroundImage: `url(${backgroundContact})` }}>
      <div>
      <p>
        <i className="fas fa-phone"></i> {phoneNumber}
      </p>
      <p>
        <i className="fas fa-envelope"></i>
        <a href={`mailto:${email}`} title="Envoyer un email">
          {email}
        </a>
      </p>
    </div>
    </Element>
  );
}

export default Contact;
