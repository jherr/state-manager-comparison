import React from "react";

import Display from "./components/Display";
import Mode from "./components/Mode";
import StopWatchControls from "./components/StopWatchControls";
import TimerControls from "./components/TimerControls";

function App() {
  return (
    <div
      style={{
        margin: "auto",
      }}
      className="max-w-sm p-4"
    >
      <Display />
      <Mode />
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
