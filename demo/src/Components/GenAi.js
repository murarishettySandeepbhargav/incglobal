import React from "react";
import "./GenAi.css"
const GenAi = () => {
  return (
    <div>
      <div
        class="accordion"
        id="accordionExample"
        
      >
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSeven"
              aria-expanded="true"
              aria-controls="collapseSeven"
            >
              GenAi
            </button>
          </h2>
          <div
            id="collapseSeven"
            class="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              Koncepts Lab leverages cutting-edge Generative AI (GenAI)
              technologies like Natural Language Processing (NLP) and computer
              vision to create innovative solutions. We deal with industry-wide
              that can help you automate content creation, personalize customer
              experiences, and develop intelligent applications that address
              your specific global market needs.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseEight"
              aria-expanded="false"
              aria-controls="collapsEight"
            >
              machine Learning
            </button>
          </h2>
          <div
            id="collapseEight"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              Koncepts Lab empowers your business with custom Machine Learning
              (ML) solutions. We extract valuable insights from your data to
              optimize operations, predict customer behavior, and make
              data-driven decisions that fuel global growth. Our team of ML
              engineers can build intelligent systems that adapt to your
              evolving needs in any market.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseNine"
              aria-expanded="false"
              aria-controls="collapseNine"
            >
              Data Analylist
            </button>
          </h2>
          <div
            id="collapseNine"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              Data fuels ambitious and smart organizations. Koncepts Lab helps
              you unlock the hidden potential of your data. We offer a
              comprehensive suite of data analytics services, from data
              collection and cleaning to visualization and reporting. We empower
              you to gain a deep understanding of your global customer base,
              identify trends, and make informed decisions that drive success
              across international markets.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenAi;
