import React, { Fragment } from "react";
import sprite from "../../sprite.svg";

import { connect } from "react-redux";
import {
  toggleDropdown,
  setAlgorithm
} from "../../redux/algorithm2/algorithm2.actions";

const SelectAlgorithm2 = ({
  algorithm,
  dropdown,
  toggleDropdown,
  setAlgorithm
}) => {
  return (
    <Fragment>
      <div className="flex mt">
        <svg className="logo--two">
          <use href={sprite + "#two"}></use>
        </svg>
        <div
          onClick={() => toggleDropdown()}
          className="dropdown btn btn--choose"
        >
          <span>{algorithm === "" ? "Select Algorithm" : algorithm}</span>
          <span>
            <svg className="logo--down">
              <use href={sprite + "#down-arrow"}></use>
            </svg>
          </span>
          {dropdown && (
            <Fragment>
              <div className="dropdown__algorithms">
                <div
                  onClick={() => setAlgorithm("Dijkstra's Algorithm")}
                  className="dropdown__algorithm"
                >
                  Dijkstra's Algorithm
                </div>
                <div
                  onClick={() => setAlgorithm("A*")}
                  className="dropdown__algorithm"
                >
                  A*
                </div>
                <div
                  onClick={() => setAlgorithm("Breadth-First-Search")}
                  className="dropdown__algorithm"
                >
                  Breadth-First-Search
                </div>
                <div
                  onClick={() => setAlgorithm("Depth-First-Search")}
                  className="dropdown__algorithm"
                >
                  Depth-First-Search
                </div>
                <div
                  onClick={() => setAlgorithm("Best-First-Search")}
                  className="dropdown__algorithm"
                >
                  Best-First-Search
                </div>
              </div>
            </Fragment>
          )}
        </div>
      </div>
    </Fragment>
  );
};

const mapDispatchToProps = dispatch => ({
  toggleDropdown: () => dispatch(toggleDropdown()),
  setAlgorithm: algorithm => dispatch(setAlgorithm(algorithm))
});

const mapStateToProps = state => ({
  dropdown: state.algorithm2.dropdown,
  algorithm: state.algorithm2.algorithm
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectAlgorithm2);
