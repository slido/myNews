import { FC, useState } from "react";
import "./topSnackBar.scss";

const TopSnackBar: FC = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    document.body.classList.add("animate");
  };

  return (
    <div className="snackbarContainer">
      <div className="inner">
        <span className="mmyh">Make MyNews your homepage</span>
        <span className="edd">
          Every day discover what's trending on the internet!
        </span>
        <div className="rHolder">
          <button className="getBtn">GET</button>

          <button className="nt" onClick={() => handleClick()}>
            No, thanks
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopSnackBar;
