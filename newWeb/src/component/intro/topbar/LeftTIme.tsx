import useInput from "@src/hooks/useInput";
import useInterval from "@src/hooks/useInterval";
import dayjs from "dayjs";
import React, { useState } from "react";

const LeftTIme = () => {
  const timeInput = useInput(dayjs().format("HH:mm A"));
  useInterval(() => {
    timeInput.onChange(dayjs().format("HH:mm A"));
  }, 1000);
  return <span>{timeInput.value}</span>;
};

export default LeftTIme;
