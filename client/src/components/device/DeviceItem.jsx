import React from "react";
import { useContext } from "react";
import closeIcon from "../../assets/falseIcon.svg";
import { Context } from "../../context/context";

const DeviceItem = ({ device }) => {
  const { devicesMain, setDevicesMain } = useContext(Context);
  return (
    <>
      <div className="Name">
        <img src={process.env.REACT_APP_API_URL + device.img} alt="phone" />
        <img
          style={{ marginBottom: "30px" }}
          src={closeIcon}
          alt="close"
          onClick={() => {
            setDevicesMain(devicesMain.filter((i) => i.id !== device.id));
          }}
        />
        <div>
          {device.producer} {device.name}
        </div>
      </div>
    </>
  );
};

export default DeviceItem;
