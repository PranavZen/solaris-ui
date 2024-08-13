import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css";

const ProductImageSlider = ({ images = [] }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const mainSwiperRef = useRef(null);
  const thumbSwiperRef = useRef(null);

  const handleThumbClick = (index) => {
    setActiveIndex(index);
    mainSwiperRef.current.swiper.slideTo(index);
  };

  const handlePrevMainClick = () => {
    const prevIndex = activeIndex > 0 ? activeIndex - 1 : images.length - 1;
    setActiveIndex(prevIndex);
    mainSwiperRef.current.swiper.slideTo(prevIndex);
  };

  const handleNextMainClick = () => {
    const nextIndex = activeIndex < images.length - 1 ? activeIndex + 1 : 0;
    setActiveIndex(nextIndex);
    mainSwiperRef.current.swiper.slideTo(nextIndex);
  };

  const handlePrevThumbClick = () => {
    thumbSwiperRef.current.swiper.slidePrev();
  };

  const handleNextThumbClick = () => {
    thumbSwiperRef.current.swiper.slideNext();
  };

  return (
    <div className="product-image-slider">
      <div className="main-image">
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          ref={mainSwiperRef}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img src={image} alt={`Product Image ${index}`} />
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          className="prev-button"
          onClick={handlePrevMainClick}
          type="button"
        >
          <i className="fa fa-arrow-left"></i>
        </button>
        <button
          className="next-button"
          onClick={handleNextMainClick}
          type="button"
        >
          <i className="fa fa-arrow-right"></i>
        </button>
      </div>
      <div className="thumbs-container">
        <button
          type="button"
          className="prev-thumb-button"
          onClick={handlePrevThumbClick}
        >
          <i className="fa fa-arrow-left"></i>
        </button>
        <Swiper
          spaceBetween={10}
          slidesPerView={4}
          className="thumbs-swiper"
          ref={thumbSwiperRef}
        >
          {images.map((image, index) => (
            <SwiperSlide
              key={index}
              onClick={() => handleThumbClick(index)}
              className={index === activeIndex ? "active" : ""}
            >
              <img src={image} alt={`Thumbnail ${index}`} />
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          className="next-thumb-button"
          type="button"
          onClick={handleNextThumbClick}
        >
          <i className="fa fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

export default ProductImageSlider;
