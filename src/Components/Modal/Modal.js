import React from "react";
import style from "./Modal.module.css";

const Modal = ({ project, setShowModal }) => {
  return (
    <div className={style.overlay}>
      <div className={style.content}>
        <h3>{project.name}</h3>
        <button className="btn" onClick={() => setShowModal(false)}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
