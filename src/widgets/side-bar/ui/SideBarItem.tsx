import React from "react";
import { SideBarMenuItem } from "@src/shared/types";
import { NavLink } from "react-router-dom";
interface SideBarItemProps {
  item: SideBarMenuItem;
}
export const SideBarItem: React.FC<SideBarItemProps> = ({ item }) => {
  return (
   
      <li>
        <NavLink to={item.link}>{item.title}</NavLink>
      </li>
   
  );
};
