import React, { useState } from "react";

const useInput = (result: any) => {
  const [value, setValue] = useState(result);
  const onChange = (e: any) => {
    setValue(e);
  };
  return { value, onChange };
};

export default useInput;
