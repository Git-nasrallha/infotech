import React from 'react'
import Slider from './../components/Slider';
import { useContext } from 'react';
import { AppContext } from './../contextApi/ContextApi';
import Aboutus from './../components/Aboutus';
import Service from './../components/Service';
import Features from './../components/Features';
import Team from './../components/Team';
import DeviceGallery from './../components/DeviceGallery';
// import Devices from './../components/Devices';
import Clients from './../components/Clients';
import Contactus from './../components/Contactus';

const Home = ({translate}) => {
  const {slides,siteLang,services,features,team,devices,clients} = useContext(AppContext);
  return (
    <div className="home-page">
        {/*slider section*/}
        <Slider slides={slides} siteLang={siteLang} translate={translate}/>
        {/*about us section */}
        <Aboutus translate={translate} siteLang={siteLang} />
        {/*service section */}
        <Service services ={services} translate={translate} />
        {/*features section */}
        <Features features={features} siteLang={siteLang} translate={translate} />
        {/*devices section */}
        <DeviceGallery translate={translate} galleryDevices={devices} />
        {/* <Devices translate={t} devices={devices}/> */}
        {/*clients section */}
        <Clients translate={translate} clients={clients} siteLang={siteLang} />
         {/*team section */}
         <Team team={team} siteLang={siteLang} translate={translate}/>
         {/*contact us section */}
         <Contactus translate={translate} siteLang={siteLang} />
    </div>
  )
}

export default Home
