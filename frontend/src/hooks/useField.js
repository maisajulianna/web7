import { useState } from "react";

function useField(type) {
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return { type, value, onChange };
};

export default useField;