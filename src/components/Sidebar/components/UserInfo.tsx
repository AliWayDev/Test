import React from "react";
import MyImage from "../../Image";

export const UserInfo = () => {
  return (
    <div className="flex w-full px-4 gap-3 items-center">
      <MyImage
        image={{
          src: "https://assets1.cbsnewsstatic.com/hub/i/2018/11/06/0c1af1b8-155a-458e-b105-78f1e7344bf4/2018-11-06t054310z-1334124005-rc1be15a8050-rtrmadp-3-people-sexiest-man.jpg",
          alt: "man",
          className: "object-cover rounded-full h-[55px] w-[55px]",
        }}
      />
      <div>
        <p className="font-medium text-text-color">Артем Иванов</p>
        <p className="text-text-secodary text-sm">Собственник</p>
      </div>
    </div>
  );
};
