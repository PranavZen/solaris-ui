import React from "react";
import ProgressSlider from "../progressiveSlider/ProgressSlider";

function PurePerformance() {
  const slides = [
    { content: "Slide 1", color: "red" },
    { content: "Slide 2", color: "blue" },
    { content: "Slide 3", color: "green" },
  ];
  return (
    <div>
      <ProgressSlider slides={slides} />
    </div>
  );
}

export default PurePerformance;
