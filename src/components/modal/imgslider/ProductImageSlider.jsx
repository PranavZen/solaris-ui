import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function ProductImageSlider() {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);

  useEffect(() => {
    setNav1(nav1);
    setNav2(nav2);
  }, [nav1, nav2]);

  const slider1Settings = {
    asNavFor: nav2,
    ref: (slider) => setNav1(slider),
    arrows: false,
    fade: true,
    // autoplay: true,
    // autoplaySpeed: 2000,
  };

  const slider2Settings = {
    asNavFor: nav1,
    ref: (slider) => setNav2(slider),
    slidesToShow: 3,
    slidesToScroll: 1,
    focusOnSelect: true,
    arrows: false,
    // swipeToSlide: false,
    // draggable: false,
    // infinite: false,
  };

  const slides = [
    {
      id: 1,
      image:
        "https://solarisbook.com/static/media/display-1.47319f4d85ed40dc6401.png",
    },
    {
      id: 2,
      image:
        "https://solarisbook.com/static/media/mid-img-laptop.409a47f59a353690075f.png",
    },
    {
      id: 3,
      image:
        "https://solarisbook.com/static/media/grid-five.26289977909d66b5e1c1.png",
    },
    {
      id: 4,
      image:
        "https://solarisbook.com/static/media/mid-img-laptop.409a47f59a353690075f.png",
    },
  ];
  return (
    <div className="leftBox">
      <Slider {...slider1Settings}>
        {slides.map((slide) => (
          <div key={slide.id}>
            <div className="mainImg">
              <img
                src={slide.image}
                alt={`Slide ${slide.id}`}
                className="img-fluid"
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </Slider>
      <div className="thumbnailWrap">
        <Slider {...slider2Settings}>
          {slides.map((slide) => (
            <div key={slide.id}>
              <div className="thumbNailsBox">
                <img
                  src={slide.image}
                  alt={`Thumbnail ${slide.id}`}
                  className="img-fluid"
                //   loading="lazy"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default ProductImageSlider;
