import React from "react";
import { Button } from "./Button";

interface IProps {
  info: string;
  onClose: () => void;
}

export const InfoModal = ({ info, onClose }: IProps) => {
  return (
    <div className="absolute top-0 left-0 w-full h-screen bg-[rgba(0,0,0,0.3)] flex justify-center items-center">
      <div className="bg-white shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] p-6 rounded-lg">
        <div className="px-5">
          <p className="text-xl text-center max-w-[340px] text-text-color font-medium py-4">
            {info}
          </p>
        </div>
        <Button onClick={onClose} className="py-3 min-w-[340px] w-full">
          Закрыть
        </Button>
      </div>
    </div>
  );
};
