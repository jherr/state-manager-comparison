import React from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { modeAtom, currentTimeAtom, runningAtom } from "../atoms";
import { STOPWATCH } from "../constants";

const StopWatchControls = () => {
  const mode = useRecoilValue(modeAtom);
  const [currentTime, currentTimeSet] = useRecoilState(currentTimeAtom);
  const [running, runningSet] = useRecoilState(runningAtom);

  return (
    mode === STOPWATCH && (
      <div className="inline-flex pt-2">
        <div className="flex-1 p-1">
          <button
            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded"
            onClick={() => runningSet(!running)}
          >
            {running ? "Stop" : "Start"}
          </button>
        </div>
        <div className="flex-1 p-1">
          <button
            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded"
            onClick={() => currentTimeSet(0)}
          >
            Reset
          </button>
        </div>
      </div>
    )
  );
};

export default StopWatchControls;
