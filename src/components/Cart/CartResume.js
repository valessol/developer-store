import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { UIContext } from "../Context/UIContext";

const CartResume = () => {
  const { totalPrice } = useContext(CartContext);
  const { darkMode } = useContext(UIContext);
  return (
    <div className="cart__resume">
      <div className="resume-item">
        <h4 className={darkMode ? "dark-text" : ""}>Subtotal: </h4>
        <p> ${totalPrice()}</p>
      </div>

      <div className="resume-item">
        <h4 className={darkMode ? "dark-text" : ""}>IVA:</h4>
        <p>${totalPrice() * 0.21}</p>
      </div>

      <hr />
      <div className="resume-item">
        <h3 className={darkMode ? "dark-text" : ""}>TOTAL:</h3>
        <p>${totalPrice() * 1.21}</p>
      </div>
    </div>
  );
};

export default CartResume;
