import React from "react";
import "./Accordation.css";
const Accordation = () => {
  return (
    <div>
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Application modernization
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              Legacy applications can hinder your agility. Koncepts Lab
              modernizes your applications to leverage the latest technologies,
              improve performance, and ensure scalability for future growth. We
              offer a range of solutions, from modernization roadmaps to
              cloud-native development, to keep your applications competitive in
              the global marketplace.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Devops And Agile
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              Legacy applications can hinder your agility. Koncepts Lab
              modernizes your applications to leverage the latest technologies,
              improve performance, and ensure scalability for future growth. We
              offer a range of solutions, from modernization roadmaps to
              cloud-native development, to keep your applications competitive in
              the global marketplace.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              CyderSecurity
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              Legacy applications can hinder your agility. Koncepts Lab
              modernizes your applications to leverage the latest technologies,
              improve performance, and ensure scalability for future growth. We
              offer a range of solutions, from modernization roadmaps to
              cloud-native development, to keep your applications competitive in
              the global marketplace.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="true"
              aria-controls="collapseFour"
            >
              Api & MicroServices
            </button>
          </h2>
          <div
            id="collapseFour"
            class="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              Legacy applications can hinder your agility. Koncepts Lab
              modernizes your applications to leverage the latest technologies,
              improve performance, and ensure scalability for future growth. We
              offer a range of solutions, from modernization roadmaps to
              cloud-native development, to keep your applications competitive in
              the global marketplace.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFive"
              aria-expanded="false"
              aria-controls="collapseFive"
            >
              Products and Platforms
            </button>
          </h2>
          <div
            id="collapseFive"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              Legacy applications can hinder your agility. Koncepts Lab
              modernizes your applications to leverage the latest technologies,
              improve performance, and ensure scalability for future growth. We
              offer a range of solutions, from modernization roadmaps to
              cloud-native development, to keep your applications competitive in
              the global marketplace.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSix"
              aria-expanded="false"
              aria-controls="collapseSix"
            >
              Staff Augementation
            </button>
          </h2>
          <div
            id="collapseSix"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              Legacy applications can hinder your agility. Koncepts Lab
              modernizes your applications to leverage the latest technologies,
              improve performance, and ensure scalability for future growth. We
              offer a range of solutions, from modernization roadmaps to
              cloud-native development, to keep your applications competitive in
              the global marketplace.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordation;
