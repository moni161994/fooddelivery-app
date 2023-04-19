import { useContext } from "react";
import CartContext from "../../store/cart-context";
import style from "../Layout/HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const numberOfItemsInCart = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  const btnClass = `${style.button} ${style.bump}`;

  return (
    <>
      <button onClick={props.onClick} className={btnClass}>
        <span className={style.icon}>
          <i class="fa-solid fa-cart-shopping"></i>
        </span>
        <span>Your Cart</span>
        <span className={style.badge}>{numberOfItemsInCart}</span>
      </button>
    </>
  );
};

export default HeaderCartButton;
