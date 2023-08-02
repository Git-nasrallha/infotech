import React,{useContext} from 'react'
import Banner from './../components/Banner';
import servicesBg from '../images/banner/services.jpg';
import { AppContext } from './../contextApi/ContextApi';
import Service from './../components/Service';
import Features from './../components/Features';

const About = ({translate}) => {
    const {siteLang,services,features} = useContext(AppContext);
  return (
    <div className="services-page mt-5">
        < Banner bg={servicesBg} page={translate("NAVBER.SERVICES")} />
        <Service page services ={services} translate={translate} />
        {/*features section */}
        <Features features={features} siteLang={siteLang} translate={translate} />
    </div>
  )
}

export default About;