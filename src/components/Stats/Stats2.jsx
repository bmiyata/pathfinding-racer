import React, { useState, useEffect } from "react";
import sprite from "../../sprite.svg";

import { connect } from "react-redux";

const Stats2 = ({ algorithm1, algorithm2 }) => {
  const [showTimeCup, setTimeCup] = useState(false);
  const [showStepCup, setStepCup] = useState(false);

  useEffect(() => {
    if (
      !algorithm2.stopwatch.isOn &&
      algorithm2.stopwatch.time > 0 &&
      algorithm2.stopwatch.time <= algorithm1.stopwatch.time
    ) {
      setTimeCup(true);
    } else {
      setTimeCup(false);
    }

    if (
      !algorithm2.stopwatch.isOn &&
      algorithm2.steps > 0 &&
      algorithm2.steps <= algorithm1.steps
    ) {
      setStepCup(true);
    } else {
      setStepCup(false);
    }
  });

  return (
    <div className="statistics__statistics--2">
      <div className="flex flex-33">
        <div className="flex">
          <svg className="logo--two mr">
            <use href={sprite + "#two"}></use>
          </svg>
          <h2 className="heading-statistic">{algorithm2.algorithm}</h2>
        </div>
      </div>

      <div className="flex">
        <svg className={`mr logo--cup ${showTimeCup ? "show" : ""}`}>
          <use href={sprite + "#cup"}></use>
        </svg>

        <svg className="mr logo--stopwatch">
          <use href={sprite + "#stopwatch"}></use>
        </svg>
        <h2 className="heading-statistic w-2">
          {algorithm2.stopwatch.formattedTime}
        </h2>
      </div>
      <div className="flex">
        <svg className={`mr logo--cup ${showStepCup ? "show" : ""}`}>
          <use href={sprite + "#cup"}></use>
        </svg>

        <svg className="logo--footstep mr">
          <use href={sprite + "#footstep"}></use>
        </svg>
        <h2 className="heading-statistic w-2">{algorithm2.steps}</h2>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  algorithm2: state.algorithm2,
  algorithm1: state.algorithm1
});

export default connect(mapStateToProps)(Stats2);
