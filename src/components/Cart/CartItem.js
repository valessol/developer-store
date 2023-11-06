import React, { useContext } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { CartContext } from "../Context/CartContext";
import { UIContext } from "../Context/UIContext";

const CartItem = ({
  id,
  img,
  name,
  selectedColor,
  selectedSize,
  selectedQuantity,
  price,
}) => {
  const { deleteItem } = useContext(CartContext);
  const { darkMode } = useContext(UIContext);

  return (
    <tr key={id}>
      <td>
        <table className="second-table">
          <tbody>
            <tr>
              <td>
                <img className="cart__image" src={img} alt={name} />
              </td>

              <td>
                <div className="cart__text">
                  <h4 className={darkMode ? "dark-text" : ""}>{name}</h4>

                  <div className="cart__props">
                    <div>Color:</div>
                    <div
                      className="style__color cart__style"
                      style={{ backgroundColor: selectedColor }}
                    ></div>
                  </div>

                  {!name.includes("Mochila") && (
                    <div className="cart__props">
                      <div>Talle:</div>
                      <div className="cart__style">{selectedSize}</div>
                    </div>
                  )}

                  <div className="cart__props">
                    Cantidad: {selectedQuantity}
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </td>

      {/* Precio y eliminar item */}

      <td className="center">${price * selectedQuantity}</td>

      <td className="center">
        <RiDeleteBin6Line
          className="delete-btn"
          onClick={() => deleteItem(id)}
        />
      </td>
    </tr>
  );
};

export default CartItem;
