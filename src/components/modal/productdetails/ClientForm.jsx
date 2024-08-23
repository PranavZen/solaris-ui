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
  pincode: Yup.string()
    .matches(/^[0-9]+$/, "Please enter a valid pincode number.")
    .length(6, "Pincode must be exactly 6 digits.")
    .required("Pincode number is required."),
  address: Yup.string().required("Address is required."),
  state: Yup.string().required("State is required."),
  city: Yup.string().required("City is required."),
  affiliateCode: Yup.string(),
});

const ClientForm = ({ onSuccess }) => {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedStateId, setSelectedStateId] = useState("");
  const [selectedCityId, setSelectedCityId] = useState("");

  useEffect(() => {
    // Fetch states
    axios
      .get("https://client.solarisbook.com/state-getAll")
      .then((response) => {
        setStates(response.data.states);
      })
      .catch(() => {
        toast.error("Failed to fetch states.");
      });
  }, []);

  const fetchCities = (id) => {
    // Fetch cities based on selected state
    axios
      .get(`https://client.solarisbook.com/city-state/${id}`)
      .then((response) => {
        setCities(response.data.cities);
      })
      .catch(() => {
        toast.error("Failed to fetch cities.");
      });
  };

  const handleSubmit = async (values, { resetForm }) => {
    try {
      // Prepare the form data
      const formValues = {
        name: values.name,
        email: values.email,
        phone: values.mobileNumber,
        address: values.address,
        state: selectedStateId || values.state, // Use ID for state
        city: selectedCityId || values.city, // Use ID for city
        pinCode: values.pincode,
        country: "1", // Assuming country ID is static or predefined
        affiliateCode: values.affiliateCode,
      };
  
      console.log("Submitting form with values:", formValues);
  
      // Make the POST request
      const response = await axios.post("https://client.solarisbook.com/sign-up", formValues);
  
      // Check the response status and message
      if (response.status === 200 && response.data.message === "User created successfully") {
        toast.success("Form submitted successfully!");
        resetForm();
        if (onSuccess) {
          onSuccess();
        }
      } 
      else {
        toast.success(response.data.message);
      }
    } catch (error) {
      console.error("Submission error:", error);
  
      // Check for specific error details from server
      if (error.response && error.response.data) {
        toast.error(`Error: ${error.response.data.message || 'Something went wrong'}`);
      } else {
        toast.error("Something went wrong.");
      }
    }
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
          pincode: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
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
                className="form-control"
                disabled
              />
            </div>

            <div className="form-group col-md-6">
              <label className="form-label">State</label>
              <Field
                as="select"
                name="state"
                className="form-control"
                onChange={(e) => {
                  const selectedStateName = e.target.value;
                  const selectedStateObj = states.find(
                    (state) => state.name === selectedStateName
                  );
                  const stateId = selectedStateObj?.id;
                  setSelectedStateId(stateId);
                  setFieldValue("state", selectedStateName);
                  fetchCities(stateId);
                }}
              >
                <option value="">Select State</option>
                {states.map((state) => (
                  <option key={state.id} value={state.name}>
                    {state.name}
                  </option>
                ))}
              </Field>
              <ErrorMessage name="state" component="span" className="error" />
            </div>

            <div className="form-group col-md-6">
              <label className="form-label">City</label>
              <Field
                as="select"
                name="city"
                className="form-control"
                onChange={(e) => {
                  const selectedCityName = e.target.value;
                  const selectedCityObj = cities.find(
                    (city) => city.city === selectedCityName
                  );
                  const cityId = selectedCityObj?.id;
                  setSelectedCityId(cityId);
                  setFieldValue("city", selectedCityName);
                }}
              >
                <option value="">Select City</option>
                {cities.map((city) => (
                  <option key={city.id} value={city.city}>
                    {city.city}
                  </option>
                ))}
              </Field>
              <ErrorMessage name="city" component="span" className="error" />
            </div>

            <div className="form-group col-md-6">
              <label className="form-label">Pincode</label>
              <Field name="pincode" className="form-control" />
              <ErrorMessage name="pincode" component="span" className="error" />
            </div>

            <div className="form-group col-md-6">
              <label className="form-label">Discount Coupon Code</label>
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
