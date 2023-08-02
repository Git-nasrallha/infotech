import React, { useState, useContext } from "react";
import logo from "../images/infologo.png";
import { MdLanguage } from "react-icons/md";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import NavberLinks from "./NavberLinks";
import { AppContext } from "./../contextApi/ContextApi";
import { useTranslation } from 'react-i18next';
import i18n from "i18next";

const Navber = () => {
  const [showLangList, setShowLangList] = useState(false);
  const { toggleSideBar, toggleBar,setSiteLanguage,siteLang } = useContext(AppContext);
  const {t} = useTranslation();
//handle change language
const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    document.documentElement.lang = lang;
    setSiteLanguage(lang);
    document.documentElement.dir = i18n.dir();
    document.body.className = i18n.dir();
    window.location.reload(false);
};

  return (
    <div className="navber-app">
      <div className="container-fluid">
        <div className="nav-content d-flex">
          {/*logo section */}
          <div className="logo">
            <img src={logo} alt="web site log" />
          </div>
          {/*navber links */}
          <div className="d-none d-lg-block d-xl-block">
            <ul className="list-unstyled navber-links d-flex ">
              <NavberLinks/>
            </ul>
          </div>

          {/*language section */}
          <div className="navber-left d-flex justify-content-between">
            <div className="change-lang">
              <span className="current-lang">
                {
                    siteLang === "en" ? t('LANGUAGE.EN')
                    :t('LANGUAGE.AR')
                } 
              </span>
              <span onClick={() => setShowLangList(!showLangList)}>
                {" "}
                <MdLanguage />{" "}
              </span>
              <ul
                className={`language-list list-unstyled ${
                  showLangList ? "show" : null
                }`}
              >
                <li onClick={()=>{handleChangeLanguage('en')}}> {t('LANGUAGE.EN')} </li>
                <li onClick={()=>{handleChangeLanguage('ar')}}> {t('LANGUAGE.AR')} </li>
              </ul>
            </div>
            {/*bars icon  to toggle side bar*/}
            <div className="toggle-side-bar d-lg-none d-xl-none">
              {toggleBar ? (
                <span
                  onClick={() => {
                    toggleSideBar();
                  }}
                >
                  {" "}
                  <FaBars />{" "}
                </span>
              ) : (
                <span
                  onClick={() => {
                    toggleSideBar();
                  }}
                >
                  <AiOutlineClose />{" "}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navber;
