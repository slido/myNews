import { FC } from "react";
import "./hamburger.scss";
interface HamburgerProps {
  isActive: boolean;
  toggleMenu: () => void;
}

const Hamburger: FC<HamburgerProps> = ({ isActive, toggleMenu }) => {
  return (
    <div
      className={`hamburger ${isActive ? "active" : ""}`}
      onClick={toggleMenu}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default Hamburger;
