import React, { useReducer } from "react";

import Display from "./components/Display";
import Mode from "./components/Mode";
import StopWatchControls from "./components/StopWatchControls";
import TimerControls from "./components/TimerControls";

import { TIMER, STOPWATCH } from "./constants";

import { useInterval } from "./useInterval";
import {
  INCREMENT,
  UPDATE_MINUTES,
  UPDATE_SECONDS,
  START,
  SET_MODE,
  TOGGLE,
  RESET,
  initialState,
  reducer,
} from "./store";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  useInterval(() => {
    dispatch({
      type: INCREMENT,
    });
  }, 1000);

  return (
    <div
      style={{
        margin: "auto",
      }}
      className="max-w-sm p-4"
    >
      <Display currentTime={state.currentTime} />
      <Mode
        mode={state.mode}
        onChange={(mode) =>
          dispatch({
            type: SET_MODE,
            payload: mode,
          })
        }
      />
      {state.mode === STOPWATCH && (
        <StopWatchControls
          running={state.running}
          onToggle={() =>
            dispatch({
              type: TOGGLE,
            })
          }
          onReset={() =>
            dispatch({
              type: RESET,
            })
          }
        />
      )}
      {state.mode === TIMER && (
        <TimerControls
          running={state.running}
          minutes={state.minutes}
          seconds={state.seconds}
          onChangeMinutes={(value) => {
            dispatch({
              type: UPDATE_MINUTES,
              payload: value,
            });
          }}
          onChangeSeconds={(value) =>
            dispatch({
              type: UPDATE_SECONDS,
              payload: value,
            })
          }
          onStart={() =>
            dispatch({
              type: START,
            })
          }
        />
      )}
    </div>
  );
}

export default App;
