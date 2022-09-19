import React, { useState } from "react";
import { useContext } from "react";
import { FixedSizeList as List } from "react-window";
import { Context } from "../../../context/context";
import ModalDevice from "./ModalDevice";
import CustomAlert from "../../customAlert/CustomAlert";

import cl from "./style.module.css";

const Modal = ({ visible, setVisible }) => {
  const { devices, customAlert } = useContext(Context);

  const [value, setValuet] = useState("");

  const rootClasses = [cl.modal];
  if (visible) {
    rootClasses.push(cl.active);
  }

  const filteredDevices = devices.filter((device) => {
    return (device.producer + " " + device.name)
      .toLowerCase()
      .includes(value.toLowerCase());
  });

  let list = () => {
    let j = [];
    for (let i = 0; i < filteredDevices.length; i++) {
      j[i] = (
        <ModalDevice
          key={filteredDevices[i].id}
          device={filteredDevices[i]}
          idx={filteredDevices[i].id}
        />
      );
    }
    return j;
  };

  const Example = () => (
    <List
      height={450}
      itemCount={devices.length / 4}
      itemSize={devices.length}
      width={320}
    >
      {list}
    </List>
  );

  return (
    <div
      className={rootClasses.join(" ")}
      onClick={() => {
        setVisible(false);
      }}
    >
      <div className={cl.modelContent} onClick={(e) => e.stopPropagation()}>
        {customAlert ? (
          <CustomAlert />
        ) : (
          <input
            type="text"
            className={cl.modalInput}
            placeholder="Поиск"
            onChange={(e) => setValuet(e.target.value)}
          />
        )}

        {Example()}
      </div>
    </div>
  );
};

export default Modal;
