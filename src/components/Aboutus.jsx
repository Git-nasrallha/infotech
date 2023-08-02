import React from "react";
import { Link } from "react-router-dom";
import { FaYoutube } from "react-icons/fa";
import { Slide } from "react-reveal";
import HeaderSection from "./HeaderSection";
const Aboutus = ({ translate,page }) => {
  return (
    <div className="about mt-3">
      <HeaderSection title={translate("NAVBER.ABOUTUS")} />
      <div className="container">
        <div className="row mt-4">
          <Slide left>
            <div className="col-md-6">
              <div className="about-video">
                <div className="inner-video">
                  <Link
                    target="_blank"
                    to="https://www.youtube.com/watch?v=kXhOJLR4GQg"
                  >
                    {" "}
                    <FaYoutube />{" "}
                  </Link>
                </div>
              </div>
            </div>
          </Slide>
          <Slide right>
            <div className="col-md-6">
              <div className="about-info">
                <h2>
                  {translate("HEADING.WELCOME")}{" "}
                  {translate("HEADING.COMPANYNAME")}{" "}
                </h2>
                <p> {translate("SECTIONINFO.ABOUT1")} </p>
                <p> {translate("SECTIONINFO.ABOUT2")} </p>
                {
                  !page? <Link className="read-more">
                  {" "}
                  {translate("BUTTONS.READMORE")}{" "}
                </Link>:null
                }
              </div>
            </div>
          </Slide>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Aboutus;
