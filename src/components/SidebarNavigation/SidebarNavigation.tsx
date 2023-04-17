import { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import { nav } from "../../data/navData";

import "./sidebarNavigation.scss";

const Sidebar: FC = () => {
  const location = useLocation();

  return (
    <ul>
      {nav.map((navItem, index) => {
        const isActive = location.pathname === navItem.path ? "isActive" : "";
        const Icon = navItem.icon;
        return (
          <li key={index} className={isActive}>
            <Link to={navItem.path}>
              <Icon />
              <span>{navItem.label}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Sidebar;
