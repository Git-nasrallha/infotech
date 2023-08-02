import React from "react";
import { MdPlace, MdPhone, MdEmail,MdOutlineWhatsapp,MdPhoneEnabled} from "react-icons/md";

const ContactInfo = ({translate,siteLang}) => {
  return (
    <div className="contact-info">
      <h4>{translate("HEADING.CONTACTINFO")}</h4>
      <ul>
        <li>
          {" "}
          <span>
            <MdPlace />{" "}
          </span>{" "}
          <p>{translate("HEADING.ADDRESS")} </p>{" "}
        </li>
        <li>
          {" "}
          <span>
            <MdEmail />{" "}
          </span>{" "}
          <p>mmostafa201330@gmail.com</p>{" "}
        </li>
        <li>
          {" "}
          <span>
            {siteLang === "en" ? <MdPhone /> : <MdPhoneEnabled />}
          </span>{" "}
          <p>0568100346</p>{" "}
        </li>
        <li>
          {" "}
          <span>
            <MdOutlineWhatsapp />
          </span>{" "}
          <p>0568100346</p>{" "}
        </li>
      </ul>
    </div>
  );
};

export default ContactInfo;
