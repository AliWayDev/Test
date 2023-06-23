import React from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "../../components/Sidebar";
import { BurgerIcon } from "../../assets/icons";
import { useUiStore } from "../../store";
import { InfoModal } from "../../components/InfoModal";

export const Layout = () => {
  const { toggleSidebar, infomodal, clearInfo } = useUiStore();

  return (
    <div className="relative w-full h-screen overflow-hidden md:bg-secondary md:flex">
      <div className="pt-4 flex gap-3 items-center pl-4 pb-4 md:hidden">
        <button onClick={() => toggleSidebar()}>
          <BurgerIcon />
        </button>
        <p className="text-2xl font-medium text-text-color">Команда</p>
      </div>
      <Sidebar />
      <div className="md:flex md:justify-center md:items-center w-full">
        <Outlet />
      </div>
      {infomodal && <InfoModal info={infomodal} onClose={clearInfo} />}
    </div>
  );
};
