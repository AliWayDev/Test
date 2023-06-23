import React from "react";
import { ListItem } from "./ListItem";
import { IPendingUserItem, IUserItem } from "../../../interfaces/user";
import { PendingItem } from "./PendingItem";

interface IProps {
  users: IUserItem[];
  pendinguser: IPendingUserItem[];
}

export const List = ({ users, pendinguser }: IProps) => {
  return (
    <div className="flex flex-col gap-[20px] mt-6 py-3">
      {pendinguser.map((i) => (
        <PendingItem
          id={i.id}
          key={i.id}
          email={i.email}
          permissions={i.permissions}
        />
      ))}
      {users.map((i) => (
        <ListItem
          id={i.id}
          key={i.id}
          email={i.email}
          fullName={i.name}
          permissions={i.permissions}
          src={i.image}
        />
      ))}
    </div>
  );
};
