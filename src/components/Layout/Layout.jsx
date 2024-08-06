import React from "react";
import "../Layout/layoutStyle.css";
function Layout({ children }) {
  return (
    <section id="innerPage">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-12">{children}</div>
        </div>
      </div>
    </section>
  );
}

export default Layout;
