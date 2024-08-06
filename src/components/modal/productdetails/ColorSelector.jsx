// src/components/ColorSelector.js
import React from "react";

const ColorSelector = ({ colors, selectedColor, onSelectColor }) => {
  return (
    <div className="color-selector">
      <label htmlFor="color-select" className="color-select">
        Select bundle
      </label>
      <div className="radioWrap">
        {colors.map((color) => (
          <label key={color}>
            <input
              type="radio"
              value={color}
              checked={selectedColor === color}
              onChange={() => onSelectColor(color)}
              style={{
                appearance: "none",
                width: "1.9rem",
                height: "1.9rem",
                border: `.4rem solid ${
                  selectedColor === color ? "#b4b2b2" : "#fff"
                }`,
                borderRadius: "50%",
                position: "relative",
                outline: "none",
                cursor: "pointer",
                backgroundColor: color,
              }}
            />
            {color}
          </label>
        ))}
      </div>
    </div>
  );
};

export default ColorSelector;
