import React from "react";
import mealsImg from "../../assets/meals.png";
import style from "../Layout/Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <>
      <header className={style.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={style["main-image"]}>
        <img src={mealsImg} alt="boxes of food" />
      </div>
    </>
  );
};

export default Header;
