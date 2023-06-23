import React from "react";
import { UserInfo } from "../components/UserInfo";
import { Links } from "../components/Links";
import { BurgerIcon } from "../../../assets/icons";
import { useUiStore } from "../../../store";

interface IProps {
  state: boolean;
}

export const Mobile = ({ state }: IProps) => {
  const { toggleSidebar } = useUiStore();

  return (
    <div
      className={`absolute top-0 md:hidden left-0 z-10 w-full h-screen bg-white transition-all duration-300 ${
        state ? "translate-x-0" : "-translate-x-[200%]"
      }`}
    >
      <div className="pt-5">
        <button className="pl-4 pb-6" onClick={() => toggleSidebar()}>
          <BurgerIcon />
        </button>
        <UserInfo />
      </div>
      <Links />
    </div>
  );
};
