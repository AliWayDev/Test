import React from "react";
import MyImage from "../../../components/Image";
import { PermissionItem } from "../components/PermissionItem";
import { ActionIcon } from "../../../assets/icons";
import { useToggle } from "../../../hooks/useToggle";
import { DropDownMenu } from "../components/DropDownMenu";

interface IProps {
  id: string;
  src: string;
  fullName: string;
  email: string;
  permissions: string[];
}

export const ListItem = ({ src, id, email, fullName, permissions }: IProps) => {
  const { value, toggleValue } = useToggle(false);
  return (
    <div className="relative">
      <DropDownMenu setActive={toggleValue} email={email} id={id} active={value} />
      <div className="flex w-full items-start gap-4">
        <div className="w-[65px]">
          <MyImage
            image={{
              alt: fullName,
              src: src,
              className: "w-[55px] h-[55px] rounded-full object-cover",
            }}
          />
        </div>

        <div className="w-full">
          <div className="flex justify-between items-start w-full relative z-0">
            <div>
              <p className="text-text-color font-medium text-sm">{fullName}</p>
              <p className="text-gray">{email}</p>
            </div>
            <button onClick={() => toggleValue()} className="py-2">
              <ActionIcon />
            </button>
          </div>
          <div className="flex w-full flex-wrap gap-1 mt-1">
            {permissions.map((i) => (
              <PermissionItem text={i} key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
