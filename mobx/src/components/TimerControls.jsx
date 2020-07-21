import React from "react";
import { observer } from "mobx-react";

import store from "../store";
import { TIMER } from "../constants";

const TimerControls = () =>
  store.mode === TIMER && (
    <div className="flex pt-2">
      <div className="w-1/4 p-1">
        <input
          onChange={(evt) => (store.minutes = parseInt(evt.target.value) || 0)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={store.minutes.toString()}
        />
      </div>
      <div className="w-1/4 p-1">
        <input
          onChange={(evt) => (store.seconds = parseInt(evt.target.value) || 0)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={store.seconds.toString()}
        />
      </div>
      <div className="w-1/4 p-1">
        <button
          className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded"
          onClick={() => store.start()}
        >
          {store.running ? "Restart" : "Start"}
        </button>
      </div>
    </div>
  );

export default observer(TimerControls);
