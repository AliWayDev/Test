import React from "react";

interface IProps {
  icon: JSX.Element;
  text: string;
  color?: string;
  dekstop?: boolean;
}

export const LinkItem = ({ icon, text, color, dekstop }: IProps) => {
  return (
    <div
      className={`flex gap-5 font-[450] ${
        color ? color : "text-text-secodary"
      }`}
    >
      {icon ?? icon} {dekstop ? "" : text}
    </div>
  );
};
