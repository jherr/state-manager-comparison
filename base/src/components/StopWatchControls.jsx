import React from "react";

const StopWatchControls = ({ running, onToggle, onReset }) => (
  <div className="inline-flex pt-2">
    <div className="flex-1 p-1">
      <button
        className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded"
        onClick={onToggle}
      >
        {running ? "Stop" : "Start"}
      </button>
    </div>
    <div className="flex-1 p-1">
      <button
        className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded"
        onClick={onReset}
      >
        Reset
      </button>
    </div>
  </div>
);

export default StopWatchControls;
