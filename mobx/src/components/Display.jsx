import React from "react";
import { observer } from "mobx-react";

import store from "../store";

const Display = () => {
  const hours = Math.floor(store.currentTime / 3600);
  const minutes = Math.floor((store.currentTime - hours * 3600) / 60);
  const seconds = store.currentTime - (hours * 3600 + minutes * 60);

  return (
    <>
      <div className="flex">
        <div className="flex-1 text-center">Hours</div>
        <div className="flex-1 text-center">Minutes</div>
        <div className="flex-1 text-center">Seconds</div>
      </div>
      <div className="flex">
        <div className="flex-1 text-center text-3xl font-black">{hours}</div>
        <div className="flex-1 text-center text-3xl font-black">{minutes}</div>
        <div className="flex-1 text-center text-3xl font-black">{seconds}</div>
      </div>
    </>
  );
};

export default observer(Display);
