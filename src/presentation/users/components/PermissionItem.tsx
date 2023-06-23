import React from "react";

interface IProps {
  text: string;
}

export const PermissionItem = ({ text }: IProps) => {
  return <div className="px-[6px] py-[5px]  shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] rounded-[10px] text-xs border-gray border-[1px] text-gray">{text}</div>;
};
