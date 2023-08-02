import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import required modules
import { EffectCoverflow, Pagination } from "swiper";

import HeaderSection from './HeaderSection';
const Clients = ({ translate, clients,siteLang }) => {
  return (
    <div className="clients mt-4">
        <HeaderSection 
            title={translate("HEADING.OURCLIENTS")}
            descriprion={translate("SECTIONINFO.CLIENTINFO")}
        />
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 70,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={false}
        dir={siteLang==="ar"?"rtl":"ltr"}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {clients &&
          clients.map((c) => {
            return (
              <SwiperSlide key={c.id}>
                <img src={c.image} alt={`client-${c.id}`} />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
};

export default Clients;
