import useInput from "@src/hooks/useInput";
import useInterval from "@src/hooks/useInterval";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import "@src/assets/style.css";

const LeftTIme = () => {
  const timeInputFrist = useInput(dayjs().format("HH"));
  const timeInputEnd = useInput(dayjs().format("mm A"));
  useInterval(() => {
    timeInputFrist.onChange(dayjs().format("HH"));
    timeInputEnd.onChange(dayjs().format("mm A"));
  }, 1000);

  return (
    <div>
      <span>{timeInputFrist.value}</span>
      <span className="animate-time">&nbsp;:&nbsp;</span>
      <span>{timeInputEnd.value}</span>
    </div>
  );
};

export default LeftTIme;
