import GridActionTypes from "./grid.types";

export const settingStartNode = () => ({
  type: GridActionTypes.SETTING_START_NODE
});

export const doneSettingStartNode = () => ({
  type: GridActionTypes.DONE_SETTING_START_NODE
});

export const setStartNode = (row, col) => ({
  type: GridActionTypes.SET_START_NODE,
  payload: [row, col]
});

export const settingFinishNode = () => ({
  type: GridActionTypes.SETTING_FINISH_NODE
});

export const doneSettingFinishNode = () => ({
  type: GridActionTypes.DONE_SETTING_FINISH_NODE
});

export const setFinishNode = (row, col) => ({
  type: GridActionTypes.SET_FINISH_NODE,
  payload: [row, col]
});

export const addWall = (row, col) => ({
  type: GridActionTypes.ADD_WALL,
  payload: [row, col]
});

export const settingWalls = () => ({
  type: GridActionTypes.SETTING_WALLS
});

export const doneSettingWalls = () => ({
  type: GridActionTypes.DONE_SETTING_WALLS
});

export const resetGrid = () => ({
  type: GridActionTypes.RESET_GRID
});

export const resetDistancesAndIsVisited = () => ({
  type: GridActionTypes.RESET_DISTANCES_AND_ISVISITED
});
