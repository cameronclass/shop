import React, { useState } from "react";
import style from "./header.module.css";
import { FaShoppingCart } from "react-icons/fa";

export default function Header() {
  let [cartOpen, setCartOpen] = useState(false);

  return (
    <header className={style.header}>
      <div className={style.header__block}>
        <div className={style.header__logo}>
          <a href="#">House Stuff</a>
        </div>

        <ul className={style.header__menu}>
          <li>
            <button
              type="button"
              onClick={() => setCartOpen((cartOpen = !cartOpen))}
              className={cartOpen && style.cart_active}
            >
              <FaShoppingCart />
            </button>
            {cartOpen && (
              <div className={style.cart_opened}>
                <h2>Привет</h2>
              </div>
            )}
          </li>
          <li>
            <a href="#">О нас</a>
          </li>
          <li>
            <a href="#">Каталог</a>
          </li>
          <li>
            <a href="#">Кабинет</a>
          </li>
        </ul>
      </div>
    </header>
  );
}
