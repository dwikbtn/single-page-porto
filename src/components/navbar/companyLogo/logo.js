import React from "react";
import style from "./logo.module.scss";

const logo = () => {
  return (
    <div className={style.brandIcon}>
      <h1>
        Rando<span>Co.</span>
      </h1>
    </div>
  );
};

export default logo;
