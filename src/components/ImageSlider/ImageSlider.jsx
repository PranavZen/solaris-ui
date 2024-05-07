import React, { useState } from "react";

const ImageSlider = ({ blackImages, grayImages }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState("black");

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setCurrentImageIndex(0);
  };

  const getCurrentImages = () => {
    return selectedColor === "black" ? blackImages : grayImages;
  };

  return (
    <div className="slider-container container">
      <div className="main-image-container">
        <img
          src={getCurrentImages()[currentImageIndex]}
          alt={`Main ${currentImageIndex}`}
          className="main-image"
        />

        <div className="color-container">
          <div
            className="color-black"
            onClick={() => handleColorClick("black")}
          ></div>
          <div
            className="color-gray"
            onClick={() => handleColorClick("gray")}
          ></div>
        </div>
      </div>
      <div className="thumbnail-container">
        {getCurrentImages().map((image, index) => (
          <div className="thumbNailBox" key={index}>
            <img
              key={index}
              src={image}
              alt={`Thumbnail ${index}`}
              className={`thumbnail ${
                index === currentImageIndex ? "active" : ""
              }`}
              onClick={() => setCurrentImageIndex(index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
