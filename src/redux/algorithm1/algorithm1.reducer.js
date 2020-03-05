import Algorithm1ActionTypes from "./algorithm1.types";
import Stopwatch from "../../components/stopwatch";

const INITIAL_STATE = {
  algorithm: "",
  stopwatch: new Stopwatch(),
  steps: 0,
  winTime: false,
  winSteps: false,
  dropdown: false,
  formattedTime: "00:000"
};
const algorithm1Reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Algorithm1ActionTypes.SET_ALGORITHM1:
      return {
        ...state,
        algorithm: action.payload
      };

    case Algorithm1ActionTypes.TOGGLE_DROPDOWN1:
      return {
        ...state,
        dropdown: !state.dropdown
      };

    case Algorithm1ActionTypes.UPDATE_FORMATTED_TIME1:
      return {
        ...state,
        formattedTime: action.payload
      };

    case Algorithm1ActionTypes.RESET_TIMER1:
      return { ...state, stopwatch: new Stopwatch() };

    case Algorithm1ActionTypes.INCREMENT_STEPS1:
      return { ...state, steps: state.steps + 1 };

    case Algorithm1ActionTypes.RESET_STEPS1:
      return { ...state, steps: 0 };

    default:
      return state;
  }
};

export default algorithm1Reducer;
