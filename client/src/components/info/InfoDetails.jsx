import React from "react";
import trueIcon from "../../assets/trueIcon.svg";
import falseIcon from "../../assets/falseIcon.svg";

export const InfoDetails = () => {
  return <div>InfoDetails</div>;
};

export const InfoProducer = ({ devicesInfo, color }) => {
  return (
    <div className="devices-list" style={{ backgroundColor: color }}>
      {devicesInfo.producer}
    </div>
  );
};

export const InfoYear = ({ devicesInfo, color }) => {
  return (
    <div className="devices-list" style={{ backgroundColor: color }}>
      {devicesInfo.releaseYear}
    </div>
  );
};
export const InfoInch = ({ devicesInfo, color }) => {
  return (
    <div className="devices-list" style={{ backgroundColor: color }}>
      {devicesInfo.inch}
    </div>
  );
};

export const InfoCountry = ({ devicesInfo, color }) => {
  return (
    <div className="devices-list" style={{ backgroundColor: color }}>
      {devicesInfo.country}
    </div>
  );
};

export const InfoRam = ({ devicesInfo, color }) => {
  return (
    <div className="devices-list" style={{ backgroundColor: color }}>
      {devicesInfo.ram}
    </div>
  );
};

export const InfoSrr = ({ devicesInfo, color }) => {
  return (
    <div className="devices-list" style={{ backgroundColor: color }}>
      {devicesInfo.srr}
    </div>
  );
};

export const InfoNfc = ({ devicesInfo, color }) => {
  return (
    <div className="devices-list" style={{ backgroundColor: color }}>
      {devicesInfo.nfc ? (
        <img alt="support" src={trueIcon} />
      ) : (
        <img alt="none-support" src={falseIcon} />
      )}
    </div>
  );
};

export const InfoESim = ({ devicesInfo, color }) => {
  return (
    <div className="devices-list" style={{ backgroundColor: color }}>
      {devicesInfo.esim ? (
        <img alt="support" src={trueIcon} />
      ) : (
        <img alt="none-support" src={falseIcon} />
      )}
    </div>
  );
};

export const InfoSWC = ({ devicesInfo, color }) => {
  return (
    <div className="devices-list" style={{ backgroundColor: color }}>
      {devicesInfo.swc ? (
        <img alt="support" src={trueIcon} />
      ) : (
        <img alt="none-support" src={falseIcon} />
      )}
    </div>
  );
};

export const InfoPrice = ({ devicesInfo, color }) => {
  return (
    <div className="devices-list" style={{ backgroundColor: color }}>
      {devicesInfo.price}
    </div>
  );
};

export default InfoDetails;
