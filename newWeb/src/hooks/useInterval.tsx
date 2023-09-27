import React, { useEffect, useRef } from "react";

const useInterval = (callback: () => void, delay: number | undefined) => {
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    let timer = setInterval(savedCallback.current, delay);
    return () => clearInterval(timer);
  }, [delay]);
};

export default useInterval;
