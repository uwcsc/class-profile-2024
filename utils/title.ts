import { Metadata } from "next";
import { basePath } from "./getBasePath.js";

const description =
  "The 2024 CS Class Profile is a showcase of data relevant to CS, CFM, and CS/BBA students completing their undergrad in 2024. Explore the graduating class of 2024 with data gathered and presented by the University of Waterloo Computer Science Club!";

export function title(title: string): Metadata {
  return {
    title: `${title} — 2024 CS Class Profile`,
    description,
    keywords: ["uw", "csc", "csclub", "uwaterloo", "uwcsc", "university", "waterloo", "computer", "science", "club", "class", "profile", "2024"],
    openGraph: {
      type: "website",
      title: "2024 CS Class Profile",
      description,
      url: "https://csclub.uwaterloo.ca/classprofile/2024/",
    },
    twitter: { card: "summary_large_image", images: new URL("https://i.imgur.com/XUS0S9A.png") },
    icons: [basePath + "/images/favicon.ico"],
  };
}
