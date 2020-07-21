import { useRef, useEffect } from "react";

export function useInterval(callback, delay = 1000) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const id = setInterval(function () {
      savedCallback.current();
    }, delay);
    return () => clearInterval(id);
  }, [delay]);
}
