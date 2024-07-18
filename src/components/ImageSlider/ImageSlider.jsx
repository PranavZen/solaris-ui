import React, { useState } from "react";

const ImageSlider = ({ colorImages }) => {
  const [currentIndexByColor, setCurrentIndexByColor] = useState({
    gray: 0,
    black: 0,
  });
  const [selectedColor, setSelectedColor] = useState("gray");

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  const handleThumbnailClick = (index) => {
    setCurrentIndexByColor((prevState) => ({
      ...prevState,
      [selectedColor]: index,
    }));
  };

  const getCurrentImages = () => {
    return colorImages[selectedColor];
  };

  return (
    <>
    <div className="color-container">
          {Object.keys(colorImages).map((color) => (
            <div
              key={color}
              className={`color-${color} colorBox`}
              onClick={() => handleColorClick(color)}
            ></div>
          ))}
        </div>
    <div className="slider-container container">
      <div className="main-image-container">
        <img
          src={getCurrentImages()[currentIndexByColor[selectedColor]]}
          alt={`Main ${currentIndexByColor[selectedColor]}`}
          className="main-image"
        />

        
      </div>
      <div className="thumbnail-container">
        {getCurrentImages().map((image, index) => (
          <div className="thumbNailBox" key={index}>
            <img
              src={image}
              alt={`Thumbnail ${index}`}
              className={`thumbnail ${
                index === currentIndexByColor[selectedColor] ? "active" : ""
              }`}
              onClick={() => handleThumbnailClick(index)}
            />
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default ImageSlider;
