import Algorithm1ActionTypes from "./algorithm1.types";

export const toggleDropdown = () => ({
  type: Algorithm1ActionTypes.TOGGLE_DROPDOWN1
});

export const setAlgorithm = algorithm => ({
  type: Algorithm1ActionTypes.SET_ALGORITHM1,
  payload: algorithm
});

export const updateFormattedTime1 = time => ({
  type: Algorithm1ActionTypes.UPDATE_FORMATTED_TIME1,
  payload: time
});

export const resetTimer1 = () => ({
  type: Algorithm1ActionTypes.RESET_TIMER1
});

export const incrementSteps1 = () => ({
  type: Algorithm1ActionTypes.INCREMENT_STEPS1
});

export const resetSteps1 = () => ({
  type: Algorithm1ActionTypes.RESET_STEPS1
});
