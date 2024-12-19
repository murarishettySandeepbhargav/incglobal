import React from "react";
import "./Connects.css";
import ContactForm from "./ContactForm";

const Connects = () => {
  return (
    <div className="connects-container">
      <div className="connect-title">
        <h1 className="connect">Let’s Get Connected</h1>
      </div>
      <div className="labs-description">
        <p>
          Koncepts Lab operates at the bleeding edge of AI, Data, Customer
          Experience (CX), and Platforms. We help enterprises rethink technology
          transformation, redefine processes, and thereby reimagine business
          models to create new performance frontiers.
        </p>
      </div>
      <div className="locations-and-form">
        <div className="locations">
          <div className="location thrissur">
            <h1>Thrissur</h1>
            <p>
              Koncepts Lab Media & IT Park Pvt. Ltd. 3rd Floor, Indeevaram,
              Infopark Koratty, Thrissur, Kerala 680308
            </p>
            <span>General enquiry:</span>
            <p className="contact-number">+919633116499</p>
          </div>
          <div className="location coimbatore">
            <h1>Coimbatore</h1>
            <p>
              Koncepts Lab Media & IT Park Pvt. Ltd. 523, NSR Rd, Near Pulimaram
              Bus Stop, Nesavaalar Colony, Saibaba Colony, Coimbatore, Tamil Nadu
              641011
            </p>
            <span>General enquiry:</span>
            <p className="contact-number">+919633116499</p>
          </div>
        </div>
        <div className="contact-form-wrapper">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Connects;
