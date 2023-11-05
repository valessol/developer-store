import React, { createContext, useEffect, useState } from "react";
import { getCollection } from "../../firebase/config";

export const ProductsContext = createContext();

const init = JSON.parse(localStorage.getItem("dev-store-products")) || [];

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(init);
  useEffect(() => {
    getCollection("productos")
      .then((items) => {
        setProducts(items);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    localStorage.setItem("dev-store-products", JSON.stringify(products));
  }, [products]);

  return (
    <ProductsContext.Provider
      value={{
        products,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
