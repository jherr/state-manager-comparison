import React from "react";
import clsx from "clsx";
import { observer } from "mobx-react";

import { TIMER, STOPWATCH } from "../constants";
import store from "../store";

const Mode = () => (
  <div className="inline-flex pt-4">
    <button
      className={clsx("font-bold py-2 px-4 rounded-l", {
        "bg-blue-500 hover:bg-blue-400 text-white": store.mode === TIMER,
        "bg-gray-300 hover:bg-gray-400 text-gray-800": store.mode !== TIMER,
      })}
      onClick={() => store.setMode(TIMER)}
    >
      Timer
    </button>
    <button
      className={clsx("font-bold py-2 px-4 rounded-r", {
        "bg-blue-500 hover:bg-blue-400 text-white": store.mode === STOPWATCH,
        "bg-gray-300 hover:bg-gray-400 text-gray-800": store.mode !== STOPWATCH,
      })}
      onClick={() => store.setMode(STOPWATCH)}
    >
      Stopwatch
    </button>
  </div>
);

export default observer(Mode);
