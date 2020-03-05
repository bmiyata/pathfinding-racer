import Algorithm2ActionTypes from "./algorithm2.types";
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
const algorithm2Reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Algorithm2ActionTypes.SET_ALGORITHM2:
      return {
        ...state,
        algorithm: action.payload
      };

    case Algorithm2ActionTypes.TOGGLE_DROPDOWN2:
      return {
        ...state,
        dropdown: !state.dropdown
      };

    case Algorithm2ActionTypes.UPDATE_FORMATTED_TIME2:
      return {
        ...state,
        formattedTime: action.payload
      };

    case Algorithm2ActionTypes.RESET_TIMER2:
      return { ...state, stopwatch: new Stopwatch() };

    case Algorithm2ActionTypes.INCREMENT_STEPS2:
      return { ...state, steps: state.steps + 1 };

    case Algorithm2ActionTypes.RESET_STEPS2:
      return { ...state, steps: 0 };

    default:
      return state;
  }
};

export default algorithm2Reducer;
