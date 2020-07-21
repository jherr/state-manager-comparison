import { decorate, observable, autorun } from "mobx";
import { TIMER } from "./constants";

// configure({ enforceActions: "always" })

class TimerStore {
  currentTime = 0;
  minutes = 8;
  seconds = 0;
  running = false;
  mode = TIMER;

  setMode(mode) {
    this.mode = mode;
    this.currentTime = 0;
    this.running = false;
  }

  start() {
    this.running = true;
    this.currentTime = this.minutes * 60 + this.seconds;
  }

  increment() {
    if (this.running) {
      if (this.mode === TIMER) {
        this.currentTime = this.currentTime > 0 ? this.currentTime - 1 : 0;
      } else {
        this.currentTime += 1;
      }
    }
  }
}
decorate(TimerStore, {
  currentTime: observable,
  minutes: observable,
  seconds: observable,
  running: observable,
  mode: observable,
});

const store = new TimerStore();

autorun(() => {
  window.setInterval(() => {
    store.increment();
  }, 1000);
});

export default store;
