import React from "react";
import CommonButton from "../commonButton/CommonButton";
import ImageSlider from "../ImageSlider/ImageSlider";
function ProductFeature() {
  const colorImages = {
    gray: [
      "https://placehold.co/200x200",
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
    <div className="container">
      <div className="row">
        <div className="col-md-12 col-lg-6">
          <div className="leftBox">
            <h2>Future Laptop for Digital India</h2>
            <p>
              Set your imagination free with the powerful Vivobook 14X OLED!
              Whether it's for creative work or gaming fun, its 13th Gen Intel®
              Core™ H-series processor and NVIDIA® GeForce RTX™ 3050 Laptop GPU1
              give you all the multitasking power you need.
            </p>
            <CommonButton buttonText="Pre Order Now" type="button"/>
          </div>
        </div>
        
        <div className="col-md-12 col-lg-6">
          <ImageSlider colorImages={colorImages} />
        </div>
      </div>
    </div>
  );
}

export default ProductFeature;
