import React from "react";
import { SideBarMenuItem } from "@src/shared/types";
interface SideBarItemProps {
  item: SideBarMenuItem;
}
export const SideBarItem: React.FC<SideBarItemProps> = ({ item }) => {
  return (
    <ul>
      <li>{item.link}</li>
    </ul>
  );
};
