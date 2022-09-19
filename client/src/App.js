import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import Device from "./components/device/Device";
import Info from "./components/info/Info";
import NavBar from "./components/nav/NavBar";
import { Context } from "./context/context";
import { fetchDevices } from "./http/deviceAPI";

const App = observer(() => {
  const [devices, setDevices] = useState([]);
  const [devicesMain, setDevicesMain] = useState([]);

  const [check, setCheck] = useState(false);

  const [customAlert, setCustomAlert] = useState(false);

  useEffect(() => {
    fetchDevices().then((data) => setDevices(data));
  }, []);

  return (
    <Context.Provider
      value={{
        devicesMain,
        devices,
        setDevicesMain,
        check,
        setCheck,
        customAlert,
        setCustomAlert,
      }}
    >
      <NavBar />
      <Device />
      {devicesMain.length === 0 ? (
        <div className="container">
          <p>Выберите нужный телефон</p>
        </div>
      ) : (
        <Info />
      )}
    </Context.Provider>
  );
});

export default App;
