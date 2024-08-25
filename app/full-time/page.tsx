"use client";

import { BarGraphHorizontal, BarGraphVertical } from "@/components/BarGraph";
import { BottomNav } from "@/components/BottomNav";
import { ComponentWrapper } from "@/components/ComponentWrapper";
import { Header } from "@/components/Header";
import { PieChart } from "@/components/PieChart";
import { SectionHeader } from "@/components/SectionHeader";
import { WordCloud } from "@/components/WordCloud";
import { F1, F2, F3, F4, F5, F6, F7 } from "@/data/full-time";
import { pageRoutes } from "@/data/routes";
import { DefaultProp, barGraphMargin, barGraphProps, pieChartProps, wordCloudWidth } from "@/utils/defaultProps";
import { useWindowDimensions } from "@/utils/getWindowDimensions";
import { useIsMobile } from "@/utils/isMobile";
import styles from "../basePage.module.css";

export default function FullTime() {
  const pageWidth = useWindowDimensions().width;
  const isMobile = useIsMobile();

  return (
    <div className={styles.page}>
      <Header />
      <SectionHeader title="Full-time" />

      <ComponentWrapper
        heading="What company will you be working for post-grad?"
        bodyText={<p>Most students have secured full-time positions and will be working full time post-grad. This is more than 50% of respondents. </p>}
        align="left"
        wordCloud>
        <WordCloud
          data={F1}
          width={wordCloudWidth(isMobile, pageWidth)}
          height={DefaultProp.graphHeight}
          wordPadding={7}
          desktopMaxFontSize={75}
          mobileMaxFontSize={48}
          background
        />
      </ComponentWrapper>

      <ComponentWrapper
        heading="Where will you be working from post-grad?"
        bodyText={
          <>
            <p>Toronto, Ontario, and New York are the two main places most people seem to be moving to start their new life as full-time adults!</p>
            <p>
              A majority of students said they will be working in the USA, which is no surprise due to most opportunities in the tech field being in tech hubs
              like San Francisco, New York, and Seattle.
            </p>
            <p>Regardless, it just goes to show that if you work hard, and with just a bit of luck, you can work in your dream location!</p>
          </>
        }
        align="right"
        noBackground
        wordCloud>
        <WordCloud
          data={F2}
          width={wordCloudWidth(isMobile, pageWidth)}
          height={DefaultProp.graphHeight}
          wordPadding={7}
          desktopMaxFontSize={75}
          mobileMaxFontSize={48}
        />
      </ComponentWrapper>

      <ComponentWrapper
        heading="How many offers did you decide between? Please enter a number."
        bodyText={<p>More than half of the respondents chose between 1 or 2 offers!</p>}
        align="left">
        <div className="center-col">
          <BarGraphVertical data={F3} {...barGraphProps(isMobile, pageWidth, true)} />
          <span>mean: 2.338 | min: 1 | Q1: 1 | median: 2 | Q3: 3 | max: 10</span>
        </div>
      </ComponentWrapper>

      <ComponentWrapper
        heading="Are you returning to a prior co-op?"
        bodyText={
          <>
            <p>
              59 out of 81 respondents are returning to a prior co-op on a permanent return offer! This statistic shows that a co-op program lets you test jobs
              and find what team/company culture fits your liking much earlier in your career.
            </p>
            <p>Additionally, in these co-op positions, students can obtain new connections and leverage them for future full-time employment.</p>
          </>
        }
        align="right"
        noBackground>
        <div className={styles.graphContainer}>
          <PieChart data={F4} {...pieChartProps(isMobile, pageWidth)} />
        </div>
      </ComponentWrapper>

      <ComponentWrapper
        heading="If working in Canada, what will be your first-year total compensation (salary + signing + first-year stock + bonus) in CAD?"
        bodyText={
          <p>
            The world of tech offers intriguing annual compensation and salary options. These compensation packages encompass a mix of components, including
            salary, signing bonuses, first-year stock options, and more. Many of these salaries start high and will just continue rising as the years go by!
          </p>
        }
        align="left">
        <div className="center-col">
          <BarGraphHorizontal data={F5} {...barGraphProps(isMobile, pageWidth, true)} margin={{ ...barGraphMargin, left: 112 }} />
          <span>mean: ~$128k | min: $29k | Q1: $97k | median: $105k | Q3: $160k | max: $280k</span>
        </div>
      </ComponentWrapper>

      <ComponentWrapper
        heading="If working outside of Canada, what will be your first-year total compensation (salary + signing + first-year stock + bonus) in CAD?"
        bodyText={
          <>
            <p>
              For those working outside of Canada, with a majority of them working in the USA, their first-year total compensation is significantly higher than
              working in Canada.
            </p>
            <p>
              This disparity highlights the competitive nature of the international tech job market and the opportunities available for individuals willing to
              explore opportunities abroad.
            </p>
          </>
        }
        align="right"
        noBackground>
        <div className="center-col">
          <BarGraphHorizontal data={F6} {...barGraphProps(isMobile, pageWidth)} margin={{ ...barGraphMargin, left: 112 }} />
          <span>mean: ~$372k | min: $170k | Q1: $270k | median: $300k | Q3: $485k | max: $850k</span>
        </div>
      </ComponentWrapper>

      <ComponentWrapper
        heading="What field/career path will you be in post-grad?"
        bodyText={
          <>
            <p>
              More than 60% of respondents are set to embark on their careers in software development! However, it is fascinating to see many others venturing
              into diverse fields such as cloud computing, game development, and various others.
            </p>
            <p>Undergraduate is a time for individuals to discover their passions and chart the course for their future careers.</p>
          </>
        }
        align="left"
        wordCloud>
        <WordCloud
          data={F7}
          width={wordCloudWidth(isMobile, pageWidth)}
          height={DefaultProp.graphHeight}
          wordPadding={10}
          desktopMaxFontSize={75}
          mobileMaxFontSize={48}
          background
        />
      </ComponentWrapper>

      <BottomNav leftPage={pageRoutes.postGrad} rightPage={pageRoutes.mentalHealth} />
    </div>
  );
}
