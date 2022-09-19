import React from "react";
import { useContext } from "react";
import { Context } from "../../context/context";
import AddBtn from "./add/AddBtn";
import DeviceItem from "./DeviceItem";
import "./style.css";
import { v4 as uuidv4 } from "uuid";

const Device = () => {
  const { devicesMain, setCheck, check } = useContext(Context);

  const list = () => {
    let arr = [];
    for (let i = 0; i < devicesMain.length; i++) {
      arr[i] = <DeviceItem key={uuidv4()} device={devicesMain[i]} />;
    }
    return arr;
  };

  return (
    <>
      <div className="device-list">
        <div className="container">
          <h1 className="title">Смартфоны</h1>
        </div>

        <div className="container">
          <div className="device-chek">
            {devicesMain.length === 6 ? "" : <AddBtn />}

            <div
              className="check"
              style={{
                color: "#0D5ADC",
                fontSize: "16px",
              }}
            >
              <input
                id="check"
                type={"checkbox"}
                onChange={() => {
                  setCheck(!check);
                }}
              />
              <label from="check">Показать различия</label>
            </div>
          </div>

          <div className="devices-list">{list()}</div>
        </div>
      </div>
    </>
  );
};

export default Device;
