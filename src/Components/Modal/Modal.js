import React from "react";
import style from "./Modal.module.css";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";

const Modal = ({ project, setShowModal }) => {
  return (
    <div className={style.overlay}>
      <div className={style.modal}>
        <div className={style.modalheader}>
          <h3>{project.name}</h3>
          <button
            onClick={() => setShowModal(false)}
            className={style.closeBtn}
          >
            <AiOutlineClose size={"1.5rem"} />
          </button>
        </div>
        <div className={style.modalContent}>
          <div className={style.modalImages}>
            <img src={project.img[0]} alt="" />
            <img src={project.img[1]} alt="" />
          </div>
          <div className={style.modalText}>
            {project.details.map((d) => (
              <p>{d}</p>
            ))}
            {project.githubUrl.map((git) => (
              <a
                key={git}
                href={git}
                className="btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineGithub size={"1rem"} />
                <span>View Code</span>
              </a>
            ))}
          </div>
        </div>
        <a
          href={project.appUrl}
          target="_blank"
          rel="noreferrer"
          className="btn blockbtn2"
        >
          Launch App
        </a>
      </div>
    </div>
  );
};

export default Modal;
