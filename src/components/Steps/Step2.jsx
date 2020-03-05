import React from "react";
import sprite from "../../sprite.svg";

const Step2 = () => {
  return (
    <div className="steps__step--2">
      <h3 className="heading-secondary">
        STEP 2: Move the Start and Finish in the Grid
      </h3>
      <div className="logo--start-finish">
        <svg className="logo--start">
          <use href={sprite + "#start"}></use>
        </svg>
        <svg className="logo--finish">
          <use href={sprite + "#finish-line"}></use>
        </svg>
      </div>
    </div>
  );
};

export default Step2;
