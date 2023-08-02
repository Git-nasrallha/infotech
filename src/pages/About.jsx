import React,{useContext} from 'react'
import Aboutus from './../components/Aboutus';
import Banner from './../components/Banner';
import aboutbg from '../images/banner/about.jpg';
import Team from './../components/Team';
import { AppContext } from './../contextApi/ContextApi';

const About = ({translate}) => {
    const {siteLang,team} = useContext(AppContext);
  return (
    <div className="about-page">
        < Banner bg={aboutbg} page={translate("NAVBER.ABOUTUS")} />
        {/*about section */}
         <Aboutus page translate={translate}/> 
         {/*team section */}
         <Team team={team} siteLang={siteLang} translate={translate}/>
    </div>
  )
}

export default About;