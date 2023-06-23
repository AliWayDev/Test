import React from "react";

export const Container = ({
  children,
  className,
}: {
  children: React.ReactChild[] | React.ReactChild;
  className?: string;
}) => {
  return <div className={"px-4 mx-auto " + className}>{children}</div>;
};
