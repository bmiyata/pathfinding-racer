import React from "react";

import SelectAlgorithm1 from "./SelectAlgorithm1";
import SelectAlgorithm2 from "./SelectAlgorithm2";

const Step1 = () => {
  return (
    <div className="steps__step--1">
      <h3 className="heading-secondary">STEP 1: Choose Two Algorithms</h3>
      <SelectAlgorithm1 />
      <SelectAlgorithm2 />
    </div>
  );
};

export default Step1;
