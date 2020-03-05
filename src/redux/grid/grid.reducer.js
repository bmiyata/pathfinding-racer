import GridActionTypes from "./grid.types";

import {
  addWall,
  createEmptyGrid,
  resetDistancesAndIsVisited
} from "./grid.util";

const INITIAL_STATE = {
  grid: createEmptyGrid(),
  startNodeCoords: [0, 0],
  finishNodeCoords: [2, 14],
  isSettingStartNode: false,
  isSettingFinishNode: false,
  isSettingWalls: false
};

const GridReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GridActionTypes.RESET_GRID:
      return { ...state, grid: createEmptyGrid() };
    case GridActionTypes.RESET_DISTANCES_AND_ISVISITED:
      return { ...state, grid: resetDistancesAndIsVisited(state.grid) };

    case GridActionTypes.SETTING_START_NODE:
      return { ...state, isSettingStartNode: true };
    case GridActionTypes.DONE_SETTING_START_NODE:
      return { ...state, isSettingStartNode: false };
    case GridActionTypes.SET_START_NODE:
      return { ...state, startNodeCoords: action.payload };

    case GridActionTypes.SETTING_FINISH_NODE:
      return { ...state, isSettingFinishNode: true };
    case GridActionTypes.DONE_SETTING_FINISH_NODE:
      return { ...state, isSettingFinishNode: false };
    case GridActionTypes.SET_FINISH_NODE:
      return { ...state, finishNodeCoords: action.payload };

    case GridActionTypes.SETTING_WALLS:
      return { ...state, isSettingWalls: true };
    case GridActionTypes.DONE_SETTING_WALLS:
      return { ...state, isSettingWalls: false };
    case GridActionTypes.ADD_WALL:
      return {
        ...state,
        grid: addWall(state.grid, action.payload[0], action.payload[1])
      };

    default:
      return state;
  }
};

export default GridReducer;
