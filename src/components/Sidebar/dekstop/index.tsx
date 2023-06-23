import React from "react";
import { Links } from "../components/Links";

export const Dekstop = () => {
  return (
    <div className="hidden md:visible rounded-tr-[15px] bg-white h-screen md:flex flex-col gap-8">
        <Links dekstop={true} />
    </div>
  );
};
