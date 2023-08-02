import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaYoutube} from "react-icons/fa";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";


const Slider = ({ slides, siteLang, translate }) => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div className="slider">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        loop={false}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        dir={siteLang==="ar"?"rtl":"ltr"}
        className="mySwiper"
      >
        {slides &&
          slides.map(({ id, image, description, ar_description }) => (
            <SwiperSlide key={id}>
              {" "}
              <img src={image} alt={`slide_${id}`} />{" "}
              <div className="slide-caption">
                <h1>
                  {" "}
                  <span> {translate("HEADING.WELCOME")} </span>{" "}
                  <span> {translate("HEADING.COMPANYNAME")} </span>{" "}
                </h1>
                <p>
                  {" "}
                  {siteLang === "en" ? description : ar_description}{" "}
                </p>
              </div>
            </SwiperSlide>
          ))};
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
      <ul className="info-socialMedia">
        <li>
          <Link to="/">
            {" "}
            <FaFacebook />{" "}
          </Link>
        </li>
        <li>
          <Link to="/">
            {" "}
            <FaTwitter />{" "}
          </Link>
        </li>
        <li>
          <Link target="_blank" to="https://www.youtube.com/@user-il5zo6zq3l">
            {" "}
            <FaYoutube />{" "}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Slider;
