import "./listNewsOnHome.scss";
import axios from "axios";
import { FC, ReactNode, useContext, useEffect, useState } from "react";
import {
  LazyLoadComponent,
  LazyLoadImage,
} from "react-lazy-load-image-component";
import { SearchContext } from "../../context/SearchContext";
import "react-lazy-load-image-component/src/effects/blur.css";
import { IArticle, IProps } from "../../interfaces/interfaces";
import IconBxsHeartCircle from "../svgs/IconBxsHeartCircle";

const ListNewsOnHome: FC<IProps> = ({ cath, display }) => {
  const { searchTerm } = useContext(SearchContext);
  const [articles, setArticles] = useState<IArticle[]>([]);
  const [dataError, setDataError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [favoritedArticles, setFavoritedArticles] = useState<IArticle[]>([]);
  const [isFavoriteLayout, setIsFavoriteLayout] = useState(false);
  const params = {
    "api-key": "yydgYlRc10qZcufLPl7P49UUAvFGvZUz",
  };

  useEffect(() => {
    (async () => {
      setLoading(true);
      setArticles([]);
      setDataError(false);
      setIsFavoriteLayout(cath === "favorites");

      cath === "favorites"
        ? (() => {
            const favoritedArticlesFromStorage =
              localStorage.getItem("favoritedArticles");
            favoritedArticlesFromStorage
              ? (() => {
                  const favArticles = JSON.parse(favoritedArticlesFromStorage);
                  setArticles([]);
                  setTimeout(() => {
                    setArticles(favArticles);
                  }, 0);
                })()
              : null;
          })()
        : (async () => {
            try {
              const url = `https://api.nytimes.com/svc/topstories/v2/${cath}.json`;
              const response = await axios.get(url, { params });
              const data = response.data.results.filter(
                (data: IArticle) =>
                  data.title && data.byline && data.multimedia.length > 0
              );
              setLoading(false);
              setArticles(data);
            } catch (error) {
              console.error(error);
              setDataError(true);
              setLoading(false);
            }
          })();
    })();
  }, [cath]);

  useEffect(() => {
    const favoritedArticlesFromStorage =
      localStorage.getItem("favoritedArticles");
    favoritedArticlesFromStorage
      ? setFavoritedArticles(JSON.parse(favoritedArticlesFromStorage))
      : null;
  }, []);

  const filteredArticles = articles.filter((article: IArticle) => {
    return article.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const randomIndex = Math.floor(Math.random() * filteredArticles.length);

  const isFavorited = (articleUri: string) => {
    return !!favoritedArticles.find(
      (favoritedItem) => favoritedItem.uri === articleUri
    );
  };

  const handleAddToFavorites = (
    uri: string,
    title: string,
    multimedia: { url: string }[],
    byline: string,
    section: string
  ) => {
    const index = favoritedArticles.findIndex((article) => article.uri === uri);
    const updatedFavoritedArticles =
      index === -1
        ? [...favoritedArticles, { uri, title, multimedia, byline, section }]
        : favoritedArticles.filter((article) => article.uri !== uri);

    setFavoritedArticles(updatedFavoritedArticles);
    isFavoriteLayout ? setArticles(updatedFavoritedArticles) : null;

    localStorage.setItem(
      "favoritedArticles",
      JSON.stringify(updatedFavoritedArticles)
    );
  };

  return (
    <>
      {loading && !isFavoriteLayout && (
        <p className="apiError">Loading articles...</p>
      )}

      {dataError && (
        <p className="apiError">Sorry, the API endpoint does not exist.</p>
      )}

      {isFavoriteLayout && filteredArticles.length === 0 && (
        <p className="apiError">No favorited articles...</p>
      )}
      {!dataError &&
        filteredArticles.length > 0 &&
        filteredArticles.map((item: IArticle, index: number) => {
          const classes = index === randomIndex ? "breaking" : "";

          return (
            <LazyLoadComponent key={index}>
              <div
                style={{ display }}
                title="Add me to Favorites!"
                className={`newsItem fadeInLeft ${classes}  ${
                  isFavorited(item.uri) ? "favorited" : ""
                }`}
                onClick={() => {
                  handleAddToFavorites(
                    item.uri,
                    item.title,
                    [{ url: item.multimedia[0].url }],
                    item.byline,
                    item.section
                  );
                }}
              >
                <IconBxsHeartCircle />
                {item.multimedia && (
                  <LazyLoadImage effect="blur" src={item.multimedia[0].url} />
                )}
                <div className="articleData">
                  <div className="redBrk">BREAKING</div>
                  <span>{item.section}</span>
                  <h2>{item.title}</h2>
                  <p>{item.byline}</p>
                </div>
              </div>
            </LazyLoadComponent>
          );
        })}
    </>
  );
};

export default ListNewsOnHome;
