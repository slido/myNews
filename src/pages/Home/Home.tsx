import { FC, useEffect, useState } from "react";
import LatestNewsSidebar from "../../components/LatestNewsSidebar/LatestNewsSidebar";
import ListNewsOnHome from "../../components/ListNewsOnHome/ListNewsOnHome";
import { IHomeProps } from "../../interfaces/interfaces";
import "./home.scss";

const Home: FC<IHomeProps> = ({ cath }) => {
  const [showFeatured, setShowFeatured] = useState(true);
  const [showLatest, setShowLatest] = useState(false);
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    windowWidth > 766
      ? (() => {
          setShowFeatured(true);
          setShowLatest(true);
        })()
      : (() => {
          toggleFeatured();
        })();
  }, []);

  const toggleFeatured = () => {
    setShowFeatured(true);
    setShowLatest(false);
  };

  const toggleLatest = () => {
    setShowFeatured(false);
    setShowLatest(true);
  };

  return (
    <>
      <h1>News</h1>
      <div className="sectionToggleBtns">
        <button
          className={showFeatured ? "active" : ""}
          onClick={toggleFeatured}
        >
          Featured
        </button>
        <button className={showLatest ? "active" : ""} onClick={toggleLatest}>
          Latest
        </button>
      </div>
      <div className="newsWrapper">
        <ListNewsOnHome cath={cath} display={showFeatured ? "block" : "none"} />
        <LatestNewsSidebar display={showLatest ? "block" : "none"} />
      </div>
    </>
  );
};

export default Home;
