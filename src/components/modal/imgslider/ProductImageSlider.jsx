import React from "react";
import free1 from "../../../images/free1.png";
import ImageSlider from "../../ImageSlider/ImageSlider";
function ProductImageSlider() {
  const colorImages = {
    gray: [
      free1,
      "https://placehold.co/100x100",
      "https://placehold.co/300x800",
      "https://placehold.co/1000x200",
    ],
    black: [
      "https://placehold.co/800x400",
      "https://placehold.co/800x400",
      "https://placehold.co/800x800",
      "https://placehold.co/300x200",
    ],
  };
  return (
    <div className="leftBox">
      <ImageSlider colorImages={colorImages} />
    
    </div>
  );
}

export default ProductImageSlider;
