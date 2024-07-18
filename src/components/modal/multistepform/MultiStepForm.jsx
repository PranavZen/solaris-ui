import React, { useState, useEffect } from "react";

const MultiStepForm = ({ product }) => {
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState(null);

  const nextStep = () => {
    setDirection("next");
    setStep(step + 1);
  };

  const prevStep = () => {
    setDirection("prev");
    setStep(step - 1);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setDirection(null); // Reset direction after transition
    }, 500);
    return () => clearTimeout(timer);
  }, [step]);

  return (
    <div className="rightBox">
      <div className={`multi-step-form`}>
        {step === 1 && (
          <div
            className={`step-content ${
              direction === "next"
                ? "step-enter step-enter-active"
                : direction === "prev"
                ? "step-exit-back step-exit-back-active"
                : ""
            }`}
          >
            <ProductDetailsStep product={product} nextStep={nextStep} />
          </div>
        )}
        {step === 2 && (
          <div
            className={`step-content ${
              direction === "next"
                ? "step-enter step-enter-active"
                : direction === "prev"
                ? "step-enter-back step-enter-back-active"
                : ""
            }`}
          >
            <UserDetailsStep prevStep={prevStep} />
          </div>
        )}
      </div>
    </div>
  );
};

const ProductDetailsStep = ({ product, nextStep }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedCourse, setSelectedCourse] = useState(product.courses[0]);

  const incrementQuantity = () => setQuantity(quantity + 1);
  const decrementQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  return (
    <div>
      <h1 className="mainProductName">{product.name}</h1>
      <p className="mainProductDescription">{product.description}</p>
      <p className="mainProductPricing">
        ₹{product.price} <del>₹{product.disPrice}</del>
      </p>

      <div className="selectionBox">
        <div className="colorsWrap col-lg-4 col-12">
          <h5>Colors</h5>
          <div className="colorWrapBox">
            {product.colors.map((color, index) => (
              <div key={index} className="form-check form-check-inline">
                <input
                  type="radio"
                  id={`color-${index}`}
                  name="color"
                  className={`form-check-input ${color.toLowerCase()}`}
                  checked={selectedColor === color}
                  onChange={() => setSelectedColor(color)}
                />
                <label htmlFor={`color-${index}`} className="form-check-label">
                  {color}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="quantityWrapBox col-lg-3 col-12">
          <h5>Quantity</h5>
          <div className="input-group">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={decrementQuantity}
            >
              -
            </button>
            <input
              type="text"
              className="form-control text-center"
              value={quantity}
              readOnly
            />
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={incrementQuantity}
            >
              +
            </button>
          </div>
        </div>

        <div className="selectCourseBox col-lg-5 col-12">
          <h5>Courses</h5>
          <select
            className="form-select"
            value={selectedCourse}
            onChange={(e) => setSelectedCourse(e.target.value)}
          >
            {product.courses.map((course, index) => (
              <option key={index} value={course}>
                {course}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="commBtnWrap">
        <button onClick={nextStep}>Pre Order Now</button>
      </div>
    </div>
  );
};

const UserDetailsStep = ({ prevStep }) => {
  return (
    <div className="rightBoxxxx">
      <button className="btn bckBtn" onClick={prevStep}>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="16"
            viewBox="0 0 21 16"
            fill="none"
            class="oldArrow newArrow"
          >
            <path
              d="M1 7C0.447715 7 3.30352e-08 7.44772 0 8C-3.30352e-08 8.55228 0.447715 9 1 9L1 7ZM20.7071 8.70711C21.0976 8.31658 21.0976 7.68342 20.7071 7.29289L14.3431 0.928933C13.9526 0.538409 13.3195 0.538409 12.9289 0.928933C12.5384 1.31946 12.5384 1.95262 12.9289 2.34315L18.5858 8L12.9289 13.6569C12.5384 14.0474 12.5384 14.6805 12.9289 15.0711C13.3195 15.4616 13.9526 15.4616 14.3431 15.0711L20.7071 8.70711ZM1 9L20 9L20 7L1 7L1 9Z"
              fill="#333"
            ></path>
          </svg>
        </span>{" "}
        Back
      </button>
      <form action="" method="post">
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Address</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your address"
          />
        </div>

        <div className="commBtnWrap mt-5">
          <button type="submit">Finish Purchase</button>
        </div>
      </form>
    </div>
  );
};

export default MultiStepForm;
