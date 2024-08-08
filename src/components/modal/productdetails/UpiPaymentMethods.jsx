import React from "react";

const UpiPaymentMethods = ({ selectedMethod, onSelectMethod }) => {
  return (
    <div className="upi-payment-methods">
      <h3>Select UPI Payment Method</h3>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="upiMethod"
          id="googlePay"
          value="Google Pay"
          checked={selectedMethod === "Google Pay"}
          onChange={onSelectMethod}
        />
        <label className="form-check-label" htmlFor="googlePay">
          Google Pay
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="upiMethod"
          id="phonePe"
          value="PhonePe"
          checked={selectedMethod === "PhonePe"}
          onChange={onSelectMethod}
        />
        <label className="form-check-label" htmlFor="phonePe">
          PhonePe
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="upiMethod"
          id="paytm"
          value="Paytm"
          checked={selectedMethod === "Paytm"}
          onChange={onSelectMethod}
        />
        <label className="form-check-label" htmlFor="paytm">
          Paytm
        </label>
      </div>
    </div>
  );
};

export default UpiPaymentMethods;