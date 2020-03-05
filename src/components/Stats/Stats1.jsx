import React, { useEffect, useState } from "react";
import sprite from "../../sprite.svg";

import { connect } from "react-redux";

const Stats1 = ({ algorithm1, algorithm2 }) => {
  const [showTimeCup, setTimeCup] = useState(false);
  const [showStepCup, setStepCup] = useState(false);

  useEffect(() => {
    if (
      !algorithm1.stopwatch.isOn &&
      algorithm1.stopwatch.time > 0 &&
      algorithm1.stopwatch.time <= algorithm2.stopwatch.time
    ) {
      setTimeCup(true);
    } else {
      setTimeCup(false);
    }

    if (
      !algorithm1.stopwatch.isOn &&
      algorithm1.steps > 0 &&
      algorithm1.steps <= algorithm2.steps
    ) {
      setStepCup(true);
    } else {
      setStepCup(false);
    }
  });

  return (
    <div className="statistics__statistics--1">
      <div className="flex flex-33">
        <div className="flex">
          <svg className="logo--one mr">
            <use href={sprite + "#one"}></use>
          </svg>
          <h2 className="heading-statistic">{algorithm1.algorithm}</h2>
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
          {algorithm1.stopwatch.formattedTime}
        </h2>
      </div>
      <div className="flex">
        <svg className={`mr logo--cup ${showStepCup ? "show" : ""}`}>
          <use href={sprite + "#cup"}></use>
        </svg>
        <svg className="logo--footstep mr">
          <use href={sprite + "#footstep"}></use>
        </svg>
        <h2 className="heading-statistic w-2">{algorithm1.steps}</h2>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  algorithm1: state.algorithm1,
  algorithm2: state.algorithm2
});

export default connect(mapStateToProps)(Stats1);
