import useRegister from "@src/pages/sign-in/hooks/register";
import React from "react";
import { sideBarMenu } from "@src/shared/constants";
import { SideBarItem } from "./SideBarItem";

export const SideBarMenu = () => {
  return (
    <nav className="sidebar-menu">
      {sideBarMenu.map((item) => {
        return <SideBarItem item={item} />;
      })}
    </nav>
  );
};
