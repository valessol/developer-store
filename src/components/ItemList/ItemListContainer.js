import React, { useState, useEffect, useContext } from "react";
import ItemList from "./ItemList";
import { Spin } from "antd";
import { useParams } from "react-router";
import { UIContext } from "../Context/UIContext";
import { FavContext } from "../Context/FavContext";
import { ProductsContext } from "../Context/ProductsContext";
export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { loader, setLoader } = useContext(UIContext);
  const { favorites } = useContext(FavContext);
  const { products: dbProducts } = useContext(ProductsContext);

  //product filtra los productos por 'category' y 'gender' o por favoritos
  const { product } = useParams();

  useEffect(() => {
    setLoader(true);

    if (product === "favoritos") {
      setProducts(favorites);
      setLoader(false);
      return;
    }

    const productsForCategory = dbProducts.filter(
      (item) => item.category === product
    );
    const productsForGender = dbProducts.filter(
      (item) => item.gender === product
    );

    if (productsForCategory.length) {
      setProducts(productsForCategory);
    } else if (productsForGender.length) {
      setProducts(productsForGender);
    } else {
      setProducts(dbProducts);
    }

    setLoader(false);
  }, [product, dbProducts, favorites, setLoader]);

  return (
    <>
      {loader ? (
        <Spin size="large" className="spin" />
      ) : (
        <ItemList
          products={products}
          title={product ? product : "Nuestros productos"}
        />
      )}
    </>
  );
};
