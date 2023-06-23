import React from "react";
import {
  BannerIcon,
  BlogIcon,
  ChatIcon,
  CheckListIcon,
  DiagramIcon,
  LogOutIcon,
  LogoIcon,
  MoneyIcon,
  ProfileIcon,
  TeamIcon,
} from "../../../assets/icons";
import { LinkItem } from "./LinkItem";

interface IProps {
  dekstop?: boolean;
}

const list = [
  {
    icon: <DiagramIcon />,
    text: "Аналитика",
  },
  {
    icon: <ProfileIcon />,
    text: "Профиль",
  },
  {
    icon: <CheckListIcon />,
    text: "Модерация",
  },
  {
    icon: <ChatIcon />,
    text: "Чаты",
  },
  {
    icon: <BannerIcon />,
    text: "Баннеры",
  },
  {
    icon: <TeamIcon />,
    text: "Команда",
  },
  {
    icon: <BlogIcon />,
    text: "Блог",
  },
  {
    icon: <MoneyIcon />,
    text: "Курс валют",
  },
];

export const Links = ({ dekstop }: IProps) => {
  return (
    <div className="flex flex-col gap-7 px-5 mt-7">
      {dekstop && <LogoIcon />}
      {list.map((i) => (
        <LinkItem dekstop={dekstop} key={i.text} icon={i.icon} text={i.text} />
      ))}
      <LinkItem
        dekstop={dekstop}
        icon={<LogOutIcon />}
        text="Выйти"
        color="text-red-400"
      />
    </div>
  );
};
