/* eslint-disable no-labels */
import React from "react";
import { useContext } from "react";
import { Context } from "../../context/context";
import {
  InfoProducer,
  InfoYear,
  InfoInch,
  InfoCountry,
  InfoRam,
  InfoSrr,
  InfoNfc,
  InfoESim,
  InfoSWC,
  InfoPrice,
} from "./InfoDetails";
import "./style.css";

const Info = () => {
  const { devicesMain, check } = useContext(Context);

  const producer = (device) => {
    const arr = [];
    let color = "";
    met: if (check) {
      for (let i = 0; i < devicesMain.length; i++) {
        for (let j = 1; j < devicesMain.length; j++) {
          if (device[i].producer !== device[j].producer) color = "#FFE9A0";
          break met;
        }
      }
    }
    for (let i = 0; i < devicesMain.length; i++) {
      arr[i] = <InfoProducer key={i} devicesInfo={device[i]} color={color} />;
    }
    return arr;
  };

  const releaseYear = (device) => {
    const arr = [];
    let color = "";
    met: if (check) {
      for (let i = 0; i < devicesMain.length; i++) {
        for (let j = 1; j < devicesMain.length; j++) {
          if (device[i].releaseYear !== device[j].releaseYear)
            color = "#FFE9A0";
          break met;
        }
      }
    }
    for (let i = 0; i < devicesMain.length; i++) {
      arr[i] = <InfoYear key={i} devicesInfo={device[i]} color={color} />;
    }
    return arr;
  };

  const inch = (device) => {
    const arr = [];
    let color = "";
    met: if (check) {
      for (let i = 0; i < devicesMain.length; i++) {
        for (let j = 1; j < devicesMain.length; j++) {
          if (device[i].inch !== device[j].inch) color = "#FFE9A0";
          break met;
        }
      }
    }
    for (let i = 0; i < devicesMain.length; i++) {
      arr[i] = <InfoInch key={i} devicesInfo={device[i]} color={color} />;
    }
    return arr;
  };

  const country = (device) => {
    const arr = [];
    let color = "";
    met: if (check) {
      for (let i = 0; i < devicesMain.length; i++) {
        for (let j = 1; j < devicesMain.length; j++) {
          if (device[i].country !== device[j].country) color = "#FFE9A0";
          break met;
        }
      }
    }
    for (let i = 0; i < devicesMain.length; i++) {
      arr[i] = <InfoCountry key={i} devicesInfo={device[i]} color={color} />;
    }
    return arr;
  };

  const ram = (device) => {
    const arr = [];
    let color = "";
    met: if (check) {
      for (let i = 0; i < devicesMain.length; i++) {
        for (let j = 1; j < devicesMain.length; j++) {
          if (device[i].ram !== device[j].ram) {
            color = "#FFE9A0";
          }
          break met;
        }
      }
    }
    for (let i = 0; i < devicesMain.length; i++) {
      arr[i] = <InfoRam key={i} devicesInfo={device[i]} color={color} />;
    }
    return arr;
  };

  const srr = (device) => {
    const arr = [];
    let color = "";
    met: if (check) {
      for (let i = 0; i < devicesMain.length; i++) {
        for (let j = 1; j < devicesMain.length; j++) {
          if (device[i].srr !== device[j].srr) color = "#FFE9A0";
          break met;
        }
      }
    }
    for (let i = 0; i < devicesMain.length; i++) {
      arr[i] = <InfoSrr key={i} devicesInfo={device[i]} color={color} />;
    }
    return arr;
  };

  const nfc = (device) => {
    const arr = [];
    let color = "";
    met: if (check) {
      for (let i = 0; i < devicesMain.length; i++) {
        for (let j = 1; j < devicesMain.length; j++) {
          if (device[i].nfc !== device[j].nfc) color = "#FFE9A0";
          break met;
        }
      }
    }
    for (let i = 0; i < devicesMain.length; i++) {
      arr[i] = <InfoNfc key={i} devicesInfo={device[i]} color={color} />;
    }
    return arr;
  };

  const esim = (device) => {
    const arr = [];
    let color = "";
    met: if (check) {
      for (let i = 0; i < devicesMain.length; i++) {
        for (let j = 1; j < devicesMain.length; j++) {
          if (device[i].esim !== device[j].esim) color = "#FFE9A0";
          break met;
        }
      }
    }
    for (let i = 0; i < devicesMain.length; i++) {
      arr[i] = <InfoESim key={i} devicesInfo={device[i]} color={color} />;
    }
    return arr;
  };

  const swc = (device) => {
    const arr = [];
    let color = "";
    met: if (check) {
      for (let i = 0; i < devicesMain.length; i++) {
        for (let j = 1; j < devicesMain.length; j++) {
          if (device[i].swc !== device[j].swc) color = "#FFE9A0";
          break met;
        }
      }
    }
    for (let i = 0; i < devicesMain.length; i++) {
      arr[i] = <InfoSWC key={i} devicesInfo={device[i]} color={color} />;
    }
    return arr;
  };

  const price = (device) => {
    const arr = [];
    let color = "";
    met: if (check) {
      for (let i = 0; i < devicesMain.length; i++) {
        for (let j = 1; j < devicesMain.length; j++) {
          if (device[i].price !== device[j].price) color = "#FFE9A0";
          break met;
        }
      }
    }
    for (let i = 0; i < devicesMain.length; i++) {
      arr[i] = <InfoPrice key={i} devicesInfo={device[i]} color={color} />;
    }
    return arr;
  };

  return (
    <div className="info">
      <div className="container" style={{ borderTop: "1px solid #CDCFD2" }}>
        <div className="table_title">
          <p>Производитель</p>
        </div>

        <div className="info-list">{producer(devicesMain)}</div>
      </div>

      <div className="container" style={{ borderTop: "1px solid #CDCFD2" }}>
        <div className="table_title">
          <p>Год релиза</p>
        </div>

        <div className="info-list">{releaseYear(devicesMain)}</div>
      </div>

      <div className="container" style={{ borderTop: "1px solid #CDCFD2" }}>
        <div className="table_title">
          <p>Диагональ экрана (дюйм)</p>
        </div>

        <div className="info-list">{inch(devicesMain)}</div>
      </div>

      <div className="container" style={{ borderTop: "1px solid #CDCFD2" }}>
        <div>
          <p className="table_title">Страна-производитель</p>
        </div>

        <div className="info-list">{country(devicesMain)}</div>
      </div>

      <div className="container" style={{ borderTop: "1px solid #CDCFD2" }}>
        <div>
          <p className="table_title">Объем памяти</p>
        </div>

        <div className="info-list">{ram(devicesMain)}</div>
      </div>

      <div className="container" style={{ borderTop: "1px solid #CDCFD2" }}>
        <div className="table_title">
          <p>Частота обновления экрана</p>
        </div>

        <div className="info-list">{srr(devicesMain)}</div>
      </div>

      <div className="container" style={{ borderTop: "1px solid #CDCFD2" }}>
        <div>
          <p className="table_title">NFC</p>
        </div>

        <div className="info-list">{nfc(devicesMain)}</div>
      </div>

      <div className="container" style={{ borderTop: "1px solid #CDCFD2" }}>
        <div className="table_title">
          <p>Поддержка eSIM</p>
        </div>

        <div className="info-list">{esim(devicesMain)}</div>
      </div>

      <div className="container" style={{ borderTop: "1px solid #CDCFD2" }}>
        <div className="table_title">
          <p>Поддержка беспроводной зарядки</p>
        </div>

        <div className="info-list">{swc(devicesMain)}</div>
      </div>

      <div
        className="container"
        style={{
          borderTop: "1px solid #CDCFD2",
          borderBottom: "1px solid #CDCFD2",
        }}
      >
        <div className="table_title">
          <p>Стоимость</p>
        </div>

        <div className="info-list">{price(devicesMain)}</div>
      </div>
    </div>
  );
};

export default Info;
