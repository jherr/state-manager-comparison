import React from "react";
import clsx from "clsx";
import { useRecoilState } from "recoil";

import { modeAtom, runningAtom } from "../atoms";

import { TIMER, STOPWATCH } from "../constants";

const Mode = () => {
  const [mode, modeSet] = useRecoilState(modeAtom);
  const [running, runningSet] = useRecoilState(runningAtom);

  return (
    <div className="inline-flex pt-4">
      <button
        className={clsx("font-bold py-2 px-4 rounded-l", {
          "bg-blue-500 hover:bg-blue-400 text-white": mode === TIMER,
          "bg-gray-300 hover:bg-gray-400 text-gray-800": mode !== TIMER,
        })}
        onClick={() => {
          runningSet(false);
          modeSet(TIMER);
        }}
      >
        Timer
      </button>
      <button
        className={clsx("font-bold py-2 px-4 rounded-r", {
          "bg-blue-500 hover:bg-blue-400 text-white": mode === STOPWATCH,
          "bg-gray-300 hover:bg-gray-400 text-gray-800": mode !== STOPWATCH,
        })}
        onClick={() => {
          runningSet(false);
          modeSet(STOPWATCH);
        }}
      >
        Stopwatch
      </button>
    </div>
  );
};

export default Mode;
