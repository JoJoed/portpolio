import React, { useEffect, useState } from "react";
import useInterval from "../../hooks/useInterval";
import { Font } from "../util/GlobalStyle";

const NumberInterval = ({
  delay = 800,
  maxValue = 0,
  frontText = "",
  appendText = "",
  reset,
}) => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    setValue(0);
  }, [reset]);
  useInterval(
    () => {
      if (value < maxValue) {
        setValue(value + 1);
      }
    },
    value < maxValue ? delay / maxValue : null
  );
  return <Font color="white">{`${frontText} ${value}${appendText}`}</Font>;
};

export default NumberInterval;
