import React from "react";
import HeaderSection from "./HeaderSection";
import { Slide } from "react-reveal";
import { Zoom } from "react-reveal";
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';


const Contactus = ({ translate,siteLang }) => {
  return (
    <div className="contactus py-5">
      <HeaderSection title={translate("HEADING.CONTACTUS")} />
      <div className="container">
        <div className="row">
          <Slide left>
            <div className="col-md-5">
              <ContactInfo translate={translate} siteLang={siteLang}/>
            </div>
          </Slide>
          <Zoom>
            <div className="col-md-7">
              <div className="contact-form">
                <h4>{translate("HEADING.SENDMESSAGE")}</h4>
                <ContactForm/>
              </div>
            </div>
          </Zoom>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
