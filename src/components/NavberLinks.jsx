import React from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';
const NavberLinks = ({toggleSideBar,isClose}) => {
  const { t } = useTranslation();

  const links = [
    { to: "/", label: t("NAVBER.HOME") },
    { to: "/about", label: t("NAVBER.ABOUTUS") },
    { to: "/services", label: t("NAVBER.SERVICES") },
    { to: "/devices", label: t("NAVBER.DEVICES") },
    { to: "/projects", label: t("NAVBER.PROJECTS") },
    { to: "/contact", label: t("NAVBER.CONTACTUS") },
  ];
  return (
    <>
      {links &&
        links.map((link, index) => {
          return (
            <li key={index}>
              <NavLink to={link.to} 
                onClick={()=>{
                  if(isClose){
                    toggleSideBar()
                  }
                }}
               >
              {link.label}</NavLink>
            </li>
          );
        })}
    </>
  );
};

export default NavberLinks;
