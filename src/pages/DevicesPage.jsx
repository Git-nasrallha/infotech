import React,{useContext} from 'react'
import Banner from './../components/Banner';
import devicesBg from '../images/banner/devices.jpg';
import { AppContext } from './../contextApi/ContextApi';
import Devices from './../components/Devices';
import DeviceGallery from './../components/DeviceGallery';

const DevicesPage = ({translate}) => {
    const {devices} = useContext(AppContext);
  return (
    <div className="devices-page mt-5">
        < Banner bg={devicesBg} page={translate("NAVBER.DEVICES")} />
        {/*devices gallery section */}
        <DeviceGallery translate={translate} galleryDevices={devices} />
        {/*devices section */}
        <Devices translate={translate} devices={devices} />
    </div>
  )
}

export default DevicesPage;