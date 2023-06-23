import { create } from "zustand";
import { createSelectors } from "./generators/createSelector";
import { IPendingUserItem, IUserItem } from "../interfaces/user";

import userJson from "../data/users.json";
interface State {
  users: IUserItem[];
  pending: IPendingUserItem[];
}

interface Actions {
  getOne: (id: string) => void;
  deleteOne: (id: string) => void;
  add: (body: IUserItem) => void;
  update: (body: any) => void;
  addPending: (body: IPendingUserItem) => void;
  deleteOnePending: (id: string) => void;
}

const useUsersStore = create<State & Actions>((set, get) => ({
  users: userJson,
  pending: [], // there we can set default value from API -----
  addPending: (body: IPendingUserItem) => {
    const { pending } = get();

    set({ pending: [...pending, body] });
  },
  getOne: (id: string): IUserItem | null => {
    const { users } = get();

    const user = users.find((i: IUserItem) => {
      return i.id === id;
    });

    return user || null;
  },
  deleteOne: (id: string): IUserItem[] => {
    const { users } = get();

    const newUsers = users.filter((i: IUserItem) => {
      return i.id !== id;
    });

    set({ users: newUsers });
    return newUsers;
  },
  deleteOnePending: (id: string): IPendingUserItem[] => {
    const { pending } = get();

    const newUsers = pending.filter((i: IPendingUserItem) => {
      return i.id !== id;
    });

    set({ pending: newUsers });
    return newUsers;
  },
  add: (body: IUserItem): void => {
    const { users } = get();

    set({ users: [...users, body] });
  },
  update: (body) => {
    const { users } = get();

    const user = users.find((i: IUserItem) => {
      return i.id === body.id;
    });

    const newUser: any = {
      ...user,
      name: body.name || user?.name,
      email: body.email || user?.email,
      id: body.id || user?.id,
      permissions: body.permissions || user?.permissions,
      image: body.image || user?.image,
    };

    const newUsers = users.filter((i: IUserItem) => {
      return i.id !== body.id;
    });

    set({ users: [...newUsers, newUser] });
  },
}));

export default createSelectors(useUsersStore);
