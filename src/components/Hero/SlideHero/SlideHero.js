import React from "react";
import style from "./SlideHero.module.scss";
export default function SlideHero() {
  return (
    <div className={style.bgSlide}>
      <div className={style.heroText}>
        <h1>The Best Company</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam
          magni blanditiis
        </p>
      </div>
    </div>
  );
}
