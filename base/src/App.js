import React from "react";

import Display from "./components/Display";
import Mode from "./components/Mode";
import StopWatchControls from "./components/StopWatchControls";
import TimerControls from "./components/TimerControls";

import { TIMER } from "./constants";

function App() {
  return (
    <div
      style={{
        margin: "auto",
      }}
      className="max-w-sm p-4"
    >
      <Display currentTime={0} />
      <Mode mode={TIMER} onChange={(mode) => {}} />
      <StopWatchControls
        running={false}
        onToggle={() => {}}
        onReset={() => {}}
      />
      <TimerControls
        running={false}
        minutes={0}
        seconds={0}
        onChangeMinutes={(value) => {}}
        onChangeSeconds={(value) => {}}
        onStart={() => {}}
      />
    </div>
  );
}

export default App;
