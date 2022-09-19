import React from "react";
import { useState } from "react";
import Modal from "../modal/Modal";
import "./style.css";
import addIcon from "../../../assets/plus-icon.svg";

const AddBtn = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Modal visible={visible} setVisible={setVisible} />
      <div
        className="add-btn"
        onClick={() => {
          setVisible(true);
        }}
      >
        <img alt="add" src={addIcon} style={{ width: "50px" }} />
      </div>
    </>
  );
};

export default AddBtn;
