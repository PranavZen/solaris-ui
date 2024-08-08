import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css";

const ProductImageSlider = ({ images = [] }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [thumbStartIndex, setThumbStartIndex] = useState(0);
  const thumbDisplayCount = 4;

  const handleThumbClick = (index) => {
    setActiveIndex(index);
  };

  const handlePrevMainClick = () => {
    setActiveIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : images.length - 1
    );
  };

  const handleNextMainClick = () => {
    setActiveIndex((prevIndex) =>
      prevIndex < images.length - 1 ? prevIndex + 1 : 0
    );
  };

  const handlePrevThumbClick = () => {
    setThumbStartIndex((prevIndex) =>
      Math.max(prevIndex - thumbDisplayCount, 0)
    );
  };

  const handleNextThumbClick = () => {
    setThumbStartIndex((prevIndex) =>
      Math.min(prevIndex + thumbDisplayCount, images.length - thumbDisplayCount)
    );
  };

  const visibleThumbnails = images.slice(
    thumbStartIndex,
    thumbStartIndex + thumbDisplayCount
  );

  return (
    <div className="product-image-slider">
      <div className="main-image">
        <img src={images[activeIndex]} alt={`Product Image ${activeIndex}`} />
        <button className="prev-button" onClick={handlePrevMainClick} type="button">
          <i className="fa fa-arrow-left"></i>
        </button>
        <button className="next-button" onClick={handleNextMainClick} type="button">
          <i className="fa fa-arrow-right"></i>
        </button>
      </div>
      <div className="thumbs-container">
        <button
        type="button"
          className="prev-thumb-button"
          onClick={handlePrevThumbClick}
          disabled={thumbStartIndex === 0}
        >
          <i className="fa fa-arrow-left"></i>
        </button>
        <Swiper
          spaceBetween={10}
          slidesPerView={thumbDisplayCount}
          className="thumbs-swiper"
        >
          {visibleThumbnails.map((image, index) => (
            <SwiperSlide
              key={thumbStartIndex + index}
              onClick={() => handleThumbClick(thumbStartIndex + index)}
              className={
                thumbStartIndex + index === activeIndex ? "active" : ""
              }
            >
              <img src={image} alt={`Thumbnail ${thumbStartIndex + index}`} />
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          className="next-thumb-button"
          type="button"
          onClick={handleNextThumbClick}
          disabled={thumbStartIndex + thumbDisplayCount >= images.length}
        >
          <i className="fa fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

export default ProductImageSlider;
