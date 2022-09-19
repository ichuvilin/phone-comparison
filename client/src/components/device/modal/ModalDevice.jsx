import React from "react";
import { useContext } from "react";
import icon from "../../../assets/switch.svg";
import { Context } from "../../../context/context";

import cl from "./style.module.css";

const ModalDevice = ({ device, idx }) => {
  const { devicesMain, setDevicesMain, devices, setCustomAlert } =
    useContext(Context);

  let addDevice = () => {
    let check = false;
    if (devicesMain.length !== 0) {
      for (let i = 0; i < devicesMain.length; i++) {
        if (devicesMain[i].id === devices[idx - 1].id) check = true;
      }
    }

    if (check) {
      setCustomAlert(true);
      setTimeout(() => {
        setCustomAlert(false);
      }, 3000);
    } else {
      setDevicesMain([...devicesMain, devices[idx - 1]]);
    }
  };

  return (
    <div
      className={cl.phoneBox}
      onClick={() => {
        addDevice();
      }}
    >
      <img src={icon} alt="switch" />
      <img
        src={"http://localhost:5000/" + device.img}
        alt="phone"
        style={{ height: "50px" }}
      />

      <div className="phoneName">
        {device.producer} {device.name}
      </div>
    </div>
  );
};

export default ModalDevice;
