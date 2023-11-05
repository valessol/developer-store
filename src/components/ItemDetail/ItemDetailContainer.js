import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router";
import { Spin } from "antd";
import { UIContext } from "../Context/UIContext";
import ItemDetail from "./ItemDetail";
import { ProductsContext } from "../Context/ProductsContext";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);
  const { setLoader } = useContext(UIContext);
  const { products: dbProducts } = useContext(ProductsContext);
  const { itemId } = useParams();

  useEffect(() => {
    setLoader(true);
    const selectedProduct = dbProducts.find((prod) => prod.id === itemId);
    setProduct(selectedProduct);
  }, [itemId, dbProducts, setLoader]);

  return (
    <>
      {product.length === 0 ? (
        <Spin size="large" className="spin" />
      ) : (
        <ItemDetail {...product} />
      )}
    </>
  );
};

export default ItemDetailContainer;
