import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Image } from "antd";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { CartContext } from "../Context/CartContext";
import { Description } from "./Description/Description";
import Category from "./Category/Category";
import Quantity from "./Quantity/Quantity";
import Color from "./Color/Color";
import Size from "./Size/Size";
import { UIContext } from "../Context/UIContext";
import { FavContext } from "../Context/FavContext";
import "antd/dist/antd.css";

const ItemDetail = ({
  id,
  name,
  img,
  description,
  category,
  gender,
  price,
  color,
  size,
  stock,
}) => {
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");

  const { findItem, addToCart } = useContext(CartContext);
  const { addFavorites, removeFavorites, itemAddedToFavorites } =
    useContext(FavContext);
  const { darkMode } = useContext(UIContext);

  const newItem = {
    id,
    name,
    img,
    price,
    selectedColor,
    selectedSize,
    selectedQuantity,
  };

  const newFav = {
    id,
    name,
    img,
    description,
    category,
    price,
  };

  const handleAddFavorites = () => {
    addFavorites(newFav);
  };

  const handleRemoveFavorites = (id) => {
    removeFavorites(id);
  };

  const handleAddToCart = () => {
    if (
      selectedQuantity > 0 &&
      (selectedColor === "" || (selectedSize === "" && gender !== "accesorios"))
    ) {
      const alert = document.createElement("P");
      alert.classList.add("alert-msg");
      gender !== "accesorios"
        ? (alert.textContent =
            "¡Elige color y talle antes de agregar al carrito!")
        : (alert.textContent = "¡Elige color antes de agregar al carrito!");

      const addToCartSection = document.querySelector("#alert");
      addToCartSection.appendChild(alert);

      setTimeout(() => {
        addToCartSection.removeChild(alert);
      }, 3000);

      return;
    }

    addToCart(newItem);
  };

  return (
    <div
      className={
        darkMode ? "detail cardContainer dark-body" : "detail cardContainer"
      }
      key={id}
    >
      <div className="cardContainer--item">
        <Image className="detail__image" src={img} alt={name} />

        <div className="detail__content">
          <Category gender={gender} category={category} />

          <h2 className={darkMode ? "dark-text" : ""}>{name}</h2>

          <h3 className={darkMode ? "dark-text" : ""}>ARS {price}</h3>

          <Description gender={gender} description={description} />

          <Quantity
            selectedQuantity={selectedQuantity}
            setSelectedQuantity={setSelectedQuantity}
            stock={stock}
          />

          <Color color={color} setSelectedColor={setSelectedColor} />

          <Size gender={gender} size={size} setSelectedSize={setSelectedSize} />

          {findItem(id) ? (
            <div className="button detail__button detail__button--cart">
              <Link to="/">
                <Button
                  type="primary"
                  shape="round"
                  className={darkMode ? "button dark-button" : "button"}
                >
                  Continuar comprando
                </Button>
              </Link>
              <Link to="/cart">
                <Button
                  shape="round"
                  className={
                    darkMode
                      ? "button button--secondary dark-button--secondary"
                      : "button button--secondary"
                  }
                >
                  Ver carrito
                </Button>
              </Link>
            </div>
          ) : (
            <Button
              type="primary"
              shape="round"
              className={darkMode ? "button dark-button" : "button"}
              disabled={selectedQuantity > stock}
              onClick={() => handleAddToCart()}
            >
              {stock ? "Agregar al carrito" : "Sin stock"}
            </Button>
          )}
          <div id="alert" />
        </div>
      </div>

      {itemAddedToFavorites(id) ? (
        <AiFillHeart
          onClick={() => handleRemoveFavorites(id)}
          className="favorite-icon detail-icon"
        />
      ) : (
        <AiOutlineHeart
          onClick={() => handleAddFavorites()}
          className="favorite-icon detail-icon"
        />
      )}
    </div>
  );
};

export default ItemDetail;
