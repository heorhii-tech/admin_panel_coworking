import { sideBarMenu } from "@src/shared/constants";
import { SideBarItem } from "./SideBarItem";

export const SideBarMenu = () => {
  return (
    <nav className="sidebar-menu">
      <ul>
        {sideBarMenu.map((item) => {
          return <SideBarItem item={item} />;
        })}
      </ul>
    </nav>
  );
};
