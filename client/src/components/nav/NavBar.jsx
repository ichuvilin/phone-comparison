import React from "react";
import "./navbar.css";
import login from "../../assets/Vector.svg";

const NavBar = () => {
  return (
    <div className="nav">
      <div className="container">
        <div className="left">
          <p>Каталог</p>
        </div>
        <div className="right">
          <p style={{textTransform: "uppercase"}} >сравнение</p>
          <p
            style={{
              alignItems: "center",
              display: "flex",
              justifyContent: "space-between",
              width: "120px",
            }}
          >
            Личный кабинет
            <img src={login} alt="login" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
