import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./../pages/Home";
import About from './../pages/About';
import Services from './../pages/Services';
import { useTranslation } from 'react-i18next';
import Contact from './../pages/Contact';
import DevicesPage from './../pages/DevicesPage';
import Projects from './../pages/Projects';
import Notfound from './../pages/Notfound';

const AppRouter = () => {
  const {t} = useTranslation();
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Home  translate={t}/>} />
        <Route path="/about" exact element={<About translate={t} />} />
        <Route path="/services" exact element={<Services translate={t} />} />
        <Route path="/contact" exact element={<Contact translate={t} />} />
        <Route path="/devices" exact element={<DevicesPage translate={t} />} />
        <Route path="/projects" exact element={<Projects translate={t} />} />
        <Route path="/*" exact element={<Notfound />} />
      </Routes>
    </>
  );
};

export default AppRouter;
