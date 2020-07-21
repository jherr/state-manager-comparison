import { TIMER } from "./constants";

export const UPDATE_MINUTES = "updateMinutes";
export const UPDATE_SECONDS = "updateSeconds";
export const START = "start";
export const TOGGLE = "toggle";
export const RESET = "reset";
export const SET_MODE = "setMode";
export const INCREMENT = "increment";

export const initialState = {
  currentTime: 0,
  minutes: 8,
  seconds: 0,
  running: false,
  mode: TIMER,
};

export function reducer(state, action) {
  switch (action.type) {
    case UPDATE_MINUTES:
      return {
        ...state,
        minutes: action.payload,
      };
    case UPDATE_SECONDS:
      return {
        ...state,
        seconds: action.payload,
      };
    case START:
      return {
        ...state,
        currentTime: state.minutes * 60 + state.seconds,
        running: true,
      };
    case TOGGLE:
      return {
        ...state,
        running: !state.running,
      };
    case RESET:
      return {
        ...state,
        currentTime: 0,
      };
    case SET_MODE:
      return {
        ...state,
        running: false,
        currentTime: 0,
        mode: action.payload,
      };
    case INCREMENT:
      let currentTime = state.currentTime;
      if (state.running) {
        if (state.mode === TIMER) {
          currentTime = currentTime > 0 ? currentTime - 1 : 0;
        } else {
          currentTime += 1;
        }
      }
      return {
        ...state,
        currentTime,
      };
    default:
      throw new Error();
  }
}
