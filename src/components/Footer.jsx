import React from "react";
import { useTranslation } from "react-i18next";
import ContactInfo from "./ContactInfo";
import { useContext } from "react";
import { AppContext } from "./../contextApi/ContextApi";
import NavberLinks from './NavberLinks';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaYoutube} from "react-icons/fa";

const Footer = () => {
  const { t } = useTranslation();
  const { siteLang } = useContext(AppContext);
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="footer-col">
              <ContactInfo translate={t} siteLang={siteLang} />
            </div>
          </div>
          <div className="col-md-3">
            <div className="footer-col footer-links">
              <h4> {t('HEADING.LINKS')} </h4>
              <NavberLinks/>
            </div>
          </div>
          <div className="col-md-3">
            <div className="footer-col footer-social">
              <h4> {t('HEADING.SOCIALMEDIA')} </h4>
              <ul>
                <li> <Link to="/"> <FaFacebook/> <span> {t('HEADING.FACEBOOK')} </span> </Link> </li>
                <li> <Link to="/"> <FaTwitter/> <span> {t('HEADING.TWITTER')} </span> </Link> </li>
                <li> <Link to="/"> <FaYoutube/> <span> {t('HEADING.YOUTUBE')} </span> </Link> </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <p className="all-right text-center">
        {" "}
        {t("HEADING.COMPANYNAME")} <span>{t("SECTIONINFO.FOOTERINFO")}</span>{" "}
      </p>
    </div>
  );
};

export default Footer;
