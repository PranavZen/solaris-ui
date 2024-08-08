import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CommonButton from "../../commonButton/CommonButton";

const ClientForm = ({ onSubmit, onSuccess }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const validateName = (value) => /^[A-Za-z\s]+$/.test(value);
  const validateEmail = (value) =>
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
  const validateMobileNumber = (value) => /^[0-9]{10}$/.test(value);

  const onSubmitHandler = (data) => {
    if (data.affiliateCode !== "abcd") {
      toast.error("Affiliate Code is incorrect!");
      return;
    }
    onSubmit(data);
    toast.success("Form submitted successfully!");
    reset();
    if (onSuccess) {
      onSuccess();
    }
  };

  const handleKeyPress = (event) => {
    const charCode = event.charCode;
    if (!/[0-9]/.test(String.fromCharCode(charCode))) {
      event.preventDefault();
      toast.error("Mobile number should only contain digits.");
    }
  };

  return (
    <div className="form-container">
    <h2>Pre Order Registration</h2>
    <form onSubmit={handleSubmit(onSubmitHandler)} className="row">
      <div className="form-group col-md-6">
        <label className="form-label">Name</label>
        <input
          className="form-control"
          {...register("name", {
            required: "Name is required.",
            validate: (value) =>
              validateName(value) || "Name should only contain letters.",
          })}
        />
        {errors.name && (
          <span className="error">{errors.name.message}</span>
        )}
      </div>

      <div className="form-group col-md-6">
        <label className="form-label">Email ID</label>
        <input
          className="form-control"
          {...register("email", {
            required: "Email is required.",
            validate: (value) =>
              validateEmail(value) || "Please enter a valid email address.",
          })}
        />
        {errors.email && (
          <span className="error">{errors.email.message}</span>
        )}
      </div>

      <div className="form-group col-md-6">
        <label className="form-label">Mobile Number</label>
        <input
          className="form-control"
          {...register("mobileNumber", {
            required: "Mobile number is required.",
            validate: (value) =>
              validateMobileNumber(value) ||
              "Please enter a valid 10-digit mobile number.",
          })}
          onKeyPress={handleKeyPress}
        />
        {errors.mobileNumber && (
          <span className="error">{errors.mobileNumber.message}</span>
        )}
      </div>

      <div className="form-group col-md-6">
        <label className="form-label">Address</label>
        <textarea
          className="form-control"
          {...register("address", { required: "Address is required." })}
        />
        {errors.address && (
          <span className="error">{errors.address.message}</span>
        )}
      </div>

      <div className="form-group col-md-6">
        <label className="form-label">City</label>
        <input
          className="form-control"
          {...register("city", { required: "City is required." })}
        />
        {errors.city && (
          <span className="error">{errors.city.message}</span>
        )}
      </div>

      <div className="form-group col-md-6">
        <label className="form-label">State</label>
        <input
          className="form-control"
          {...register("state", { required: "State is required." })}
        />
        {errors.state && (
          <span className="error">{errors.state.message}</span>
        )}
      </div>

      <div className="form-group col-md-6">
        <label className="form-label">Affiliate Code</label>
        <input className="form-control" {...register("affiliateCode")} />
      </div>

      <div className="form-group col-md-6">
        <label className="form-label">Pay via UPI</label>
        <div className="payment-methods">
          <img
            src="upi-payment.png"
            alt="UPI Payment Method"
            className="img-fluid"
            loading="lazy"
          />
        </div>
      </div>
      <CommonButton buttonText="Checkout For Payment" type="submit" />
    </form>
    <ToastContainer />
  </div>
  );
};

export default ClientForm;
