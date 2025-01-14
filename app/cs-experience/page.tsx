"use client";

import { BarGraphHorizontal, BarGraphVertical } from "@/components/BarGraph";
import { BottomNav } from "@/components/BottomNav";
import { ComponentWrapper } from "@/components/ComponentWrapper";
import { Header } from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import { PieChart } from "@/components/PieChart";
import { WordCloud } from "@/components/WordCloud";
import { E1, E2, E3, E4, E5, E6, E7, E8 } from "@/data/computer-science-experience";
import { pageRoutes } from "@/data/routes";
import { DefaultProp, barGraphMargin, barGraphProps, barGraphWidth, pieChartProps, wordCloudWidth } from "@/utils/defaultProps";
import { useWindowDimensions } from "@/utils/getWindowDimensions";
import { useIsMobile } from "@/utils/isMobile";

export default function Academics() {
  const pageWidth = useWindowDimensions().width;
  const isMobile = useIsMobile();

  return (
    <div className="flex flex-col items-center">
      <Header />
      <PageHeader name="cs-experience" alt="CS Experience" />

      <ComponentWrapper
        heading="Which of the following coding experiences did you have prior to university?"
        bodyText={
          <>
            <p>
              Coding experience prior to university can be valuable however is not something anyone is required to have to be a part of the CS program at
              Waterloo. However, these opportunities are a great way to help decide whether CS or programming is worth for you to pursue when coming to
              university.
            </p>
            <p>
              Hence, the majority of respondents have experience taking a CS course in high school. Many students have also participated in coding competitions
              or hackathons. Waterloo offers a variety of coding competitions/hackthons like CCC and Hack the North. Many early LC grinders were a part of the
              graduating class as well.
            </p>
          </>
        }
        align="left">
        <BarGraphHorizontal
          data={E1}
          width={barGraphWidth(isMobile, pageWidth)}
          height={DefaultProp.graphHeight}
          margin={{ ...barGraphMargin, ...{ left: 200 } }}
          background
        />
      </ComponentWrapper>

      <ComponentWrapper
        heading="How many programming languages do you know?"
        bodyText={
          <p>
            Most students claim they know 5+ languages (including Racket maybe). This is evidently due to students having the opportunity to learn a variety of
            skills through different classes, internships, and external opportunities like hackahtons over the course of their university career. Allowing
            students to gain both breadth and depth across a variety of fields, syntax, and paradigms.
          </p>
        }
        align="right"
        noBackground>
        <div className="center-col">
          <BarGraphVertical data={E2} {...barGraphProps(isMobile, pageWidth)} />
          <span>mean: 5.915 | min: 0 | Q1: 4 | median: 6 | Q3: 8 | max: 10</span>
        </div>
      </ComponentWrapper>

      <ComponentWrapper
        heading="What is your favourite programming language?"
        bodyText={
          <p>
            The majority of students seem to favour Python and C++ as their favourite languages, with Python enjoyers being the majority. This doesn&apos;t come
            as a surprise as both are heavily supported and used in either course content or in the field. Shout out to the 1 Haskell enjoyer and the 2 Racket
            enjoyers.
          </p>
        }
        align="left"
        wordCloud>
        <WordCloud
          data={E3}
          width={wordCloudWidth(isMobile, pageWidth)}
          height={DefaultProp.graphHeight}
          wordPadding={8}
          desktopMaxFontSize={75}
          mobileMaxFontSize={48}
          background
        />
      </ComponentWrapper>

      <ComponentWrapper
        heading="What is your favourite text editor or IDE?"
        bodyText={
          <>
            <p>
              VS Code once again, at no surprise, is the favourite code editor for the class of 2023. A versatile and customizable code editor that simplifies
              any task with a variety of open-source extensions available to take on any project.
            </p>
            <p>
              VS Code is fast, lightweight, easy to use, powerful with its extensions, and offers a plethora of themes. We are sad to say that the class of 2023
              does not have any Microsoft Word enjoyers-a heavily customizable text editor.
            </p>
          </>
        }
        align="right"
        noBackground
        wordCloud>
        <WordCloud
          data={E4}
          width={wordCloudWidth(isMobile, pageWidth)}
          height={DefaultProp.graphHeight}
          wordPadding={8}
          desktopMaxFontSize={75}
          mobileMaxFontSize={48}
        />
      </ComponentWrapper>

      <ComponentWrapper
        heading="What operating system(s) do you mainly use?"
        bodyText={
          <>
            <p>
              Each of these 3 operating systems provides their own benefits and downsides, however making the right choice comes down to personal preference and
              comfort for daily. The majority of the respondents are split between Windows and MacOS, with 81 students developing on MacOS.
            </p>
            <p>
              Additionally, it seems that UNIX-based OS (MacOS/Linux) are predominantly used by students, due to the various tools and features that they cater
              to programmers.
            </p>
          </>
        }
        align="left">
        <div className="md:px-[calc(20rem/16)] lg:px-[calc(40rem/16)] xl:px-[calc(70rem/16)]">
          <PieChart data={E5} {...pieChartProps(isMobile, pageWidth, true)} />
        </div>
      </ComponentWrapper>

      <ComponentWrapper
        heading="What is your LeetCode proficiency level?"
        bodyText={
          <p>
            The majority of respondents have a proficiency level of medium problems when it comes to doing Leetcode problems. Many students also have little to
            no experience with leetcode. Leetcode is a platform that provides individuals with various coding problems that can be a great way to prep for
            various coding interviews.
          </p>
        }
        align="right"
        noBackground>
        <div className="md:px-[calc(20rem/16)] lg:px-[calc(40rem/16)] xl:px-[calc(70rem/16)]">
          <PieChart data={E6} {...pieChartProps(isMobile, pageWidth)} {...{ labelTextSize: 20 }} />
        </div>
      </ComponentWrapper>

      <ComponentWrapper
        heading="How many side projects have you completed during university, if any?"
        bodyText={
          <>
            <p>
              Side projects are a great way to pick up new skills, build your resume for internships, or explore fields you are interested in. Having a few side
              projects can greatly help with getting internship opportunities.
            </p>
            <p>
              Over 30% of students have completed 3 or more side projects during their time at Waterloo. With the majority of students having done 2 or fewer
              during their time at university.
            </p>
          </>
        }
        align="left">
        <div className="center-col">
          <BarGraphVertical data={E7} {...barGraphProps(isMobile, pageWidth, true)} lowerLabelDy="0" />
          <span>mean: 2.467 | min: 0 | Q1: 1 | median: 2 | Q3: 3 | max: 10</span>
        </div>
      </ComponentWrapper>

      <ComponentWrapper
        heading="How many hackathons in total have you attended as a hacker?"
        bodyText={
          <>
            <p>
              Hackathons are a great way to meet new people, learn new skills, or just bring ideas to life. There are various club or committee-hosted Hackathon
              opportunities for any skill level at Waterloo and even around the world for students to participate in.
            </p>
            <p>69% (nice) of students have had the chance to attend a hackathon during prior to graduating CS at Waterloo.</p>
          </>
        }
        align="right"
        noBackground>
        <div className="center-col">
          <BarGraphVertical data={E8} {...barGraphProps(isMobile, pageWidth)} />
          <span>mean: 2.837 | min: 0 | Q1: 1 | median: 2 | Q3: 3 | max: 23</span>
        </div>
      </ComponentWrapper>
      <BottomNav leftPage={pageRoutes.academics} rightPage={pageRoutes.coop} />
    </div>
  );
}
