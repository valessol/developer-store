import React, { useContext } from "react";
import { UIContext } from "../Context/UIContext";

const OrderResume = ({ cart, total }) => {
  const { darkMode } = useContext(UIContext);

  return (
    <div className="cart__checklist">
      <h3 className={darkMode ? "dark-text" : ""}>Tu pedido:</h3>
      <ul>
        {cart.length &&
          cart.map((product, index) => {
            return (
              <li key={index}>
                {product.selectedQuantity} x {product.name}
              </li>
            );
          })}
      </ul>
      <h3 className={darkMode ? "dark-text" : ""}>Total: ${total * 1.21}</h3>
    </div>
  );
};

export default OrderResume;
