import React from "react";

function PageTitle({ title, gredTitle, mainPara }) {
  return (
    <>
      <h1 className="mainText">
        <span className="gradientText">{gredTitle}</span> {title}
      </h1>
      <p className="mainPara" dangerouslySetInnerHTML={{ __html: mainPara }}></p>
    </>
  );
}

export default PageTitle;
