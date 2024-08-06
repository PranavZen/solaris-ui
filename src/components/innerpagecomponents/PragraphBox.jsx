import React from "react";

function PragraphBox({ para, contentText }) {
  return (
    <div className="paraBox">
      <h4 className="contentText">{contentText}</h4>
      <p dangerouslySetInnerHTML={{ __html: para }}></p>
    </div>
  );
}

export default PragraphBox;
