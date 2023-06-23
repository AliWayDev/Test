export interface IUserItem {
  id: string;
  name: string;
  email: string;
  permissions: string[];
  image: string;
}

export interface IPendingUserItem {
  id: string;
  email: string;
  permissions: string[];
}