import React from "react";
import "../modal/modal.css";
import ProductDetails from "./productdetails/ProductDetails";

function Modal() {
  return (
    <div
      className="modal fade"
      id="staticBackdrop"
      tabIndex="-1"
      aria-labelledby="staticBackdrop"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-xl">
        <div className="modal-content">
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
          <div className="modal-body">
            <ProductDetails />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
