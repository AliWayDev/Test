import { useState } from "react";

interface IReturn {
  value: boolean;
  toggleValue: (value?: boolean) => void;
}

export const useToggle = (defaultValue: boolean): IReturn => {
  const [value, setvalue] = useState(defaultValue);

  function toggleValue(value?: boolean) {
    setvalue((c) => (value ? value : !c));
  }

  return { value, toggleValue };
};
