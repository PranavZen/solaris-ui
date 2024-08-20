import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ProductInfo from "./ProductInfo";
import ProductImageSlider from "./ProductImageSlider";
import ColorSelector from "./ColorSelector";
import BundleSelector from "./BundleSelector";
import OrderSummary from "./OrderSummary";
import DefaultCourseBox from "./DefaultCourseBox";
import staticCourseDetails from "./courseData";
import initialImages from "./sliderImagesData";
import ClientForm from "./ClientForm";
import CommonButton from "../../commonButton/CommonButton";
import UpiPaymentMethods from "./UpiPaymentMethods";

const ProductDetails = () => {
  const [selectedColor, setSelectedColor] = useState("gray");
  const [selectedBundle, setSelectedBundle] = useState(null);
  const [currentPrice, setCurrentPrice] = useState("27,000");
  const [discountedPrice, setDiscountedPrice] = useState("34,000");
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedUpiMethod, setSelectedUpiMethod] = useState("Google Pay");
  const { handleSubmit } = useForm();

  const handleColorSelect = (color) => setSelectedColor(color);

  const handleBundleSelect = (bundleId) => {
    const selected = staticCourseDetails.find(
      (bundle) => bundle.id === parseInt(bundleId, 10)
    );
    setSelectedBundle(selected);
  };

  const handlePreOrder = (data) => {
    setCurrentStep(3);
  };

  const handleBack = () => setCurrentStep(1);

  const handleFormSuccess = () => {
    setCurrentStep(2);
  };

  const handleSelectMethod = (event) => {
    setSelectedUpiMethod(event.target.value);
  };

  const renderOrderSummary = () => (
    <OrderSummary
      name="Product Name"
      images={
        initialImages[selectedColor] ? [initialImages[selectedColor][0]] : []
      }
      selectedColor={selectedColor}
      selectedBundle={
        selectedBundle ? selectedBundle.courseName : "Not Selected"
      }
      currentPrice="27,000"
      currentStep={currentStep}
      onPreOrder={handlePreOrder}
      handleSubmit={handleSubmit}
    />
  );

  return (
    <div className="product-details">
      {currentStep === 2 ? (
        <div className="section step2">
          <div className="col-lg-6 col-md-6 col-12">
            <ProductImageSlider images={initialImages[selectedColor] || []} />
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            {/* <CommonButton
            buttonText="Back"
            onClick={handleBack}
            className="back-button"
          /> */}
            <div className="padLeft">
              <ProductInfo
                name="Product Name"
                description="Set your imagination free with the powerful Solarise book 14X OLED! Whether it's for creative work or gaming fun."
                currentPrice="27,000"
              />
              <BundleSelector
                bundles={staticCourseDetails}
                selectedBundle={selectedBundle ? selectedBundle.id : ""}
                onSelectBundle={handleBundleSelect}
              />
              <div className="colorQtWraps">
                <ColorSelector
                  colors={["gray", "black"]}
                  selectedColor={selectedColor}
                  onSelectColor={handleColorSelect}
                />
                <div className="qtSelectWrap">
                  <label htmlFor="quantity">Quantity</label>
                  <div className="qttBox">1</div>
                </div>
              </div>
              <div className="produtcMainPrices">
                <h2>
                  ₹{currentPrice} <del>₹{discountedPrice}</del>
                </h2>
              </div>
              <DefaultCourseBox />
              {renderOrderSummary()}
            </div>
          </div>
        </div>
      ) : currentStep === 1 ? (
        <div className="section step1">
          <div className="col-mlg-10 col-md-10 col-12 mx-auto">
            <ClientForm
              onSubmit={handlePreOrder}
              onSuccess={handleFormSuccess}
            />
          </div>
        </div>
      ) : currentStep === 3 ? (
        <div className="section step3">
          <div className="h100 w-100 d-flex justify-content-center align-items-center">
            <div className="form-group col-md-6">
              <label className="form-label">Pay via UPI</label>
              <UpiPaymentMethods
                selectedMethod={selectedUpiMethod}
                onSelectMethod={handleSelectMethod}
              />
            </div>
            {renderOrderSummary()}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ProductDetails;
