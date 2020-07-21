import React from "react";
import { useMachine } from "@xstate/react";

import Display from "./components/Display";
import Mode from "./components/Mode";
import StopWatchControls from "./components/StopWatchControls";
import TimerControls from "./components/TimerControls";

import { TIMER, STOPWATCH } from "./constants";

import clockMachine from "./machine";

function App() {
  const [current, send] = useMachine(clockMachine);

  return (
    <div
      style={{
        margin: "auto",
      }}
      className="max-w-sm p-4"
    >
      <Display currentTime={current.context.currentTime} />
      <Mode
        mode={current.matches(TIMER) ? TIMER : STOPWATCH}
        onChange={(mode) => send(mode)}
      />
      {current.matches(STOPWATCH) && (
        <StopWatchControls
          running={current.context.running}
          onToggle={() => send("TOGGLE")}
          onReset={() => send("RESET")}
        />
      )}
      {current.matches(TIMER) && (
        <TimerControls
          running={current.context.running}
          minutes={current.context.minutes}
          seconds={current.context.seconds}
          onChangeMinutes={(value) => send({ type: "minutes.UPDATE", value })}
          onChangeSeconds={(value) => send({ type: "seconds.UPDATE", value })}
          onStart={() => send("START")}
        />
      )}
    </div>
  );
}

export default App;
