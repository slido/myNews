import { FC, useState } from "react";
import Hamburger from "../Hamburger/Hamburger";
import MobileMenu from "../MobileMenu/MobileMenu";
import Search from "../Search/Search";
import "./header.scss";

const Header: FC = () => {
  const [isMobMenuActive, setIsMobMenuActive] = useState(false);
  const toggleMenu = () => {
    setIsMobMenuActive(!isMobMenuActive);
  };
  return (
    <header>
      <div className="logo">
        <a href="/">
          My
          <span className="clr">News</span>
        </a>
      </div>
      <Hamburger isActive={isMobMenuActive} toggleMenu={toggleMenu} />
      <MobileMenu
        isMobMenuActive={isMobMenuActive}
        setIsMobMenuActive={setIsMobMenuActive}
      />
      <Search />
    </header>
  );
};

export default Header;
