import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Zoom } from 'react-reveal';

const Banner = (props) => {
  const { bg, page } = props;
  const { t } = useTranslation();
  return (
    <BannerItem bg={bg}>
      <div className="container">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/"> {t("NAVBER.HOME")} </Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {page}
            </li>
          </ol>
        </nav>
        <Zoom>
        <h1> {t("HEADING.WELCOME")} {t("HEADING.COMPANYNAME")} </h1>
        </Zoom>
      </div>
    </BannerItem>
  );
};
export default Banner;

const BannerItem = styled.div`
  width: 100%;
  height: 400px;
  background-image:url(${(props) => props.bg});
  background-size:100% 400px;
  color: #fff;
  background-repeat: no-repeat;
  background-position: center;
  position:relative;
  display:flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom:20px;
  &:before{
    content:"";
    display:block;
    width:100%;
    height:100%;
    background-color: #00000091;
    position:absolute;
    z-index:1;
  };
  h1{
    position: absolute;
    left: 30%;
    top: 50%;
    z-index: 3;
    transform: translate(-50%,-50%);
    text-transform: capitalize;
    @media (max-width: 575.98px) { 
      position: absolute;
      left:20%;
      top: 60%;
      transform: translate(0,0);
      font-size: 16px;
      .rtl &{
        right:20%;
        top:63%;
      }
    }
    @media (max-width: 991.98px) { 
     .rtl &{
      left:0;
      right:30%;
     }
    }
  }
  .breadcrumb{
    position: absolute;
    z-index: 2;
    font-size: 15px;
    color:#fff;
    font-weight:bold;
    a{
        color:#fff;
        .rtl &{
            font-size:20px;
        }
    };
    .breadcrumb-item.active{
        color:red;
        .rtl &{
            font-size:20px;
        }
    };
    .breadcrumb-item + .breadcrumb-item::before {
        color: #fff;
        .rtl &{
            float: right;
        padding-left: var(--bs-breadcrumb-item-padding-x);
        color: #fff;
        }
  };

 
`;
