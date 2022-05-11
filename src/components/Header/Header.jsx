import React from "react";
import style from "./header.module.css";

export default function Header() {
  return (
    <header className={style.header}>
      <div className={style.header__block}>
        <div className={style.header__logo}>
          <a href="#">House Stuff</a>
        </div>

        <ul className={style.header__menu}>
          <li>
            <a href="#">Главная</a>
          </li>
          <li>
            <a href="#">Каталог</a>
          </li>
          <li>
            <a href="#">О нас</a>
          </li>
          <li>
            <a href="#">Контакты</a>
          </li>
        </ul>
      </div>
    </header>
  );
}
