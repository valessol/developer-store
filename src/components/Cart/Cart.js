import React, { useContext } from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import { UIContext } from "../Context/UIContext";
import CartItem from "./CartItem";
import CartResume from "./CartResume";

const Cart = () => {
  const { cart, cleanCart } = useContext(CartContext);
  const { darkMode } = useContext(UIContext);

  return (
    <>
      <table className="first-table">
        <thead>
          <tr>
            <th className="left">Producto</th>
            <th className="center">Precio</th>
            <th className="center"></th>
          </tr>
        </thead>

        <tbody className={darkMode ? "borderTable dark-tbody" : "borderTable "}>
          {cart.map((item) => {
            return <CartItem key={item.id} {...item} />;
          })}
        </tbody>
      </table>

      <CartResume />

      <div className="card-buttons">
        <Link exact to="/checkout">
          <Button
            type="primary"
            shape="round"
            className={darkMode ? "button dark-button" : "button"}
          >
            Finalizar compra
          </Button>
        </Link>
        <Button
          shape="round"
          className={
            darkMode
              ? "button button--secondary dark-button--secondary"
              : "button button--secondary"
          }
          onClick={cleanCart}
        >
          Vaciar Carrito
        </Button>
      </div>
    </>
  );
};

export default Cart;
