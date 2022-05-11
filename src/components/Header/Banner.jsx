import React from "react";
import style from "./header.module.css";

export default function Banner() {
  return (
    <div className={style.header__banner}>
      <h1>Лучшие товары для вашего дома</h1>
      <p>По низким ценам</p>
    </div>
  );
}
