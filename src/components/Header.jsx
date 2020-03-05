import React from "react";
import sprite from "../sprite.svg";

import { connect } from "react-redux";
import { resetGrid } from "../redux/grid/grid.actions";
import { resetGridClasses } from "../redux/grid/grid.util";
import {
  resetTimer1,
  resetSteps1
} from "../redux/algorithm1/algorithm1.actions";
import {
  resetTimer2,
  resetSteps2
} from "../redux/algorithm2/algorithm2.actions";

const Header = ({
  resetGrid,
  resetTimer1,
  resetTimer2,
  resetSteps1,
  resetSteps2
}) => {
  const handleOnClick = () => {
    // This function resets the classes for the grids, resets the timers, resets the steps

    console.log("inside onClick to reset grid");
    resetTimer1();
    resetSteps1();
    resetTimer2();
    resetSteps2();
    resetGridClasses();
    resetGrid();
  };

  return (
    <header className="header">
      <div className="header__title">
        <svg className="logo">
          <use href={sprite + "#path"}></use>
        </svg>
        <h1 className="heading-primary">Pathfinding Racer</h1>
      </div>
      <div onClick={handleOnClick} className="heading-secondary btn btn--reset">
        Reset Board
      </div>
    </header>
  );
};

const mapDispatchToProps = dispatch => ({
  resetGrid: () => dispatch(resetGrid()),
  resetTimer1: () => dispatch(resetTimer1()),
  resetTimer2: () => dispatch(resetTimer2()),
  resetSteps1: () => dispatch(resetSteps1()),
  resetSteps2: () => dispatch(resetSteps2())
});

export default connect(null, mapDispatchToProps)(Header);
