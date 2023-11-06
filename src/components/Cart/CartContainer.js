import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
import { CartContext } from "../Context/CartContext";
import { UIContext } from "../Context/UIContext";
import Cart from "./Cart";

const CartContainer = () => {
  const { cart } = useContext(CartContext);
  const { darkMode } = useContext(UIContext);

  return (
    <>
      {cart.length ? (
        <div className="cardContainer">
          <div className="cardContainer--item cart">
            <h2 className={darkMode ? "dark-text" : ""}>Carrito de compras</h2>
            <Cart />
          </div>
        </div>
      ) : (
        <>
          <h2
            className={darkMode ? "dark-text" : ""}
            style={{ paddingTop: "1rem" }}
          >
            El carrito está vacío
          </h2>
          <Link to="/">
            <Button
              className={
                darkMode
                  ? "button cart-button dark-button"
                  : "button cart-button"
              }
              type="primary"
              shape="round"
            >
              Volver al inicio
            </Button>
          </Link>
        </>
      )}
    </>
  );
};

export default CartContainer;
