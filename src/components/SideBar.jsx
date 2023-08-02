import React,{useContext} from "react";
import NavberLinks from './NavberLinks';
import { AppContext } from './../contextApi/ContextApi';

const SideBar = () => {
    const {toggleBar,toggleSideBar} = useContext(AppContext);
  return (
    <div className={`sidebar d-lg-none d-xl-none ${toggleBar?null : "show"}`}>
      <ul className="list-unstyled navber-links d-flex ">
        <NavberLinks toggleSideBar={toggleSideBar} isClose/>
      </ul>
    </div>
  );
};

export default SideBar;
