import axios from "axios";
import React, { FC, useEffect, useMemo, useState, useRef } from "react";
import { ILatestArticle, INewsSidebar } from "../../interfaces/interfaces";
import "./latestNewsSidebar.scss";

const LatestNewsSidebar: FC<INewsSidebar> = ({ display }) => {
  const [articles, setArticles] = useState<ILatestArticle[]>([]);
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const url = "https://api.nytimes.com/svc/news/v3/content/all/all.json";
  const params = {
    "api-key": "yydgYlRc10qZcufLPl7P49UUAvFGvZUz",
    limit: 10,
  };

  const latestNewsHolderRef = useRef<HTMLDivElement>(null);

  const fetchData = async (newOffset?: number) => {
    const response = await axios.get(url, {
      params: {
        ...params,
        offset: newOffset !== undefined ? newOffset : offset,
      },
    });
    response.data.results.length === 0
      ? setHasMore(false)
      : (() => {
          setArticles((prevArticles) => [
            ...prevArticles,
            ...response.data.results,
          ]);
          setOffset(newOffset !== undefined ? newOffset : offset + 10);
        })();
  };

  const getAllData = async () => {
    setArticles([]);
    const response = await axios.get(url, {
      params: { "api-key": "yydgYlRc10qZcufLPl7P49UUAvFGvZUz" },
    });
    response.data.results.length === 0
      ? setHasMore(false)
      : setArticles((prevArticles) => [
          ...prevArticles,
          ...response.data.results,
        ]);
  };

  useEffect(() => {
    fetchData(0);
  }, []);

  useEffect(() => {
    latestNewsHolderRef.current
      ? latestNewsHolderRef.current.addEventListener("scroll", handleScroll)
      : null;

    return () => {
      latestNewsHolderRef.current
        ? latestNewsHolderRef.current.removeEventListener(
            "scroll",
            handleScroll
          )
        : null;
    };
  }, [offset]);

  const handleScroll = () => {
    latestNewsHolderRef.current &&
    latestNewsHolderRef.current.scrollTop +
      latestNewsHolderRef.current.clientHeight >=
      latestNewsHolderRef.current.scrollHeight - 2
      ? fetchData(offset + 10)
      : null;
  };

  return (
    <div className="newsItem sideContent" style={{ display }}>
      <h3>Latest News</h3>
      <div className="latestNewsHolder" ref={latestNewsHolderRef}>
        <ul>
          {articles.map((item: any, index: number) => {
            return (
              <li key={index}>
                <span>{item.section}</span>
                <a href="">
                  <h2>{item.title}</h2>
                </a>
              </li>
            );
          })}
        </ul>

        {!hasMore && (
          <p style={{ textAlign: "center", fontWeight: "bold" }}>
            End of content
          </p>
        )}
      </div>
      <div onClick={getAllData} className="seeAll">
        See all news <span>&gt;</span>
      </div>
    </div>
  );
};

export default React.memo(LatestNewsSidebar);
