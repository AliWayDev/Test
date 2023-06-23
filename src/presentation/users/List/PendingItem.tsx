import React from "react";
import { PermissionItem } from "../components/PermissionItem";
import { ActionIcon, UserIcon } from "../../../assets/icons";
import { useToggle } from "../../../hooks/useToggle";
import { DropDownMenu } from "../components/DropDownMenu";

interface IProps {
  email: string;
  permissions: string[];
  id: string;
}

export const PendingItem = ({ id, email, permissions }: IProps) => {
  const { value, toggleValue } = useToggle(false);
  return (
    <div className="relative">
      <DropDownMenu
        setActive={toggleValue}
        email={email}
        isPending={true}
        id={id}
        active={value}
      />
      <div className="flex w-full items-start gap-4">
        <div className="w-[65px] h-[55px] rounded-full bg-secondary flex justify-center items-center">
          <UserIcon />
        </div>

        <div className="w-full">
          <div className="flex justify-between items-start w-full relative z-0">
            <div className="flex md:gap-2 md:flex-row flex-col md:items-center">
              <p className="text-text-color font-medium text-sm">
                Пользователь
              </p>
              <p className="font-medium text-sm text-gray">Не авторизирован</p>
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
