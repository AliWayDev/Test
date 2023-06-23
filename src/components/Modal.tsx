import React from "react";
import { CloseIcon } from "../assets/icons";
import { Button } from "./Button";

interface IProps {
  children: React.ReactChild | React.ReactChild[];
  onClose: () => void;
  onSubmit: () => void;
}

export const Modal = ({ children, onClose, onSubmit }: IProps) => {
  return (
    <div className="absolute top-0 left-0 w-full h-screen bg-[rgba(0,0,0,0.3)] flex justify-center items-center">
      <div className="relative bg-white shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] p-6 rounded-lg">
        <button onClick={onClose} className="absolute right-5 top-3">
          <CloseIcon />
        </button>
        <div className="px-5">{children}</div>
        <Button
          onClick={() => onSubmit()}
          className="py-3 min-w-[340px] w-full"
        >
          Отправить приглашение
        </Button>
      </div>
    </div>
  );
};
