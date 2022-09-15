import React, { useState } from "react";

export default function About() {
  return (
    <div className="container">
      <h2>About Us</h2>
      <div className="accordion" id="accordionPanelsStayOpenExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseOne"
            >
              About
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="panelsStayOpen-headingOne"
          >
            <div className="accordion-body">
              <strong>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Maiores nam quam sapiente odio ab optio voluptatem saepe eos
                ducimus sed odit explicabo deleniti, mollitia nostrum quidem id,
                velit eaque recusandae.
              </strong>{" "}
              <code></code>,
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseTwo"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseTwo"
            >
              Accordion Item #2
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingTwo"
          >
            <div className="accordion-body">
              <strong>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Deserunt, eaque minus reprehenderit ut, excepturi dolores
                numquam nemo tempora ducimus qui laboriosam at fugiat, ipsam
                quis nam vitae necessitatibus. Animi, debitis!
              </strong>
              <code></code>,
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseThree"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseThree"
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingThree"
          >
            <div className="accordion-body">
              <strong>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                unde enim rem! Facere, iusto. Aliquid odio minima qui ipsa
                incidunt facere, accusantium, eveniet, voluptas fuga sint
                tempora adipisci hic officia!
              </strong>
              <code></code>,
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
