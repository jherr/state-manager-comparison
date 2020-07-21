import React from "react";
import clsx from "clsx";

import { TIMER, STOPWATCH } from "../constants";

const Mode = ({ mode, onChange }) => (
  <div className="inline-flex pt-4">
    <button
      className={clsx("font-bold py-2 px-4 rounded-l", {
        "bg-blue-500 hover:bg-blue-400 text-white": mode === TIMER,
        "bg-gray-300 hover:bg-gray-400 text-gray-800": mode !== TIMER,
      })}
      onClick={() => onChange(TIMER)}
    >
      Timer
    </button>
    <button
      className={clsx("font-bold py-2 px-4 rounded-r", {
        "bg-blue-500 hover:bg-blue-400 text-white": mode === STOPWATCH,
        "bg-gray-300 hover:bg-gray-400 text-gray-800": mode !== STOPWATCH,
      })}
      onClick={() => onChange(STOPWATCH)}
    >
      Stopwatch
    </button>
  </div>
);

export default Mode;
