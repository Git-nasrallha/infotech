import React, { useState,createContext,useEffect } from 'react';
import axios from 'axios';
import {AiOutlineLaptop,AiOutlinePrinter,AiOutlineCoffee,
    AiOutlineShoppingCart} from 'react-icons/ai'
import {CgWebsite} from 'react-icons/cg';
import {FaMobileAlt} from "react-icons/fa";
import { useTranslation } from 'react-i18next';

export const AppContext = createContext();

export  const ThemeProvider = (props)=> {
    const {t} = useTranslation();
    const [state,setState] = useState({
       toggleBar:true,
       siteLang:localStorage.getItem('i18nextLng') ?localStorage.getItem('i18nextLng'):"en",
       slides:[],
       services:[
        {
            id:1,
            "service":t('SECTIONINFO.SERVICE1'),
            "icon":<AiOutlineLaptop/>
        },
        {
            id:2,
            "service":t('SECTIONINFO.SERVICE2'),
            "icon":<AiOutlinePrinter/>
        },
        {
            id:3,
            "service":t('SECTIONINFO.SERVICE3'),
            "icon":<AiOutlineShoppingCart/>
        },
        {
            id:4,
            "service":t('SECTIONINFO.SERVICE4'),
            "icon":<AiOutlineCoffee/>
        },
        {
            id:5,
            "service":t('SECTIONINFO.SERVICE5'),
            "icon":<CgWebsite/>
        },
        {
            id:6,
            "service":t('SECTIONINFO.SERVICE6'),
            "icon":<FaMobileAlt/>
        }
       ],
       features:[],
       team:[],
       devices:[],
       clients:[],
       projects:[]
    });
    //fetch data
    useEffect(()=>{
        axios.get('/data/data.json').then(res=>{
            setState(prev=>({
                ...prev,
                slides:res.data.slides,
                features:res.data.features,
                team:res.data.team,
                devices:res.data.devices,
                clients:res.data.clients,
                projects:res.data.projects
            }))
        }).catch(err=>{
            console.log(err)
        })
    },[])
    // toggle sidebar
    const toggleSideBar = ()=>{
        setState(prev=>({
            ...prev,toggleBar : !state.toggleBar
        }))
    };
    //change site language
    const setSiteLanguage = (language)=>{
        setState(prev=>({
            ...prev,siteLang : language
        }))
    }
    
    return (
        <AppContext.Provider value={
            {
                ...state,
                toggleSideBar:toggleSideBar,
                setSiteLanguage:setSiteLanguage
            }
        }>
            {props.children}
        </AppContext.Provider>
    )
    
}
