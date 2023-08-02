import React from 'react';
import img_404 from '../images/404-landing.jpg';
import styled  from 'styled-components';
import { Link} from 'react-router-dom';


const Notfound = () => {
  return (
    <NotfoundPage>
        <img src={img_404} alt="not found"/>
        <Link className="read-more" to="/"> GO Back </Link>
    </NotfoundPage>
  )
};

export default Notfound;

const NotfoundPage = styled.div `
    margin-top:60px;
    width:100%;
    height:100vh;
    padding:40px 0;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    img{
        display:block;
        width:600px;
        height:300px
    };
`