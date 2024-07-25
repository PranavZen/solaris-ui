import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import free1 from "../../../images/free1.png";
const MultiStepForm = ({ product }) => {
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState(null);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState({});
  const fetchStates = async () => {
    try {
      const response = await axios.get("https://my.ispl-t10.com/api/state");
      let states = response.data.data.states || [];

      const uniqueStates = Array.from(
        new Set(states.map((state) => state.state_name))
      ).map((state_name) => {
        return states.find((state) => state.state_name === state_name);
      });

      setStates(uniqueStates);
    } catch (error) {
      console.error("Error fetching states:", error);
      toast.error("Failed to fetch states. Please try again later.");
    }
  };

  const fetchCitiesByState = async (stateName) => {
    try {
      const response = await axios.get(
        `https://my.ispl-t10.com/api/get_city_base_on_state?state_name=${stateName}`
      );
      setCities(response.data.cities || []);
    } catch (error) {
      console.error(`Error fetching cities for ${stateName}:`, error);
      toast.error(
        `Failed to fetch cities for ${stateName}. Please try again later.`
      );
    }
  };

  useEffect(() => {
    fetchStates();
  }, []);

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
            <UserDetailsStep
              prevStep={prevStep}
              states={states}
              fetchCitiesByState={fetchCitiesByState}
              cities={cities}
            />
          </div>
        )}
      </div>
    </div>
  );
};

const staticCourseDetails = [
  {
    id: 1,
    courseName: "Digital Marketing Pro",
    subCourses: [
      {
        id: 101,
        name: "SEO Basics",
        iconColor: "#ff3f3f",
      },
      {
        id: 102,
        name: "Content Marketing",
        iconColor: "#ff9f3f",
      },
      {
        id: 103,
        name: "Social Media Strategy",
        iconColor: "#5eff3f",
      },
      {
        id: 104,
        name: "PPC Advertising",
        iconColor: "#3f8aff",
      },
      {
        id: 105,
        name: "Email Marketing",
        iconColor: "#973fff",
      },
      {
        id: 106,
        name: "Analytics & Reporting",
        iconColor: "#ff3fa0",
      },
      {
        id: 107,
        name: "Affiliate Marketing",
        iconColor: "#ba9913",
      },
    ],
  },
  {
    id: 2,
    courseName: "Tech Security & Development",
    subCourses: [
      {
        id: 201,
        name: "Network Security",
        iconColor: "#ff3f3f",
      },
      {
        id: 202,
        name: "Web Security",
        iconColor: "#ff9f3f",
      },
      {
        id: 203,
        name: "Application Security",
        iconColor: "#5eff3f",
      },
      {
        id: 204,
        name: "Cryptography",
        iconColor: "#3f8aff",
      },
      {
        id: 205,
        name: "Ethical Hacking",
        iconColor: "#973fff",
      },
      {
        id: 206,
        name: "Incident Response",
        iconColor: "#ff3fa0",
      },
      {
        id: 207,
        name: "Security Policies",
        iconColor: "#ba9913",
      },
    ],
  },
  {
    id: 3,
    courseName: "Advanced Tech Mastery",
    subCourses: [
      {
        id: 301,
        name: "Cloud Computing",
        iconColor: "#ba9913",
      },
      {
        id: 302,
        name: "AI Fundamentals",
        iconColor: "#ff3fa0",
      },
      {
        id: 303,
        name: "Machine Learning",
        iconColor: "#973fff",
      },
      {
        id: 304,
        name: "Big Data",
        iconColor: "#ff9f3f",
      },
      {
        id: 305,
        name: "Blockchain Technology",
        iconColor: "#ff3f3f",
      },
      {
        id: 306,
        name: "Internet of Things (IoT)",
        iconColor: "#ff9f3f",
      },
      {
        id: 307,
        name: "Robotic Process Automation",
        iconColor: "red",
      },
    ],
  },
  {
    id: 4,
    courseName: "Full-Stack Development Proficiency",
    subCourses: [
      {
        id: 401,
        name: "Frontend Development",
        iconColor: "#ff3f3f",
      },
      {
        id: 402,
        name: "Backend Development",
        iconColor: "#ff9f3f",
      },
      {
        id: 403,
        name: "Database Management",
        iconColor: "#5eff3f",
      },
      {
        id: 404,
        name: "API Development",
        iconColor: "#3f8aff",
      },
      {
        id: 405,
        name: "DevOps",
        iconColor: "#973fff",
      },
      {
        id: 406,
        name: "Version Control",
        iconColor: "#ff3fa0",
      },
      {
        id: 407,
        name: "Testing & Debugging",
        iconColor: "#ba9913",
      },
    ],
  },
  {
    id: 5,
    courseName: "Creative Suite Mastery",
    subCourses: [
      {
        id: 501,
        name: "Photoshop Basics",
        iconColor: "#ba9913",
      },
      {
        id: 502,
        name: "Illustrator Techniques",
        iconColor: "#ff3fa0",
      },
      {
        id: 503,
        name: "InDesign Layouts",
        iconColor: "#973fff",
      },
      {
        id: 504,
        name: "Premiere Pro Editing",
        iconColor: "#3f8aff",
      },
      {
        id: 505,
        name: "After Effects Animations",
        iconColor: "#5eff3f",
      },
      {
        id: 506,
        name: "XD Prototyping",
        iconColor: "#ff9f3f",
      },
      {
        id: 507,
        name: "Creative Cloud Integration",
        iconColor: "#ff3f3f",
      },
    ],
  },
];

