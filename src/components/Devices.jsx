import React, { useState, useEffect } from "react";
import { Fade } from "react-reveal";
import HeaderSection from './HeaderSection';

const Devices = ({ devices, translate }) => {
  const [filterDevices, setFilterDevices] = useState([]);
  const [category, setCategory] = useState("all");

  //handel useEffect
  useEffect(() => {
    setFilterDevices(devices);
  }, [devices]);
  //fiter device
  const filterDevice = (category) => {
    if (category === "all") {
      setFilterDevices(devices);
      setCategory("all");
    } else {
      const filterDevicesx =
        devices &&
        devices.filter((item) => {
          return item.category === category;
        });
      setFilterDevices(filterDevicesx);
      setCategory(category);
    }
  };
  return (
    <div className="devices mt-5">
      <div className="container">
        <HeaderSection title={translate("HEADING.DEVICES")} />
        <ul className="header-tap">
          <li
            className={category === "all" ? "active" : null}
            onClick={() => {
              filterDevice("all");
            }}
          >
            {translate("BUTTONS.ALL")}
          </li>
          <li
            className={category === "pc" ? "active" : null}
            onClick={() => {
              filterDevice("pc");
            }}
          >
            {translate("BUTTONS.PC")}
          </li>
          <li
            className={category === "printer" ? "active" : null}
            onClick={() => {
              filterDevice("printer");
            }}
          >
            {translate("BUTTONS.PRINTER")}
          </li>
          <li
            className={category === "labtop" ? "active" : null}
            onClick={() => {
              filterDevice("labtop");
            }}
          >
            {translate("BUTTONS.LABTOP")}
          </li>
        </ul>
        <div className="row">
          {filterDevices &&
            filterDevices.map((dev) => {
              return (
                <Fade key={dev.id}>
                  <div key={dev.id} className="col-md-3">
                    <div className="device-item">
                      <img src={dev.image} alt={`device-${dev.id}`} />
                    </div>
                  </div>
                </Fade>
              );
            })}
        </div>
      
      </div>
    </div>
  );
};

export default Devices;
