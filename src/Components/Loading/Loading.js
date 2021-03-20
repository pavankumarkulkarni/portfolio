import React from "react";
import style from "./Loading.module.css";

const Loading = () => {
  return (
    <>
      <div className={style.header}>
        <p>L</p>
        <p>o</p>
        <p>a</p>
        <p>d</p>
        <p>i</p>
        <p>n</p>
        <p>g</p>
        <p>.</p>
        <p>.</p>
        <p>.</p>
      </div>
      <div className={style.circle}>
        <div className={style.square}></div>
      </div>
    </>
  );
};

export default Loading;
