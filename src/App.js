import { useEffect} from "react";
import "./style/main.scss";
import Navber from "./components/Navber";
import SideBar from "./components/SideBar";
import i18n from "i18next";
import AppRouter from "./router/AppRouter";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import {useLocation} from 'react-router-dom';

function App() {
  const location = useLocation();
  console.log(location)
  useEffect(() => {
    document.documentElement.dir = i18n.dir();
    document.body.className = i18n.dir();
  });
  const routerPath =[
    '/','/about','/contact','/services','/projects',
    '/devices'
  ]
  return (
      <div className="App">
        <>
          <AppRouter />
          {
            routerPath.includes(location.pathname) ? 
            <>
            <Navber />
            <SideBar />
            <Footer />
            <ScrollToTop />
            </>
            :null
           
          }
          
        </>
      </div>
   
  );
}

export default App;
