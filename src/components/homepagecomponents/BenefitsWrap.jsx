import React from "react";
import CommonButton from "../commonButton/CommonButton";
import { benImg1, benImg2, benImg3 } from "..";

function BenefitsWrap() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-5">
          <div className="sectionTitleBox">
            <h2>
              The benefits of Solaris laptops include enhanced productivity
            </h2>
            <p>
              Set your imagination free with the powerful Solaris book 14X OLED!
              Whether it’s for creative work or gaming fun
            </p>
          </div>
          <CommonButton buttonText="Pre Order Now" />
        </div>
        <div className="col-md-7">
          <div className="leftImgWrap">
            <img src={benImg1} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-md-7">
          <div className="leftBtmImg">
            <img src={benImg2} alt="" className="img-fluid" />
          </div>
        </div>
        <div className="col-md-5">
          <div className="leftBtmImg">
            <img src={benImg3} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BenefitsWrap;
