import React from "react";
import { Slide } from "react-reveal";

const HeaderSection = ({ title, descriprion }) => {
  return (
    <div className="header">
      <Slide top>
        <div className={`section-header ${descriprion?'mb-0':''}`}>
          <h2> {title} </h2>
        </div>
      </Slide>
      {descriprion ? (
        <Slide right>
          <div className="descriprion-header col-lg-6 col-sm-12 mx-auto">
            <p className="text-center"> {descriprion} </p>
          </div>
        </Slide>
      ) : null}
    </div>
  );
};

export default HeaderSection;
