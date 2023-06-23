import React, { ReactChild } from "react";

interface IProps {
  children: ReactChild;
  className?: string;
  onClick?: () => void;
}

export const Button = ({
  children,
  className,
  onClick,
}: IProps): JSX.Element => {
  return (
    <button
      onClick={onClick}
      className={
        "w-full p-1 rounded-[10px] bg-primary text-white font-medium " +
        className
      }
    >
      {children}
    </button>
  );
};
