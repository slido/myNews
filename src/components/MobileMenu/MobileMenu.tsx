import { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import { nav } from "../../data/navData";
import { IMenuProps } from "../../interfaces/interfaces";
import Search from "../Search/Search";
import "./mobileMenu.scss";

const MobileMenu: FC<IMenuProps> = ({
  isMobMenuActive,
  setIsMobMenuActive,
}) => {
  const location = useLocation();

  return (
    <nav className={`menu ${isMobMenuActive ? "active" : ""}`}>
      <div className="logoMobile">
        <a href="/">
          My
          <span className="clr">News</span>
        </a>
      </div>
      <div className="searchWrapper">
        <Search />
      </div>
      <div className="hambNavigation">
        <ul>
          {nav.map((navItem, index) => {
            const isActive =
              location.pathname === navItem.path ? "isActive" : "";
            const Icon = navItem.icon;
            return (
              <li
                key={index}
                className={isActive}
                onClick={() => setIsMobMenuActive(false)}
              >
                <Link to={navItem.path}>
                  <Icon />
                  <span>{navItem.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
        {/*         
        <ul>
          <li
            onClick={() => setIsMobMenuActive(false)}
            className={
              location.pathname === "/" || location.pathname === "/home"
                ? "isActive"
                : ""
            }
          >
            <Link to="/">
              <HomeIcon />
              <span>Home</span>
            </Link>
          </li>
          <li
            className={location.pathname === "/general" ? "isActive" : ""}
            onClick={() => setIsMobMenuActive(false)}
          >
            <Link to="/general">
              <GeneralIcon />
              <span>General</span>
            </Link>
          </li>
          <li
            className={location.pathname === "/business" ? "isActive" : ""}
            onClick={() => setIsMobMenuActive(false)}
          >
            <Link to="/business">
              <BusinessIcon />
              <span>Business</span>
            </Link>
          </li>
          <li
            className={location.pathname === "/health" ? "isActive" : ""}
            onClick={() => setIsMobMenuActive(false)}
          >
            <Link to="/health">
              <HealthIcon />
              <span>Health</span>
            </Link>
          </li>
          <li
            className={location.pathname === "/science" ? "isActive" : ""}
            onClick={() => setIsMobMenuActive(false)}
          >
            <Link to="/science">
              <ScienceIcon />
              <span>Science</span>
            </Link>
          </li>
          <li
            className={location.pathname === "/sports" ? "isActive" : ""}
            onClick={() => setIsMobMenuActive(false)}
          >
            <Link to="/sports">
              <SportsIcon />
              <span>Sports</span>
            </Link>
          </li>
          <li
            className={location.pathname === "/technology" ? "isActive" : ""}
            onClick={() => setIsMobMenuActive(false)}
          >
            <Link to="/technology">
              <TechnologyIcon />
              <span>Technology</span>
            </Link>
          </li>
          <li
            className={location.pathname === "/favorites" ? "isActive" : ""}
            onClick={() => setIsMobMenuActive(false)}
          >
            <Link to="/favorites">
              <TechnologyIcon />
              <span>Favorites</span>
            </Link>
          </li>
        </ul> */}
      </div>
    </nav>
  );
};

export default MobileMenu;
