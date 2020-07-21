import { Machine, assign } from "xstate";

const machine = Machine(
  {
    id: "clockMachine",
    initial: "TIMER",
    context: {
      minutes: 8,
      seconds: 0,
      currentTime: 0,
      running: false,
    },
    states: {
      TIMER: {
        invoke: {
          src: () => (cb) => {
            const interval = setInterval(() => {
              cb("TICK");
            }, 1000);
            return () => {
              clearInterval(interval);
            };
          },
        },
        exit: ["stop"],
        on: {
          "minutes.UPDATE": {
            actions: assign({
              minutes: (_, event) => event.value,
            }),
          },
          "seconds.UPDATE": {
            actions: assign({
              seconds: (_, event) => event.value,
            }),
          },
          START: {
            actions: assign({
              currentTime: (context) => context.minutes * 60 + context.seconds,
              running: () => true,
            }),
          },
          TICK: {
            actions: assign({
              currentTime: (context) =>
                context.running
                  ? context.currentTime > 0
                    ? context.currentTime - 1
                    : 0
                  : context.currentTime,
            }),
          },
          STOPWATCH: "STOPWATCH",
        },
      },
      STOPWATCH: {
        invoke: {
          src: () => (cb) => {
            const interval = setInterval(() => {
              cb("TICK");
            }, 1000);
            return () => {
              clearInterval(interval);
            };
          },
        },
        exit: ["stop"],
        on: {
          TOGGLE: {
            actions: assign({
              running: (context) => !context.running,
            }),
          },
          RESET: {
            actions: assign({
              currentTime: () => 0,
            }),
          },
          TICK: {
            actions: assign({
              currentTime: (context) =>
                context.running ? context.currentTime + 1 : context.currentTime,
            }),
          },
          TIMER: "TIMER",
        },
      },
    },
  },
  {
    actions: {
      stop: (context) => {
        context.currentTime = 0;
        context.running = false;
      },
    },
  }
);

export default machine;
