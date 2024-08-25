export interface PageRoute {
  name: string;
  url: string;
}

type PageID =
  | "home"
  | "demographics"
  | "academics"
  | "computerScienceExperience"
  | "coop"
  | "lifestyleAndInterests"
  | "intimacyAndDrugs"
  | "postGrad"
  | "fullTime"
  | "mentalHealth"
  | "personal"
  | "contributors";

export type PageRoutes = { [key in PageID]: PageRoute };
export const pageRoutes: PageRoutes = {
  home: {
    name: "Home",
    url: "/",
  },
  demographics: {
    name: "Demographics",
    url: "/demographics",
  },
  academics: {
    name: "Academics",
    url: "/academics",
  },
  computerScienceExperience: {
    name: "CS Experience",
    url: "/computer-science-experience",
  },
  coop: {
    name: "Co-op",
    url: "/coop",
  },
  lifestyleAndInterests: {
    name: "Lifestyle and Interests",
    url: "/lifestyle-and-interests",
  },
  intimacyAndDrugs: {
    name: "Intimacy and Drugs",
    url: "/intimacy-and-drugs",
  },
  postGrad: {
    name: "Post-grad",
    url: "/post-grad",
  },
  fullTime: {
    name: "Full-time",
    url: "/full-time",
  },
  mentalHealth: {
    name: "Mental Health",
    url: "/mental-health",
  },
  personal: {
    name: "Personal",
    url: "/personal",
  },
  contributors: {
    name: "Contributors",
    url: "/contributors",
  },
};
