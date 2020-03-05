import React, { useState } from "react";
import { connect } from "react-redux";
import sprite from "../../sprite.svg";

import {
  settingStartNode,
  doneSettingStartNode,
  setStartNode,
  settingFinishNode,
  doneSettingFinishNode,
  setFinishNode,
  addWall,
  settingWalls,
  doneSettingWalls
} from "../../redux/grid/grid.actions";

const Node = ({
  id,
  grid,
  currentNode,
  settingStartNode,
  setStartNode,
  settingFinishNode,
  setFinishNode,
  settingWalls,
  addWall
}) => {
  const startNodeCoords = grid.startNodeCoords;
  const finishNodeCoords = grid.finishNodeCoords;

  let isStartNode = false;
  let isFinishNode = false;
  const [renderStartIcon, setRenderStartIcon] = useState(false);
  const [renderFinishIcon, setRenderFinishIcon] = useState(false);

  if (
    currentNode.row === startNodeCoords[0] &&
    currentNode.col === startNodeCoords[1]
  ) {
    isStartNode = true;
  }

  if (
    currentNode.row === finishNodeCoords[0] &&
    currentNode.col === finishNodeCoords[1]
  ) {
    isFinishNode = true;
  }

  const handleOnMouseDown = e => {
    e.preventDefault();
    if (isStartNode) {
      settingStartNode();
      setRenderStartIcon(true);
    } else if (isFinishNode) {
      settingFinishNode();
      setRenderFinishIcon(true);
    } else {
      // Change state to make editing walls true
      addWall(currentNode.row, currentNode.col);
      settingWalls();
    }
  };

  const handleOnMouseUp = () => {
    if (grid.isSettingStartNode && !isFinishNode && !currentNode.isWall) {
      // This is when the user is dragging the start flag, need to update start_coords state
      setStartNode(currentNode.row, currentNode.col);
    } else if (
      grid.isSettingFinishNode &&
      !isStartNode &&
      !currentNode.isWall
    ) {
      setFinishNode(currentNode.row, currentNode.col);
    }
    // doneSettingStartNode();
    // doneSettingFinishNode();
    // doneSettingWalls();
  };

  const handleOnMouseEnter = () => {
    if (grid.isSettingStartNode && !isFinishNode) {
      setRenderStartIcon(true);
    } else if (grid.isSettingFinishNode && !isStartNode) {
      setRenderFinishIcon(true);
    } else if (grid.isSettingWalls && !isStartNode && !isFinishNode) {
      addWall(currentNode.row, currentNode.col);
    }
  };

  const handleOnMouseLeave = () => {
    setRenderStartIcon(false);
    setRenderFinishIcon(false);
  };

  return (
    <div
      id={id}
      onMouseUp={handleOnMouseUp}
      onMouseDown={handleOnMouseDown}
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
      className={`node ${
        grid.grid[currentNode.row][currentNode.col].isWall ? "node--wall" : ""
      }`}
    >
      {((isStartNode && !grid.isSettingStartNode) ||
        (renderStartIcon && grid.isSettingStartNode)) && (
        <svg className="logo--start-node pointer">
          <use href={sprite + "#start"}></use>
        </svg>
      )}

      {((isFinishNode && !grid.isSettingFinishNode) ||
        (renderFinishIcon && grid.isSettingFinishNode)) && (
        <svg className="logo--start-node pointer">
          <use href={sprite + "#finish-line"}></use>
        </svg>
      )}
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  settingStartNode: () => dispatch(settingStartNode()),
  doneSettingStartNode: () => dispatch(doneSettingStartNode()),
  setStartNode: (row, col) => dispatch(setStartNode(row, col)),
  settingFinishNode: () => dispatch(settingFinishNode()),
  doneSettingFinishNode: () => dispatch(doneSettingFinishNode()),
  setFinishNode: (row, col) => dispatch(setFinishNode(row, col)),
  settingWalls: () => dispatch(settingWalls()),
  doneSettingWalls: () => dispatch(doneSettingWalls()),
  addWall: (row, col) => dispatch(addWall(row, col))
});

const mapStateToProps = state => ({
  grid: state.grid
});

export default connect(mapStateToProps, mapDispatchToProps)(Node);
