import React from "react";
import { Link } from "react-router-dom";
import { Slide } from "react-reveal";
import HeaderSection from "./HeaderSection";

const Service = ({ translate, services, page }) => {
  return (
    <div className="service">
      <HeaderSection title={translate("HEADING.OURSERVICES")} />
      <div className="container">
        <Slide bottom>
          <div className="row">
            {services &&
              services.map((serv) => {
                return (
                  <div key={serv.id} className="col-md-4">
                    <div className="item-service">
                      <span> {serv.icon} </span>
                      <h6> {serv.service} </h6>
                    </div>
                  </div>
                );
              })}
            {!page ? (
              <Link className="read-more" to="/services">
                {" "}
                {translate("BUTTONS.READMORE")}{" "}
              </Link>
            ) : null}
          </div>
        </Slide>
        <hr />
      </div>
    </div>
  );
};

export default Service;
