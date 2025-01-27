export interface PageRoute {
  name: string;
  url: string;
}

export const links: [`/${string}`, string][] = [
  ["/demographics", "Demographics"],
  ["/academics", "Academics"],
  ["/cs-experience", "CS Experience"],
  ["/coop", "Co-op"],
  ["/lifestyle-and-interests", "Lifestyle and Interests"],
  ["/intimacy-and-drugs", "Intimacy and Drugs"],
  ["/postgrad-and-full-time", "Postgrad + Full-Time"],
  ["/mental-health", "Mental Health"],
  ["/personal", "Personal"],
  ["/contributors", "Contributors"],
];
