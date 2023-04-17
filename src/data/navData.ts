import { BusinessIcon } from "../components/svgs/businessIcon";
import IconHeart from "../components/svgs/favoritedIcon";
import { GeneralIcon } from "../components/svgs/generalIcon";
import { HealthIcon } from "../components/svgs/healthIcon";
import { HomeIcon } from "../components/svgs/homeIcon";
import { ScienceIcon } from "../components/svgs/scienceIcon";
import { SportsIcon } from "../components/svgs/sportsIcon";
import { TechnologyIcon } from "../components/svgs/technologyIcon";

export const nav = [
  {
    path: "/",
    icon: HomeIcon,
    label: "Home",
  },
  {
    path: "/general",
    icon: GeneralIcon,
    label: "General",
  },
  {
    path: "/business",
    icon: BusinessIcon,
    label: "Business",
  },
  {
    path: "/health",
    icon: HealthIcon,
    label: "Health",
  },
  {
    path: "/science",
    icon: ScienceIcon,
    label: "Science",
  },
  {
    path: "/sports",
    icon: SportsIcon,
    label: "Sports",
  },
  {
    path: "/technology",
    icon: TechnologyIcon,
    label: "Technology",
  },
  {
    path: "/favorites",
    icon: IconHeart,
    label: "Favorites",
  },
];
