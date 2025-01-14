import { About } from "@/components/About";
import { BodyLink } from "@/components/BlankLink";
import { Header } from "@/components/Header";
import { Panel } from "@/components/Panel";
import { basePath } from "@/utils/getBasePath";
import { title } from "@/utils/title";
import Image from "next/image";
import styles from "./page.module.css";

export const metadata = title("Home");

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center gap-[calc(65rem/16)] mb-[calc(65rem/16)]">
        <div className="mx-[10%] relative">
          <h1
            className="mt-[2rem] sm:mt-[4rem] md:mt-[6rem] lg:mt-[8rem] xl:mt-[12rem] text-[200%] sm:text-[250%] md:text-[320%] lg:text-[400%] xl:text-[600%] bg-[linear-gradient(285deg,#fff0bb_34.7%,#faa3bd_79.88%)] bg-clip-text"
            style={{ WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            UW Computer Science 2023 Class Profile
          </h1>
          <div className={styles.space}>
            <div className={styles.planet}>
              <Image className={styles.planetRing} src={basePath + "/images/planet-ring.svg"} alt="Planet Ring" width={300} height={300} />
              <Image className={styles.planetBody} src={basePath + "/images/planet-body.svg"} alt="Planet Body" width={200} height={200} />
            </div>
            <div className={styles.moon}>
              <Image src={basePath + "/images/moon.svg"} alt="Moon" width={64} height={64} />
            </div>
          </div>
        </div>
        <div className={styles.curves}>
          <Image
            className={styles.topCurve}
            src={basePath + "/images/main-page-wide-curve.svg"}
            alt="Wide Curve"
            width={1440}
            height={200}
            layout="responsive"
          />
          <Image
            className={styles.bottomCurve}
            src={basePath + "/images/main-page-narrow-curve.svg"}
            alt="Narrow Curve"
            width={1440}
            height={200}
            layout="responsive"
          />
        </div>
        <a href="#about" className={styles.downButton}>
          <svg viewBox="0 0 20 11">
            <path d="M 0 0 L 10 10 L 20 0" style={{ stroke: "white", strokeWidth: 1, fill: "none" }}></path>
          </svg>
        </a>
        <About />
        <Panel>
          <h1>Preface</h1>
          <p>
            The 2023 CS Class Profile consists of data relevant to CS, CFM, and CS/BBA students completing their undergrad in 2023. These were combined with the
            knowledge that students in these programs tend to have similar experiences, as they share many core courses. In the standard co-op offering, CS and
            CFM take 4 years and 2 terms to complete, while CS/BBA can take up to a full 5 years.
          </p>
          <p>
            The University of Waterloo&apos;s computer science programs are known to be prestigious and well-known in Canada as well as across the world. As of
            2022, it ties for first place in Maclean&apos;s university rankings, and 25th internationally as a subject by the QS World University rankings. For
            prospective students or anyone who is interested in learning more about what the students are like, this CS Class Profile will attempt to answer
            some of your questions, and you may even learn a thing or two you didn&apos;t expect!
          </p>
          <p>
            According to the{" "}
            <b>
              <BodyLink href="https://uwaterloo.ca/institutional-analysis-planning/university-data-and-statistics/student-data/degrees-granted-0">
                Institutional Analysis & Planning (IAP)
              </BodyLink>
            </b>
            , there were a 629 graduates from CS, CFM, and CS/BBA, leading to a overall survey turnout of 21%. By program, this is a 22% turnout from CS
            graduates, 12% turnout from CS/BBA graduates, and 32% turnout from CFM graduates.
          </p>
          <p>
            The survey questions were approved by the IAP, where all University of Waterloo stakeholders that are interested in conducting a non-academic
            research survey involving a large portion of the UW population are reviewed and approved. The entirety of the survey creation and data processing
            was done by the{" "}
            <b>
              <BodyLink href="https://csclub.uwaterloo.ca">UW Computer Science Club</BodyLink>
            </b>
            , so please check us out if you enjoy what you see!
          </p>
        </Panel>
      </div>
    </>
  );
}
