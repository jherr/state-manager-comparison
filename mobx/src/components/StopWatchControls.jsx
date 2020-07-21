import React from "react";
import { observer } from "mobx-react";

import store from "../store";
import { STOPWATCH } from "../constants";

const StopWatchControls = () =>
  store.mode === STOPWATCH && (
    <div className="inline-flex pt-2">
      <div className="flex-1 p-1">
        <button
          className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded"
          onClick={() => (store.running = !store.running)}
        >
          {store.running ? "Stop" : "Start"}
        </button>
      </div>
      <div className="flex-1 p-1">
        <button
          className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded"
          onClick={() => (store.currentTime = 0)}
        >
          Reset
        </button>
      </div>
    </div>
  );

export default observer(StopWatchControls);
