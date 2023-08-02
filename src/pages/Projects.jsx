import React,{useContext} from 'react'
import Banner from './../components/Banner';
import projectBg from '../images/banner/projects.jpeg';
import { AppContext } from './../contextApi/ContextApi';
import HeaderSection from './../components/HeaderSection';
import styled  from 'styled-components';

const Projects = ({translate}) => {
    const {projects , siteLang} = useContext(AppContext);
  return (
    <div className="projects-page mt-5">
        < Banner bg={projectBg} page={translate("NAVBER.PROJECTS")} />
        <div className="container">
            <HeaderSection
                title={translate("NAVBER.PROJECTS")}
                descriprion={translate("SECTIONINFO.PROJECTSINFO")}
            />
            <div className="row">
                {
                    projects&&projects.map((p)=>{
                        return <div key={p.id} className="col-md-6 col-lg-3 mx-auto">
                        <ProjectItem>
                            <img src={p.image} alt={`project-${p.id}`}/>
                            <h5> {siteLang==="en"? p.title : p.ar_title } </h5>
                        </ProjectItem>
                    </div>
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Projects;

const ProjectItem = styled.div `
    width:100%;
    margin-bottom:40px;
    text-transform:capitalize;
    text-align:center;
    padding:10px;
    background-color:#eaf9fb;
    border-radius:10px 0;
    img{
        width:100px;
        height:100px;
    };
    h5{
        margin-top:20px;
        color:#ce4132;
    }
`