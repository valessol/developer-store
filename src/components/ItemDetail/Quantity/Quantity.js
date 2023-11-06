import React, { useContext } from "react";
import { UIContext } from "../../Context/UIContext";

const Quantity = ({ selectedQuantity, setSelectedQuantity, stock }) => {
  const { darkMode } = useContext(UIContext);

  const handleAddItems = () => {
    selectedQuantity < stock && setSelectedQuantity(selectedQuantity + 1);
  };

  const handleRemoveItems = () => {
    selectedQuantity > 1 && setSelectedQuantity(selectedQuantity - 1);
  };

  return (
    <>
      <div className="detail__quantity">
        <button
          className={
            darkMode
              ? "button dark-button detail__button detail__button--quantity"
              : "button detail__button detail__button--quantity"
          }
          disabled={selectedQuantity < 2}
          onClick={() => handleRemoveItems()}
        >
          -
        </button>

        <div className="detail__counter">{selectedQuantity}</div>

        <button
          className={
            darkMode
              ? "button dark-button detail__button detail__button--quantity"
              : "button detail__button detail__button--quantity"
          }
          disabled={selectedQuantity > stock}
          onClick={() => handleAddItems()}
        >
          +
        </button>
      </div>

      <span className="detail__noStock">{!stock && "Sin Stock!"}</span>
    </>
  );
};

export default Quantity;
