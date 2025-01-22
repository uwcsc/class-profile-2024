"use client";

import { Header } from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import WindowPanel from "@/components/WindowPanel";
import { links } from "@/data/routes";
import { basePath } from "@/utils/getBasePath";
import { useWindowDimensions } from "@/utils/getWindowDimensions";
import Link from "next/link";

export default function Home() {
  const pageWidth = useWindowDimensions().width;

  return (
    <>
      <Header />
      <div className="-mb-16">
        <PageHeader name="home-page" alt="Home Page" />
      </div>

      <div
        className="w-full grid justify-items-stretch gap-4"
        style={{
          backgroundImage: `url(${JSON.stringify(basePath + "/images/home-main.png")})`,
          backgroundSize: "100% auto",
          backgroundPosition: "center top",
        }}>
        <div className="flex flex-col items-center mt-16">
          <div className="w-[calc(min(90%,1600px))] grid md:grid-cols-4 gap-y-8 md:gap-y-16">
            <h1 className="glow">About the Programs</h1>
            <div className="col-span-3">
              <WindowPanel dark>
                <h3>Computer Science [CS]</h3>
                <p>
                  CS is commonly offered by the Faculty of Mathematics as a co-op program, with students usually attending 8 school and 6 co-op terms in their
                  degree. CS is more flexible than the other two programs with the ability to choose from a wider range and number of electives, take terms off,
                  and change academic schedules.
                </p>
                <h3>Computing and Financial Management [CFM]</h3>
                <p>
                  CFM combines core CS courses with electives from areas such as accounting, economics, and financial management. This is a joint offering by
                  the Faculty of Mathematics and the School of Accounting and Finance. The program is offered only as a co-op program with 8 school and 6 co-op
                  terms.
                </p>
                <h3>Computer Science/Business Administration [CS/BBA]</h3>
                <p>
                  CS/BBA is a joint program with the Wilfrid Laurier University. It is an exclusive offering that provides students experience in CS as well as
                  many areas of business. There are 10 school terms and either 4 or 5 co-op terms in the usual schedule, so it's a longer degree with more
                  academic terms than CS or CFM.
                </p>
              </WindowPanel>
            </div>
            <h1 className="glow">Preface</h1>
            <div className="col-span-3">
              <WindowPanel>
                <p>
                  The 2024 CS Class Profile consists of data relevant to CS, CFM, and CS/BBA students. These are combined as students in these programs tend to
                  have similar experiences with many required CS courses being shared. In the standard co-op offering, CS and CFM take 4 years and 2 semesters
                  to complete, whereas CS/BBA can take up to a full 5 years.
                </p>
                <p>
                  CS, CFM, and CS/BBA at the University of Waterloo are known to be very prestigious programs and are well known in Canada and across the world.
                  For prospective students or anyone who is interested in learning more about what the students are like, this Class Profile will attempt to
                  answer some of your questions, and you may even learn a thing or two you didn't expect!
                </p>
                <p>
                  According to{" "}
                  <a href="https://uwaterloo.ca/institutional-analysis-planning/university-data-and-statistics/student-data/degrees-granted-0" target="_blank">
                    Institutional Analysis & Planning
                  </a>
                  , there were 613 graduates from CS, CFM, and CS/BBA in 2024, leading to an overall survey turnout of 7.8%. By program, this was 6.6% from CS
                  and 19.4% from CS/BBA. We unfortunately did not get any responses from CFM students this year.
                </p>
              </WindowPanel>
            </div>
          </div>
        </div>
        <div
          className="flex flex-col items-center justify-center md:justify-start pb-4 md:pb-0"
          style={{
            backgroundImage: `url(${JSON.stringify(basePath + "/images/home-links.png")})`,
            backgroundSize: "100% auto",
            backgroundPosition: "center bottom",
            backgroundRepeat: "no-repeat",
            minHeight: (pageWidth / 6912) * 7140,
          }}>
          <div className="w-[calc(min(90%,1600px))] flex justify-center md:justify-end">
            <div
              className="flex flex-col items-center bg-black/20 sm:bg-transparent p-4 sm:p-0 rounded-lg"
              style={{ marginTop: pageWidth >= 768 ? `${Math.floor((pageWidth / 6912) * 2880)}px` : 0 }}>
              <h2 className="glow text-xl lg:text-2xl xl:text-3xl">Sections</h2>
              <div className="grid md:grid-cols-2 md:gap-8">
                {[links.slice(0, Math.floor(links.length / 2)), links.slice(Math.floor(links.length / 2))].map((linkset, index) => (
                  <ul key={index}>
                    {linkset.map(([url, text], i) => (
                      <li key={url} className="text-lg lg:text-xl xl:text-2xl">
                        <div className="flex items-center gap-2">
                          <span className="text-yellow">{(Math.floor(links.length / 2) * index + i + 1).toString().padStart(2, "0")}</span>
                          <Link href={url} className="text-white hover:text-white underline">
                            {text}
                          </Link>
                        </div>
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
