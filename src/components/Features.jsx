import React from "react";
import {Zoom } from "react-reveal";
import HeaderSection from "./HeaderSection";

const Features = ({ translate, features, siteLang }) => {
  return (
    <div className="features">
      <HeaderSection
        title={translate("HEADING.FEATURES")}
        descriprion={translate("SECTIONINFO.FEATUREHEADER")}
      />
      <div className="container">
        <Zoom>
          <div className="row">
            {features &&
              features.map((f) => {
                return (
                  <div key={f.id} className="col-md-6 col-lg-4 mx-auto">
                    <div className="feature-item d-flex mb-5">
                      <div className="feature-image">
                        <img src={f.image} alt={`feature-${f.id}`} />
                      </div>
                      <div className="feature-body">
                        <h6> {siteLang === "en" ? f.title : f.ar_title} </h6>
                        <p>
                          {" "}
                          {siteLang === "en"
                            ? f.description
                            : f.ar_description}{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </Zoom>
        <hr />
      </div>
    </div>
  );
};

export default Features;
