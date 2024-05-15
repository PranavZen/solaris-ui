import React from "react";
import CommonButton from "../commonButton/CommonButton";
import ImageSlider from "../ImageSlider/ImageSlider";
// import blackImg1 from '../../images/black/img1.png';
// import blackImg2 from '../../images/black/img2.png';
// import blackImg3 from '../../images/black/img3.png';
// import blackImg4 from '../../images/black/silder-main.png';
// import grayImg1 from '../../images/gray/img1.jpg';
// import grayImg2 from '../../images/gray/img2.jpg';
// import grayImg3 from '../../images/gray/img3.jpg';
function ProductFeature() {
  const blackImages = [
    "https://placehold.co/800x400",
    "https://placehold.co/800x400",
    "https://placehold.co/800x800",
    "https://placehold.co/300x200",
  ];
  const grayImages = [
    "https://placehold.co/200x200",
    "https://placehold.co/100x100",
    "https://placehold.co/300x800",
    "https://placehold.co/1000x200",
  ];
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
            <CommonButton buttonText="Pre Order Now" />
          </div>
        </div>
        <div className="col-md-12 col-lg-6">
          <ImageSlider blackImages={blackImages} grayImages={grayImages} />
        </div>
      </div>
    </div>
  );
}

export default ProductFeature;
