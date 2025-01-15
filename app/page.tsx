"use client";

import { Header } from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import WindowPanel from "@/components/WindowPanel";
import { basePath } from "@/utils/getBasePath";
import { useWindowDimensions } from "@/utils/getWindowDimensions";
import Image from "next/image";

export default function Home() {
  const pageWidth = useWindowDimensions().width;

  return (
    <>
      <Header />
      <div className="-mb-16">
        <PageHeader name="home-page" alt="Home Page" />
      </div>

      <div className="w-full grid justify-items-stretch gap-4 mb-8">
        <div className="relative">
          <div className="absolute top-0 left-0">
            <Image src={basePath + "/images/home-left.png"} alt="Home Page Left Design" width={pageWidth / 5} height={300} />
          </div>
          <div className="absolute top-0 right-0">
            <Image src={basePath + "/images/home-right.png"} alt="Home Page Right Design" width={pageWidth / 5} height={300} />
          </div>
          <div className="absolute top-0">
            <Image src={basePath + "/images/home-center.png"} alt="Home Page Center Design" width={pageWidth} height={300} />
          </div>
        </div>
        <div className="flex flex-col items-center mt-16">
          <div className="w-[calc(min(90%,1200px))] grid md:grid-cols-4 gap-y-8 md:gap-y-16">
            <h1 className="glow">About the Programs</h1>
            <div className="col-span-3">
              <WindowPanel dark>
                <h3>Computer Science</h3>
                <p>
                  Computer Science (CS) is commonly offered by the Faculty of Mathematics as a co-op program, with students usually attending 8 school and 6
                  co-op terms in their degree. However, CS is more flexible than the other two programs because of the ability to choose from a wider range and
                  number of electives, to take terms off, and to change their academic schedules to fit their needs.
                </p>
                <h3>Computing and Financial Management</h3>
                <p>
                  Computing and Financial Management (CFM) combines the core CS courses with electives from areas such as accounting, economics, and financial
                  management. This is a joint offering by the Faculty of Mathematics and the School of Accounting and Finance. The program is offered only as a
                  co-op program with 6 co-op terms.
                </p>
                <h3>Computer Science/Business Administration</h3>
                <p>
                  Joint with Wilfrid Laurier University, the Business Administration and Computer Science Double Degree (CS/BBA) is an exclusive offering that
                  allows students to gain experience in CS as well as many subfields of business. There are 10 school terms and either 4 or 5 co-op terms in the
                  usual schedule, so it's a longer degree with more academic terms than CS or CFM.
                </p>
              </WindowPanel>
            </div>
            <h1 className="glow">Preface</h1>
            <div className="col-span-3">
              <WindowPanel>
                <p>
                  The CS Class Profile consists of data relevant to CS, CFM, and CS/BBA students. These were combined with the knowledge that students in these
                  programs tend to have similar experiences, as many of the same CS required courses are shared. In the standard co-op offering, CS and CFM take
                  4 years and 2 semesters to complete, while CS/BBA can take up to a full 5 years.
                </p>
                <p>
                  Computer Science (and the others) is known to be a very prestigious program, and is very well known in Canada as well as across the world. For
                  prospective students or anyone who is interested in learning more about what the students are like, this CS Class Profile will attempt to
                  answer some of your questions, and you may even learn a thing or two you didn’t expect!
                </p>
                <p>
                  The survey questions were approved by the Institutional Analysis & Planning, where all University of Waterloo stakeholders that are interested
                  in conducting a non-academic research survey involving a large portion of the UWaterloo population are reviewed and approved. The entirety of
                  the survey creation and data processing was done by the UW Computer Science Club, so please check us out if you enjoy what you see!
                </p>
              </WindowPanel>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
