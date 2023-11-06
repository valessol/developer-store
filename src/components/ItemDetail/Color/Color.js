import { Spin } from "antd";
import React from "react";

const Color = ({ color, setSelectedColor }) => {
  const handleSelectedColor = (colorCode, index) => {
    setSelectedColor(colorCode);

    const colors = document.querySelectorAll(".colors");

    colors.forEach((item) => {
      if (item.id === `color-${index}`) item.classList.add("style--active");
      else item.classList.remove("style--active");
    });
  };

  return (
    <div className="style">
      Color:
      {color.length ? (
        color.map((item, index) => {
          return (
            <div
              key={index}
              className="style__color colors"
              id={`color-${index}`}
              style={{ backgroundColor: item }}
              onClick={() => handleSelectedColor(item, index)}
            ></div>
          );
        })
      ) : (
        <Spin size="large" className="spin" />
      )}
    </div>
  );
};

export default Color;
