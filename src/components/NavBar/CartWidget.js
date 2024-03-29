import React, { useContext } from "react";
import { BsBag } from "react-icons/bs";
import { CartContext } from "../Context/CartContext";

const CartWidget = () => {
  const { totalItems } = useContext(CartContext);

  return (
    <div className="cartWidget">
      <span>{totalItems() !== 0 && totalItems()}</span>
      <BsBag className="bs-icon" />
    </div>
  );
};

export default CartWidget;
