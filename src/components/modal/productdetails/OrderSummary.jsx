import React from "react";
import CommonButton from "../../commonButton/CommonButton";

const OrderSummary = ({
  selectedColor,
  selectedBundle,
  currentPrice,
  onPreOrder,
  images,
  name,
}) => {
  return (
    <div className="order-summary">
      <div className="leftBoxWp">
        <div className="finalProductImgWRap">
          <img
            src={images}
            alt=""
            className="img-fluid"
            width={114}
            height={49}
          />
        </div>
        <div className="nameColrWrap">
          <h2>{name}</h2>
          <p>
            <span>Color:</span> {selectedColor}
          </p>
        </div>
      </div>
      <div className="midBoxWp">
        <h2>Course</h2>
        <p>{selectedBundle}</p>
      </div>
      <div className="rightBoxWp">
        <h3 className="pricing">₹{currentPrice}</h3>
        <CommonButton
          buttonText="Pre Order Now"
          onClick={onPreOrder}
          type="submit"
        />
      </div>
    </div>
  );
};

export default OrderSummary;
