import React from "react";
import MultiStepForm from "./multistepform/MultiStepForm";
import ProductImageSlider from "./imgslider/ProductImageSlider";
import "../modal/modal.css";
function Modal() {
  const product = {
    name: "Windows 11 Pro",
    description:
      "Set your imagination free with the powerful Solaris book 14X OLED! Whether it’s for creative work or gaming fun.",
    price: 99.99,
    disPrice: 100,
    colors: ["Black", "Gray"],
    courses: ["Course 1", "Course 2", "Course 3"],
    // images: [
    //   "https://solarisbook.com/static/media/display-1.47319f4d85ed40dc6401.png",
    //   "https://via.placeholder.com/400x400?text=Image+2",
    //   "https://solarisbook.com/static/media/display-1.47319f4d85ed40dc6401.png",
    // ],
  };
  return (
    <div
      className="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
        <div className="modal-content">
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
          <div className="modal-body">
            <div className="productDetailsWrap">
              <div className="col-lg-6 col-md-5 col-12">
                <ProductImageSlider />
              </div>
              <div className="col-lg-6 col-md-7 col-12">
                <MultiStepForm product={product} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
