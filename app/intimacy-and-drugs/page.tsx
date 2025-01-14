"use client";

import { BarGraphHorizontal, BarGraphVertical } from "@/components/BarGraph";
import { BottomNav } from "@/components/BottomNav";
import { ComponentWrapper } from "@/components/ComponentWrapper";
import { GroupedBarGraphHorizontal } from "@/components/GroupedBarGraph";
import { Header } from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import { PieChart } from "@/components/PieChart";
import { QuotationCarousel } from "@/components/QuotationCarousel";
import { WordCloud } from "@/components/WordCloud";
import { I1, I10, I11, I12, I13, I2i, I2ii, I3, I4, I5, I6, I7, I8, I9i, I9ii, I9iii } from "@/data/intimacy-and-drugs";
import { pageRoutes } from "@/data/routes";
import { Color } from "@/utils/Color";
import { DefaultProp, barGraphMargin, barGraphProps, barGraphWidth, pieChartProps, wordCloudWidth } from "@/utils/defaultProps";
import { useWindowDimensions } from "@/utils/getWindowDimensions";
import { useIsMobile } from "@/utils/isMobile";

export default function IntimacyAndDrugs() {
  const pageWidth = useWindowDimensions().width;
  const isMobile = useIsMobile();

  return (
    <div className="flex flex-col items-center">
      <Header />
      <PageHeader name="intimacy-and-drugs" alt="Intimacy and Drugs" />

      <ComponentWrapper
        heading="Which drugs have you tried?"
        bodyText={
          <>
            <p>
              Most students experience substances for the first time during university. The common ones we see students try are marijuana, alcohol, and tobacco,
              with most staying away from the harder drugs.
            </p>
            <p>Make sure to stay safe and be in a safe environment when trying any type of drug.</p>
          </>
        }
        align="left">
        <GroupedBarGraphHorizontal
          data={I1}
          barColors={[Color.chartGreenLight, Color.chartBlueLight, Color.chartPinkLight]}
          barHoverColorsMap={{
            [Color.chartGreenLight]: Color.chartGreenHeavy,
            [Color.chartBlueLight]: Color.chartBlueHeavy,
            [Color.chartPinkLight]: Color.chartPinkHeavy,
          }}
          width={barGraphWidth(isMobile, pageWidth)}
          minWidth={700}
          height={DefaultProp.graphHeight}
          margin={{ ...barGraphMargin, ...{ left: 200, bottom: 60 } }}
        />
      </ComponentWrapper>

      <ComponentWrapper
        heading="Have you ever had sexual intercourse?"
        bodyText={
          <>
            <p>
              University is a time when many students are finally living alone or with friends and have more freedom in their lives. No more curfews, no more
              parents wondering where they are, and because of this, many students seek out new relationships and explore their sexuality.
            </p>
            <p>There is no need to rush, and it is important to take your time and be comfortable before taking this step.</p>
          </>
        }
        align="right"
        noBackground>
        <div className="md:px-[calc(20rem/16)] lg:px-[calc(40rem/16)] xl:px-[calc(70rem/16)]">
          <BarGraphVertical data={I2i} {...barGraphProps(isMobile, pageWidth)} lowerLabelDy="0" />
        </div>
      </ComponentWrapper>

      <ComponentWrapper heading="If so, in which term did you first have sexual intercourse?">
        <div className="md:px-[calc(20rem/16)] lg:px-[calc(40rem/16)] xl:px-[calc(70rem/16)]">
          <BarGraphVertical data={I2ii} {...barGraphProps(isMobile, pageWidth, true)} lowerLabelDy="0" />
        </div>
      </ComponentWrapper>

      <ComponentWrapper
        heading="How many relationships have you been in during university?"
        bodyText={<p>The majority of our respondents have been in either 1 or 2 relationships during their undergraduate career.</p>}
        align="right"
        noBackground>
        <div className="center-col">
          <BarGraphVertical data={I3} {...barGraphProps(isMobile, pageWidth)} lowerLabelDy="0" />
          <span>mean: 1.2 | min: 0 | Q1: 0 | median: 1 | Q3: 2 | max: 7</span>
        </div>
      </ComponentWrapper>

      <ComponentWrapper
        heading="How many sexual partners have you had during university?"
        bodyText={
          <p>
            Most respondents have had one sexual partner during their university with an almost equal number having zero. But nothing can top the one who
            reported having 57...
          </p>
        }
        align="left">
        <div className="center-col">
          <BarGraphVertical data={I4} {...barGraphProps(isMobile, pageWidth, true)} lowerLabelDy="0" />
          <span>mean: 2.623 | min: 0 | Q1: 0 | median: 1 | Q3: 2 | max: 57</span>
        </div>
      </ComponentWrapper>

      <ComponentWrapper
        heading="How much time did you spend in a relationship during university?"
        bodyText={
          <p>
            Maintaining relationships during university can sometimes be difficult with heavy course loads, however, if there is a will there&apos;s a way! Most
            relationships tend to last 2-4 years, with 21 of them making it past the 4 year mark. Congratulations!
          </p>
        }
        align="right"
        noBackground>
        <BarGraphHorizontal
          data={I5}
          width={barGraphWidth(isMobile, pageWidth)}
          height={DefaultProp.graphHeight}
          margin={{ ...barGraphMargin, ...{ left: 100 } }}
        />
      </ComponentWrapper>

      <ComponentWrapper
        heading="Have you ever cheated on someone, been cheated on, or helped someone cheat?"
        bodyText={<p>Almost all respondents have never been in any cheating situations.</p>}
        align="left">
        <div className="md:px-[calc(20rem/16)] lg:px-[calc(40rem/16)] xl:px-[calc(70rem/16)]">
          <BarGraphVertical data={I6} {...barGraphProps(isMobile, pageWidth, true)} lowerLabelDy="0" />
        </div>
      </ComponentWrapper>

      <ComponentWrapper
        heading="Did you ever date another CS / CS/BBA / CFM student?"
        bodyText={<p>Most respondents have not dated another CS/ CS/BBA / CFM student. 42 students reported having done so, while 74 said they did not.</p>}
        align="right"
        noBackground>
        <div className="md:px-[calc(20rem/16)] lg:px-[calc(40rem/16)] xl:px-[calc(70rem/16)]">
          <PieChart data={I7} {...pieChartProps(isMobile, pageWidth)} />
        </div>
      </ComponentWrapper>

      <ComponentWrapper
        heading="If you answered no to the previous question, did you want to date another CS / CS/BBA / CFM student?"
        bodyText={
          <p>
            Regarding those who answered no, 40 out of the 66 respondents said that they would not. Is this surprising to you? Dating someone in your program
            means you now have someone to spend those all-nighters with. On the other hand, having a class with your ex after a bad breakup can definitely be
            awkward.
          </p>
        }
        align="left">
        <div className="md:px-[calc(20rem/16)] lg:px-[calc(40rem/16)] xl:px-[calc(70rem/16)]">
          <PieChart data={I8} {...pieChartProps(isMobile, pageWidth, true)} />
        </div>
      </ComponentWrapper>

      <ComponentWrapper
        heading="Are you currently in a relationship?"
        bodyText={
          <p>
            59 respondents reported being in a relationship and 58 said they were not. Let&apos;s hope that the 18 who did not respond are not in “complicated”
            relationships.
          </p>
        }
        align="right"
        noBackground>
        <PieChart data={I9i} {...pieChartProps(isMobile, pageWidth, false)} />
      </ComponentWrapper>

      <ComponentWrapper
        heading="In which term did you meet your current partner?"
        bodyText={
          <p>
            Before university and during 1A seem to be the times most people fall in love and meet their current partners. But regardless, who knows, maybe this
            term is your time to shine!
          </p>
        }
        align="left">
        <BarGraphVertical data={I9ii} {...barGraphProps(isMobile, pageWidth, true)} lowerLabelDy="0" />
      </ComponentWrapper>

      <ComponentWrapper
        heading="Where did you meet your current partner?"
        bodyText={
          <p>
            For those who had a current partner, most of them met them through mutual friends, with high school being in second. Mutual friends are a great way
            to meet new people and it helps to create even larger friend groups!
          </p>
        }
        align="right"
        noBackground
        wordCloud>
        <WordCloud
          data={I9iii}
          width={wordCloudWidth(isMobile, pageWidth)}
          height={DefaultProp.graphHeight}
          wordPadding={7}
          desktopMaxFontSize={75}
          mobileMaxFontSize={30}
        />
      </ComponentWrapper>

      <ComponentWrapper
        heading="What is your rice purity score?"
        bodyText={
          <p>
            For those uninformed, the Rice Purity test is a 100-question survey that aims to gauge a person&apos;s level of “innocence” or their experience in
            regard to a variety of scenarios ranging from sexual situations to substances and various others. 5 respondents had the same score of 50! Out of all
            respondents, 8 was our lowest (???) and 100 (a perfectly pure score!) was our highest.
          </p>
        }
        align="left"
        wordCloud>
        <div className="center-col">
          <WordCloud
            data={I10}
            width={wordCloudWidth(isMobile, pageWidth)}
            height={DefaultProp.graphHeight}
            wordPadding={7}
            desktopMaxFontSize={75}
            mobileMaxFontSize={30}
            background
          />
          <span>mean: 58.411 | min: 8 | Q1: 42 | median: 54 | Q3: 73 | max: 100</span>
        </div>
      </ComponentWrapper>

      <ComponentWrapper
        heading="How has your understanding of relationships changed during university?"
        bodyText={
          <p>
            Relationships are often a major turning point in many people&apos;s lives. It is a commitment to each other—some struggle, while others do not.
            Let&apos;s see what other people have to say.
          </p>
        }
        align="right"
        noBackground>
        <div className="flex flex-col gap-[calc(48rem/16)] m-[calc(32rem/16)]">
          <QuotationCarousel data={I11} circleDiameter={0} width={barGraphWidth(isMobile, pageWidth)} height={isMobile ? 600 : 500} />
        </div>
      </ComponentWrapper>

      <ComponentWrapper heading="Any advice for people looking for a relationship?" bodyText={<p>How does one get rizz?</p>} align="left">
        <div className="flex flex-col gap-[calc(48rem/16)] m-[calc(32rem/16)]">
          <QuotationCarousel data={I12} circleDiameter={0} width={barGraphWidth(isMobile, pageWidth)} height={600} />
        </div>
      </ComponentWrapper>

      <ComponentWrapper heading="Any advice for people already in a relationship?" align="right" noBackground>
        <div className="flex flex-col gap-[calc(48rem/16)] m-[calc(32rem/16)]">
          <QuotationCarousel data={I13} circleDiameter={0} width={barGraphWidth(isMobile, pageWidth)} height={600} />
        </div>
      </ComponentWrapper>

      <BottomNav leftPage={pageRoutes.lifestyleAndInterests} rightPage={pageRoutes.postGrad} />
    </div>
  );
}
