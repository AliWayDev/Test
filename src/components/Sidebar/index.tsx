import React from "react";
import { Mobile } from "./mobile";
import { useUiStore } from "../../store";
import { Dekstop } from "./dekstop";

export const Sidebar = () => {
  const { sidebar } = useUiStore();

  return (
    <>
      <Mobile state={sidebar} />
      <Dekstop />
    </>
  );
};
