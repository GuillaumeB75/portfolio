import React from "react";
import { Element } from "react-scroll";
import "./contact.scss";
import phoneImage from "../../assets/images/portable.jpeg";
import emailImage from "../../assets/images/email.png";
import backgroundContact from "../../assets/images/background.jpg";


function Contact() {
  const email = "guillaume.bezie@yahoo.com";
  const phoneNumber = "06 66 82 63 16";

  return (
    <Element name="Contact" className="contact-info" style={{ backgroundImage: `url(${backgroundContact})` }}>
      <div className="contact-item">
        <img src={phoneImage} alt="Téléphone" className="contact-icon" />
        {phoneNumber}
      </div>
      <div className="contact-item">
        <img src={emailImage} alt="Email" className="contact-icon" />
        <a href={`mailto:${email}`} title="Envoyer un email">
          {email}
        </a>
      </div>
    </Element>
  );
}

export default Contact;
