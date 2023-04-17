export interface IProps {
  cath: string;
  display: string;
}

export interface IHomeProps {
  cath: string;
}

export interface IArticle {
  uri: string;
  title: string;
  multimedia: { url: string }[];
  byline: string;
  section: string;
}

export interface ILatestArticle {
  section: string;
  title: string;
}

export interface IMenuProps {
  isMobMenuActive: boolean;
  setIsMobMenuActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface INewsSidebar {
  display: string;
}
