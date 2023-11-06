import React, { useContext } from "react";
import { Card, Button } from "antd";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { FavContext } from "../Context/FavContext";
import "antd/dist/antd.css";

const { Meta } = Card;

const Item = ({ id, name, img, description, category, price, stock }) => {
  const { addFavorites, removeFavorites, itemAddedToFavorites } =
    useContext(FavContext);

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

  return (
    <div key={id}>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt={description} src={img} style={{ height: 247 }} />}
      >
        <Link exact to={`/product/${id}`}>
          <Meta title={name} />
        </Link>

        <p className="category">
          Categoría:
          <span>
            <Link exact to={`/products/${category}`}>
              {category}
            </Link>
          </span>
        </p>

        <p className="price">
          Precio: <span>${price}</span>
        </p>

        <div className="item-button">
          {itemAddedToFavorites(id) ? (
            <AiFillHeart
              onClick={() => handleRemoveFavorites(id)}
              className="favorite-icon"
            />
          ) : (
            <AiOutlineHeart
              onClick={() => handleAddFavorites()}
              className="favorite-icon"
            />
          )}

          <Link exact to={`/product/${id}`}>
            <Button
              type="primary"
              shape="round"
              className="button"
              disabled={stock === 0}
            >
              Ver detalle
            </Button>
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default Item;
