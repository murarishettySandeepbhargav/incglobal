import React from "react";
import "./OurProcess.css";
const OurProcess = () => {
  return (
    <div>
      <h1 className="Our">OurProcess</h1>
      <div className="Process">
        <div className="Process1">
          <h4>01</h4>
          <h4>Discovery And Consultation</h4>
          <p>
            Koncepts Lab engage deeply with clients to understand their specific
            needs and objectives, ensuring a clear vision from the outset.
          </p>
        </div>
        <div className="Process1">
          <h4>02</h4>
          <h4>Planning and Proposal</h4>
          <p>
            We craft a detailed project plan and proposal, outlining the scope,
            timeline, and budget for client approval.
          </p>
        </div>{" "}
        <div className="Process1">
          <h4>03</h4>
          <h4>Design and Development</h4>
          <p>
            We design and develop tailored solutions, aligning with the client's
            goals and technical requirements
          </p>
        </div>
        <div className="Process1">
          <h4>04</h4>
          <h4>Testing and Quality Assurance</h4>
          <p>
            We rigorously test all aspects of the solution, ensuring it meets
            our high standards for performance, security, and reliability.
          </p>
        </div>
        <div className="Process1">
          <h4>05</h4>
          <h4>Deployment and Support</h4>
          <p>
            Finally, we deploy the solution and provide ongoing support to
            ensure seamless operation and continuous improvement.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurProcess;
