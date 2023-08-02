import React from "react";
import {Zoom } from "react-reveal";
import HeaderSection from "./HeaderSection";

const Team = ({ translate, team, siteLang }) => {
  return (
    <div className="team">
      <HeaderSection
        title={translate("HEADING.OURTEAM")}
        descriprion={translate("SECTIONINFO.TEAMINFO")}
      />
      <div className="container">
        <div className="row">
          {team &&
            team.map((t) => {
              return (
                <Zoom key={t.id}>
                  <div key={t.id} className="col-md-4">
                    <div className="card">
                      <div className="team-item">
                        <img
                          src={t.image}
                          className="card-img-top"
                          alt={`team-${t.id}`}
                        />
                        <div className="card-body">
                          <h5 className="card-title">
                            {" "}
                            {siteLang === "en" ? t.name : t.ar_name}{" "}
                          </h5>
                          <p className="card-text">
                            {siteLang === "en" ? t.job : t.ar_job}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Zoom>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Team;
