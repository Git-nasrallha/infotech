import React, { useContext } from "react";
import Banner from "./../components/Banner";
import contactBg from "../images/banner/contact.jpg";
import { AppContext } from "./../contextApi/ContextApi";
import Contactus from "./../components/Contactus";

const Contact = ({ translate }) => {
  const { siteLang } = useContext(AppContext);
  return (
    <div className="contact-page mt-5">
      <Banner bg={contactBg} page={translate("NAVBER.CONTACTUS")} />
      {/*contact us section */}
      <Contactus translate={translate} siteLang={siteLang} />
      <div className="col-sm-12">
        <div>
          <iframe
          title="my addrress"
            width="100%"
            height="600"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Eastern%20Province%20-%20Al-Ahsa%20Governorate%20-%20Hofuf%20City%20-%20University%20Street,%20Behind%20The%20Tours%20Market+(protfolio)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <a href="https://www.maps.ie/distance-area-calculator.html">
              area maps
            </a>
          </iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
