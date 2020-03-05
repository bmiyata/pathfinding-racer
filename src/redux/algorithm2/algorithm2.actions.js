import Algorithm2ActionTypes from "./algorithm2.types";

export const toggleDropdown = () => ({
  type: Algorithm2ActionTypes.TOGGLE_DROPDOWN2
});

export const setAlgorithm = algorithm => ({
  type: Algorithm2ActionTypes.SET_ALGORITHM2,
  payload: algorithm
});

export const updateFormattedTime2 = time => ({
  type: Algorithm2ActionTypes.UPDATE_FORMATTED_TIME2,
  payload: time
});

export const resetTimer2 = () => ({
  type: Algorithm2ActionTypes.RESET_TIMER2
});

export const incrementSteps2 = () => ({
  type: Algorithm2ActionTypes.INCREMENT_STEPS2
});

export const resetSteps2 = () => ({
  type: Algorithm2ActionTypes.RESET_STEPS2
});
