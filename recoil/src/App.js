import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";

import Display from "./components/Display";
import Mode from "./components/Mode";
import StopWatchControls from "./components/StopWatchControls";
import TimerControls from "./components/TimerControls";
import { useInterval } from "./useInterval";
import { currentTimeAtom, modeAtom, runningAtom } from "./atoms";
import { TIMER } from "./constants";

function App() {
  const [currentTime, currentTimeSet] = useRecoilState(currentTimeAtom);
  const mode = useRecoilValue(modeAtom);
  const running = useRecoilValue(runningAtom);
  useInterval(() => {
    if (running) {
      if (mode === TIMER) {
        currentTimeSet(currentTime > 0 ? currentTime - 1 : 0);
      } else {
        currentTimeSet(currentTime + 1);
      }
    }
  }, 1000);

  return (
    <div
      style={{
        margin: "auto",
      }}
      className="max-w-sm p-4"
    >
      <Display />
      <Mode />
      <StopWatchControls />
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
