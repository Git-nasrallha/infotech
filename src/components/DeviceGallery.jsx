import React, { useState } from "react";
import Fancybox from "./Fancybox";
import HeaderSection from "./HeaderSection";

const DeviceGallery = ({ translate, galleryDevices }) => {
  const [gallaryCount, setGallaryCount] = useState(6);
  const gallaries = galleryDevices.slice(0, gallaryCount);
  const showMoreGallary = () => {
    setGallaryCount((prev) => prev + 3);
  };
  return (
    <div className="gallery-devices mt-4">
      <HeaderSection title={translate("HEADING.DEVICES")} />
      <Fancybox options={{ infinite: false }}>
        <div className="container">
          <div className="row">
            {gallaries &&
              gallaries.map((g) => {
                return (
                  <div key={g.id} className="col-md-6 col-lg-4">
                    <div className="gallary-img">
                      <img
                        src={g.image}
                        data-fancybox="gallery"
                        data-src={g.image}
                        className="img-fluid"
                        alt={`gallary-${g.id}`}
                      />
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </Fancybox>
      {gallaryCount < galleryDevices.length ? (
        <button className="read-more" onClick={showMoreGallary}>
          {" "}
          {translate("BUTTONS.SHOWMORE")}{" "}
        </button>
      ) : null}
      <div className="container">
        <hr />
      </div>
    </div>
  );
};

export default DeviceGallery;