const ProductDetailsStep = ({ product, nextStep }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedCourse, setSelectedCourse] = useState(staticCourseDetails[0]);

  // const incrementQuantity = () => setQuantity(quantity + 1);
  // const decrementQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  const handleCourseChange = (e) => {
    const selectedCourseId = parseInt(e.target.value, 10);
    const course = staticCourseDetails.find(
      (course) => course.id === selectedCourseId
    );
    setSelectedCourse(course);
  };

  return (
    <div>
      <h1 className="mainProductName">{product.name}</h1>
      <p className="mainProductDescription">{product.description}</p>
      <p className="mainProductPricing">
        ₹{product.price} <del>₹{product.disPrice}</del>
      </p>

      <div className="selectionBox">
        <div className="quantityWrapBox col-lg-4 col-md-4 col-4">
          <h5>Quantity</h5>
          <div className="input-group">
            <button
              className="btn btn-outline-secondary"
              type="button"
              // onClick={decrementQuantity}
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
              // onClick={incrementQuantity}
            >
              +
            </button>
          </div>
        </div>
        <div className="colorsWrap col-lg-5 col-md-5 col-12">
          <h5>Colors</h5>
          <div className="colorWrapBox">
            {product.colors.map((color, index) => (
              <div key={index} className="form-check form-check-inline">
                <input
                  type="radio"
                  id={`color-${index}`}
                  name="color"
                  className={`form-check-input ${color.toLowerCase()}`}
                  checked
                  readOnly={selectedColor === color}
                  onChange={() => setSelectedColor(color)}
                />
                <label htmlFor={`color-${index}`} className="form-check-label">
                  {color}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="selectCourseBox col-lg-12 col-12">
          <div className="mb-3">
            <h5>Select Bundle</h5>
            <select
              onChange={handleCourseChange}
              value={selectedCourse.id}
              id="state"
              name={selectedCourse.name}
              className="form-select"
            >
              {staticCourseDetails.map((course) => (
                <option key={course.id} value={course.id}>
                  {course.courseName}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className="subWrap col-lg-12 col-12">
        <h5>Courses</h5>
        <div className="subCourdersWrap">
          {selectedCourse.subCourses.map((subCourse) => (
            <div className="form-check" key={subCourse.id}>
              {/* <input
                className="form-check-input"
                type="checkbox"
                value={subCourse.name}
                id={subCourse.id}
              /> */}
              <i className="fa fa-book" style={{ color: subCourse.iconColor }}></i>
              <label className="form-check-label" htmlFor={subCourse.id}>
                {subCourse.name}
              </label>
            </div>
          ))}
        </div>
      </div>
      <div className="subWrap mt-5">
        <h5>Additional Free Bonus Courses<span>*</span></h5>
        <p className="mainProductDescription">
          With every purchase of a bundle courses, you'll also receive five
          bonus courses at no extra cost.
        </p>
        <div className="subCourdersWrap mt-4">
          <div className="form-check">
            {/* <input
              className="form-check-input"
              type="checkbox"
              value="Public Speaking"
              id="Public_Speaking"
              checked
              readOnly
            /> */}
             <i className="fa fa-book" style={{color : "#ff9400"}}/>
            <label className="form-check-label" htmlFor="Public Speaking">
              Public Speaking
            </label>
          </div>
          <div className="form-check">
            {/* <input
              className="form-check-input"
              type="checkbox"
              value="Communication Bundle"
              id="Communication_Bundle"
              checked
              readOnly
            /> */}
             <i className="fa fa-book" style={{color : "#ff9400"}}/>
            <label className="form-check-label" htmlFor="Communication Bundle">
              Communication Bundle
            </label>
          </div>
          <div className="form-check">
            {/* <input
              className="form-check-input"
              type="checkbox"
              value="Body Language"
              id="Body_Language"
              checked
              readOnly
            /> */}
             <i className="fa fa-book" style={{color : "#ff9400"}}/>
            <label className="form-check-label" htmlFor="Body Language">
              Body Language
            </label>
          </div>
          <div className="form-check">
            {/* <input
              className="form-check-input"
              type="checkbox"
              value="English Speaking"
              id="English_Speaking"
              checked
              readOnly
            /> */}
             <i className="fa fa-book" style={{color : "#ff9400"}}/>
            <label className="form-check-label" htmlFor="English Speaking">
              English Speaking
            </label>
          </div>
          <div className="form-check">
            {/* <input
              className="form-check-input"
              type="checkbox"
              value="Productivity & Time Management"
              id="Productivity_Time_Management"
              checked
              readOnly
            /> */}
            <i className="fa fa-book" style={{color : "#ff9400"}}/>
            <label
              className="form-check-label"
              htmlFor="Productivity & Time Management"
            >
              Productivity & Time Management
            </label>
          </div>
        </div>
      </div>
      <div className="commBtnWrap">
        <button onClick={nextStep}>Pre Order Now</button>
      </div>
    </div>
  );
};

const UserDetailsStep = ({ prevStep, states, fetchCitiesByState, cities }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
    affiliateCode: "",
    country: "India",
    state: "",
    city: "",
    paymentMethod: "UPI",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    if (!formData.mobile) newErrors.mobile = "Mobile number is required";
    else if (!/^\d{10}$/.test(formData.mobile))
      newErrors.mobile = "Mobile number is invalid";
    if (!formData.address) newErrors.address = "Address is required";
    if (!formData.state) newErrors.state = "State is required";
    if (!formData.city) newErrors.city = "City is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "state") {
      fetchCitiesByState(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Submit the form
      console.log("Form submitted", formData);
    }
  };

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
            className="oldArrow newArrow"
          >
            <path
              d="M1 7C0.447715 7 3.30352e-08 7.44772 0 8C-3.30352e-08 8.55228 0.447715 9 1 9L1 7ZM20.7071 8.70711C21.0976 8.31658 21.0976 7.68342 20.7071 7.29289L14.3431 0.928933C13.9526 0.538409 13.3195 0.538409 12.9289 0.928933C12.5384 1.31946 12.5384 1.95262 12.9289 2.34315L18.5858 8L12.9289 13.6569C12.5384 14.0474 12.5384 14.6805 12.9289 15.0711C13.3195 15.4616 13.9526 15.4616 14.3431 15.0711L20.7071 8.70711ZM1 9L20 9L20 7L1 7L1 9Z"
              fill="#838383"
            />
          </svg>
        </span>
        Back
      </button>

      <form onSubmit={handleSubmit} className="commonFormWrap">
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className={`form-control ${errors.name ? "is-invalid" : ""}`}
          />
          {errors.name && <div className="invalid-feedback">{errors.name}</div>}
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
          />
          {errors.email && (
            <div className="invalid-feedback">{errors.email}</div>
          )}
        </div>
        <div className="mb-3">
          <label className="form-label">Mobile Number</label>
          <input
            type="text"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            placeholder="Mobile Number"
            className={`form-control ${errors.mobile ? "is-invalid" : ""}`}
          />
          {errors.mobile && (
            <div className="invalid-feedback">{errors.mobile}</div>
          )}
        </div>
        <div className="mb-3">
          <label className="form-label">Address</label>
          <textarea
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Address"
            className={`form-control ${errors.address ? "is-invalid" : ""}`}
          />
          {errors.address && (
            <div className="invalid-feedback">{errors.address}</div>
          )}
        </div>
        <div className="mb-3">
          <label className="form-label">Affiliate Code</label>
          <input
            type="text"
            id="affiliateCode"
            name="affiliateCode"
            value={formData.affiliateCode}
            onChange={handleChange}
            placeholder="Affiliate Code (optional)"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Country</label>
          <input
            type="text"
            className="form-control"
            name="country"
            value={formData.country}
            readOnly
          />
        </div>
        <div className="mb-3">
          <label className="form-label">State</label>
          <select
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
            className={`form-select ${errors.state ? "is-invalid" : ""}`}
          >
            <option value="">Select State</option>
            {states.map((state, index) => (
              <option key={index} value={state.state_name}>
                {state.state_name}
              </option>
            ))}
          </select>
          {errors.state && (
            <div className="invalid-feedback">{errors.state}</div>
          )}
        </div>
        <div className="mb-3">
          <label className="form-label">City</label>
          <select
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className={`form-select ${errors.city ? "is-invalid" : ""}`}
          >
            <option value="">Select City</option>
            {cities.map((city, index) => (
              <option key={index} value={city.city_name}>
                {city.city_name}
              </option>
            ))}
          </select>
          {errors.city && <div className="invalid-feedback">{errors.city}</div>}
        </div>
        <div className="mb-3">
          <label className="form-label">Payment Method</label>
          <input
            type="text"
            className="form-control"
            name="paymentMethod"
            value="UPI"
            readOnly
          />
        </div>
        <div className="commBtnWrap">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default MultiStepForm;
