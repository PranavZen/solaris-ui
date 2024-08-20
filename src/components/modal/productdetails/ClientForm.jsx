import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CommonButton from "../../commonButton/CommonButton";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[A-Za-z\s]+$/, "Name should only contain letters.")
    .required("Name is required."),
  email: Yup.string()
    .email("Please enter a valid email address.")
    .required("Email is required."),
  mobileNumber: Yup.string()
    .matches(/^[0-9]{10}$/, "Please enter a valid 10-digit mobile number.")
    .required("Mobile number is required."),
  address: Yup.string().required("Address is required."),
  state: Yup.string().required("State is required."),
  city: Yup.string().required("City is required."),
  affiliateCode: Yup.string(),
});

const ClientForm = ({ onSubmit, onSuccess }) => {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  useEffect(() => {
    // Fetch states
    axios
      .get("https://cdn-api.co-vin.in/api/v2/admin/location/states")
      .then((response) => {
        setStates(response.data.states);
      })
      .catch((error) => {
        toast.error("Failed to fetch states.");
      });
  }, []);

  const fetchCities = (state_id) => {
    // Fetch cities based on selected state
    axios
      .get(
        `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${state_id}`
      )
      .then((response) => {
        setCities(response.data.districts);
      })
      .catch((error) => {
        toast.error("Failed to fetch cities.");
      });
  };

  return (
    <div className="form-container">
      <h2>Pre Order Registration</h2>
      <Formik
        initialValues={{
          name: "",
          email: "",
          mobileNumber: "",
          address: "",
          state: "",
          city: "",
          affiliateCode: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          if (values.affiliateCode) {
            toast.error("Affiliate Code is incorrect!");
            return;
          }
          onSubmit(values);
          toast.success("Form submitted successfully!");
          resetForm();
          if (onSuccess) {
            onSuccess();
          }
        }}
      >
        {({ handleSubmit, setFieldValue }) => (
          <Form onSubmit={handleSubmit} className="row">
            <div className="form-group col-md-12">
              <label className="form-label">Full Name</label>
              <Field name="name" className="form-control" />
              <ErrorMessage name="name" component="span" className="error" />
            </div>

            <div className="form-group col-md-6">
              <label className="form-label">Email ID</label>
              <Field name="email" className="form-control" />
              <ErrorMessage name="email" component="span" className="error" />
            </div>

            <div className="form-group col-md-6">
              <label className="form-label">Mobile Number</label>
              <Field
                name="mobileNumber"
                className="form-control"
                onKeyPress={(event) => {
                  const charCode = event.charCode;
                  if (!/[0-9]/.test(String.fromCharCode(charCode))) {
                    event.preventDefault();
                    toast.error("Mobile number should only contain digits.");
                  }
                }}
              />
              <ErrorMessage
                name="mobileNumber"
                component="span"
                className="error"
              />
            </div>

            <div className="form-group col-md-12">
              <label className="form-label">Address</label>
              <Field
                name="address"
                as="textarea"
                className="form-control"
                row={30}
              />
              <ErrorMessage name="address" component="span" className="error" />
            </div>

            <div className="form-group col-md-6">
              <label className="form-label">Country</label>
              <Field
                as="input"
                name="country"
                value="India"
                className="form-control "
                disabled
              ></Field>
            </div>

            <div className="form-group col-md-6">
              <label className="form-label">State</label>
              <Field
                as="select"
                name="state"
                className="form-control"
                onChange={(e) => {
                  const selectedState = e.target.value;
                  const selectedStateId = states.find(
                    (state) => state.state_name === selectedState
                  ).state_id;
                  setFieldValue("state", selectedState);
                  fetchCities(selectedStateId);
                }}
              >
                <option value="">Select State</option>
                {states.map((state) => (
                  <option key={state.state_id} value={state.state_name}>
                    {state.state_name}
                  </option>
                ))}
              </Field>
              <ErrorMessage name="state" component="span" className="error" />
            </div>

            <div className="form-group col-md-6">
              <label className="form-label">City</label>
              <Field as="select" name="city" className="form-control">
                <option value="">Select City</option>
                {cities.map((city) => (
                  <option key={city.district_id} value={city.district_name}>
                    {city.district_name}
                  </option>
                ))}
              </Field>
              <ErrorMessage name="city" component="span" className="error" />
            </div>

            <div className="form-group col-md-6">
              <label className="form-label">Discount Cupon Code</label>
              <Field name="affiliateCode" className="form-control" />
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
            <div className="form-group col-md-6">
              <CommonButton buttonText="Select Pre Order" type="submit" />
            </div>
          </Form>
        )}
      </Formik>
      <ToastContainer />
    </div>
  );
};

export default ClientForm;
