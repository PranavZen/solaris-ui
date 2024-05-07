import React from "react";
import { grid1, grid2, grid3, grid4, grid5 } from "..";

function SolarisGrid() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 col-12">
          <div className="gridWrap">
            <h2>Solaris book 14X OLED</h2>
            <p>
              Set your imagination free with the powerful Solaris book 14X OLED!
              Whether it's for creative work or gaming fun
            </p>
          </div>
          <div className="bookGrid">
            <div className="grid1 grid">
              <img src={grid1} alt="solaris book" className="img-fluid"/>
            </div>
            <div className="grid2 grid">
              <img src={grid2} alt="solaris book" className="img-fluid"/>
            </div>
            <div className="grid3 grid">
              <img src={grid3} alt="solaris book" className="img-fluid"/>
            </div>
            <div className="grid4 grid">
              <img src={grid4} alt="solaris book" className="img-fluid"/>
            </div>
            <div className="grid5 grid">
              <img src={grid5} alt="solaris book" className="img-fluid"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SolarisGrid;
