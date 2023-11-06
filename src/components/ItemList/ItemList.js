import React, { useContext } from "react";
import Item from "./Item";
import { Row } from "antd";
import { UIContext } from "../Context/UIContext";

const ItemList = ({ products, title }) => {
  const { darkMode } = useContext(UIContext);

  return (
    <section className="container">
      <h2
        className={darkMode ? "dark-text" : ""}
        style={{ textTransform: "capitalize", paddingTop: "1rem" }}
      >
        {title}
      </h2>

      {!products?.length && (
        <h3
          className={darkMode ? "dark-text" : ""}
          style={{ textAlign: "center" }}
        >
          No hay productos para mostrar
        </h3>
      )}

      <Row gutter={[16, 24]}>
        {[
          products.map((item, index) => {
            return <Item key={index} {...item} />;
          }),
        ]}
      </Row>
    </section>
  );
};

export default ItemList;
