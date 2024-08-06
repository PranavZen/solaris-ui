// src/ProductDetails.js
import React, { useState } from "react";
import ProductInfo from "./ProductInfo";
import ProductImageSlider from "./ProductImageSlider";
import ColorSelector from "./ColorSelector";
import BundleSelector from "./BundleSelector";
import OrderSummary from "./OrderSummary";

const ProductDetails = () => {
  const initialImages = {
    gray: [
      "https://via.placeholder.com/600x600/808080/FFFFFF?text=Gray+1",
      "https://via.placeholder.com/600x600/808080/FFFFFF?text=Gray+2",
      "https://via.placeholder.com/600x600/808080/FFFFFF?text=Gray+3",
      "https://via.placeholder.com/600x600/808080/FFFFFF?text=Gray+4",
      "https://via.placeholder.com/600x600/808080/FFFFFF?text=Gray+5",
    ],
    black: [
      "https://via.placeholder.com/600x600/000000/FFFFFF?text=Black+1",
      "https://via.placeholder.com/600x600/000000/FFFFFF?text=Black+2",
      "https://via.placeholder.com/600x600/000000/FFFFFF?text=Black+3",
      "https://via.placeholder.com/600x600/000000/FFFFFF?text=Black+4",
      "https://via.placeholder.com/600x600/000000/FFFFFF?text=Black+5",
    ],
  };

  const staticCourseDetails = [
    {
      id: 1,
      courseName: "Digital Marketing Pro",
      subCourses: [
        { id: 101, name: "SEO Basics", iconColor: "#ff3f3f" },
        { id: 102, name: "Content Marketing", iconColor: "#ff9f3f" },
        { id: 103, name: "Social Media Strategy", iconColor: "#5eff3f" },
        { id: 104, name: "PPC Advertising", iconColor: "#3f8aff" },
        { id: 105, name: "Email Marketing", iconColor: "#973fff" },
        { id: 106, name: "Analytics & Reporting", iconColor: "#ff3fa0" },
        { id: 107, name: "Affiliate Marketing", iconColor: "#ba9913" },
      ],
    },
    {
      id: 2,
      courseName: "Tech Security & Development",
      subCourses: [
        { id: 201, name: "Network Security", iconColor: "#ff3f3f" },
        { id: 202, name: "Web Security", iconColor: "#ff9f3f" },
        { id: 203, name: "Application Security", iconColor: "#5eff3f" },
        { id: 204, name: "Cryptography", iconColor: "#3f8aff" },
        { id: 205, name: "Ethical Hacking", iconColor: "#973fff" },
        { id: 206, name: "Incident Response", iconColor: "#ff3fa0" },
        { id: 207, name: "Security Policies", iconColor: "#ba9913" },
      ],
    },
    {
      id: 3,
      courseName: "Advanced Tech Mastery",
      subCourses: [
        { id: 301, name: "Cloud Computing", iconColor: "#ba9913" },
        { id: 302, name: "AI Fundamentals", iconColor: "#ff3fa0" },
        { id: 303, name: "Machine Learning", iconColor: "#973fff" },
        { id: 304, name: "Big Data", iconColor: "#ff9f3f" },
        { id: 305, name: "Blockchain Technology", iconColor: "#ff3f3f" },
        { id: 306, name: "Internet of Things (IoT)", iconColor: "#ff9f3f" },
        { id: 307, name: "Robotic Process Automation", iconColor: "red" },
      ],
    },
    {
      id: 4,
      courseName: "Full-Stack Development Proficiency",
      subCourses: [
        { id: 401, name: "Frontend Development", iconColor: "#ff3f3f" },
        { id: 402, name: "Backend Development", iconColor: "#ff9f3f" },
        { id: 403, name: "Database Management", iconColor: "#5eff3f" },
        { id: 404, name: "API Development", iconColor: "#3f8aff" },
        { id: 405, name: "DevOps", iconColor: "#973fff" },
        { id: 406, name: "Version Control", iconColor: "#ff3fa0" },
        { id: 407, name: "Testing & Debugging", iconColor: "#ba9913" },
      ],
    },
    {
      id: 5,
      courseName: "Creative Suite Mastery",
      subCourses: [
        { id: 501, name: "Photoshop Basics", iconColor: "#ba9913" },
        { id: 502, name: "Illustrator Techniques", iconColor: "#ff3fa0" },
        { id: 503, name: "InDesign Layouts", iconColor: "#973fff" },
        { id: 504, name: "Premiere Pro Editing", iconColor: "#3f8aff" },
        { id: 505, name: "After Effects Animations", iconColor: "#5eff3f" },
        { id: 506, name: "XD Prototyping", iconColor: "#ff9f3f" },
        { id: 507, name: "Creative Cloud Integration", iconColor: "#ff3f3f" },
      ],
    },
  ];

  const [selectedColor, setSelectedColor] = useState("gray");
  const [selectedBundle, setSelectedBundle] = useState(null);
  const [quantity] = useState(1);
  const [currentPrice, setCurrentPrice] = useState("27,000");
  const [discountedPrice, setDiscountedPrice] = useState("34,000");

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  const handleBundleSelect = (bundleId) => {
    const selected = staticCourseDetails.find(
      (bundle) => bundle.id === parseInt(bundleId, 10)
    );
    setSelectedBundle(selected);
  };

  const handlePreOrder = () => {
    alert("Pre Order Successful");
  };

  return (
    <div className="product-details">
      <div className="col-lg-6 col-md-6 col-12">
        <ProductImageSlider images={initialImages[selectedColor] || []} />
      </div>
      <div className="col-lg-6 col-md-6 col-12">
        <div className="padLeft">
          <ProductInfo
            name="Product Name"
            description="Set your imagination free with the powerful Solarise book 14X OLED! Whether it's for creative work or gaming fun."
            currentPrice={currentPrice}
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
              <label htmlFor="quatnity">Quantity</label>
              <div className="qttBox">{quantity}</div>
            </div>
          </div>
          <div className="produtcMainPrices">
            <h2>
              ₹{currentPrice} <del>₹{discountedPrice}</del>
            </h2>
          </div>
          <div className="defaultBox">
            <label htmlFor="defaultCourse">Additional Free Bonus Course</label>
            <p>
              With every purchase of a bundle courses, you'll also receive five
              bonus courses at no extra cost.
            </p>
            <ul>
              <li>Public Speaking</li>
              <li>Body Language</li>
              <li>Content Marketing</li>
              <li>Productivity & Time Management</li>
              <li>Communication Bundle</li>
              <li>Endlish Speaking</li>
            </ul>
          </div>
        </div>
      </div>
      <OrderSummary
        name="Product Name"
        images={
          initialImages[selectedColor] ? [initialImages[selectedColor][0]] : []
        }
        selectedColor={selectedColor}
        selectedBundle={
          selectedBundle ? selectedBundle.courseName : "Not Selected"
        }
        currentPrice={currentPrice}
        onPreOrder={handlePreOrder}
      />
    </div>
  );
};

export default ProductDetails;
