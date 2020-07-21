import React from "react";

const TimerControls = ({
  running,
  minutes,
  seconds,
  onStart,
  onChangeMinutes,
  onChangeSeconds,
}) => (
  <div className="flex pt-2">
    <div className="w-1/4 p-1">
      <input
        onChange={(evt) => onChangeMinutes(parseInt(evt.target.value) || 0)}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        value={minutes.toString()}
      />
    </div>
    <div className="w-1/4 p-1">
      <input
        onChange={(evt) => onChangeSeconds(parseInt(evt.target.value) || 0)}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        value={seconds.toString()}
      />
    </div>
    <div className="w-1/4 p-1">
      <button
        className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded"
        onClick={onStart}
      >
        {running ? "Restart" : "Start"}
      </button>
    </div>
  </div>
);

export default TimerControls;
