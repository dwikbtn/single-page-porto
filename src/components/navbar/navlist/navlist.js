import React from "react";
import style from "./navlist.module.scss";

const navlist = () => {
  return (
    <div className={style.navItem}>
      <ul>
        <li>Home</li>
        <li>Services</li>
        <li>Project</li>
        <li>Client</li>
      </ul>
    </div>
  );
};

export default navlist;
