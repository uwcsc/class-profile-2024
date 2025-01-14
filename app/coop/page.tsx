"use client";

import { BarGraphVertical } from "@/components/BarGraph";
import { BottomNav } from "@/components/BottomNav";
import { BoxPlot } from "@/components/Boxplot";
import { ComponentSwitcher } from "@/components/ComponentSwitcher";
import { ComponentWrapper } from "@/components/ComponentWrapper";
import { Header } from "@/components/Header";
import { LineGraph } from "@/components/LineGraph";
import PageHeader from "@/components/PageHeader";
import { PieChart } from "@/components/PieChart";
import { StackedBarGraphHorizontal, StackedBarGraphVertical } from "@/components/StackedBarGraph";
import { WordCloud } from "@/components/WordCloud";
import { C1, C2, C3, C4, C5, C6i, C6ii, C6iii, C6iv, C6ix, C6ixKey, C6v, C6vi, C6viKey, C6vii, C6viiKey, C6viii, C6x, C6xKey } from "@/data/coop";
import { pageRoutes } from "@/data/routes";
import { Color } from "@/utils/Color";
import { DefaultProp, barGraphMargin, barGraphProps, pieChartProps, wordCloudWidth } from "@/utils/defaultProps";
import { useWindowDimensions } from "@/utils/getWindowDimensions";
import { useIsMobile } from "@/utils/isMobile";

export default function Coop() {
  const pageWidth = useWindowDimensions().width;
  const isMobile = useIsMobile();

  const colorRange = [Color.pink, Color.lightOrange, Color.lightPink];

  const colorRange2 = [Color.pink, Color.lightOrange, Color.lightPink, Color.orange, Color.lighterPink];

  return (
    <div className="flex flex-col items-center">
      <Header />
      <PageHeader name="co-op" alt="Co-op" />

      {/* C1 */}
      <ComponentWrapper
        heading="Are you in a co-op program?"
        bodyText={
          <p>
            Out of the 135 individuals that participated in this class profile, 128 were in a co-op program and 7 were not. Most students choose to be in the
            co-op program because of the great experiences it provides!
          </p>
        }
        align="left">
        <div className="md:px-[calc(20rem/16)] lg:px-[calc(40rem/16)] xl:px-[calc(70rem/16)]">
          <PieChart data={C1} {...pieChartProps(isMobile, pageWidth, true)} />
        </div>
      </ComponentWrapper>

      {/* C2 */}
      <ComponentWrapper
        heading=" What was your favourite co-op location?"
        bodyText={
          <p>
            There is a variety of favoured co-op locations, with some of the most popular being New York, Toronto, San Francisco, and various other cities in
            California.
          </p>
        }
        align="right"
        noBackground
        wordCloud>
        <WordCloud
          data={C2}
          width={wordCloudWidth(isMobile, pageWidth)}
          height={DefaultProp.graphHeight * 0.7}
          wordPadding={15}
          desktopMaxFontSize={75}
          mobileMaxFontSize={48}
        />
      </ComponentWrapper>

      {/* c3 */}
      <ComponentWrapper
        heading="Have you ever had a co-op term without a placement?"
        bodyText={
          <>
            <p>
              About 18% of respondents have had at least one co-op term without a placement. If you&apos;re also in thie situation and cannot find one,
              don&apos;t worry; you&apos;re not alone!
            </p>
            <p>
              Finding a co-op placement, especially your first one, can be pretty difficult. As the recent pandemic also affected students in this year, it
              could have also caused finding a placement to be even more difficult.
            </p>
          </>
        }
        align="left">
        <div className="md:px-[calc(20rem/16)] lg:px-[calc(40rem/16)] xl:px-[calc(70rem/16)]">
          <PieChart data={C3} {...pieChartProps(isMobile, pageWidth, true)} />
        </div>
      </ComponentWrapper>

      {/* c4 */}
      <ComponentWrapper
        heading="Were you ever banned from WaterlooWorks for renegotiating an offer/match?"
        bodyText={
          <p>
            Reneging an offer/match comes with its risks, but if you believe that your other offer is better, you can decide it to be worth it. Out of those who
            participated in this class profile, about 6% of students were banned from WaterlooWorks for this activity.
          </p>
        }
        align="right"
        noBackground>
        <div className="md:px-[calc(20rem/16)] lg:px-[calc(40rem/16)] xl:px-[calc(70rem/16)]">
          <PieChart data={C4} {...pieChartProps(isMobile, pageWidth)} />
        </div>
      </ComponentWrapper>

      {/* C5 */}
      <ComponentWrapper
        heading="How many co-op offers did you have rescinded?"
        bodyText={
          <p>
            Majority of the participants, standing at 64%, did not rescind any co-op offers. If a participant did rescind any offers, they, for the most part,
            only rescinded one, at 13% of the respondents, with very few rescinding more than one offer.
          </p>
        }
        align="left">
        <BarGraphVertical data={C5} {...barGraphProps(isMobile, pageWidth, true)} />
      </ComponentWrapper>

      {/* c6i */}
      <ComponentWrapper heading="What company did you work for?" align="left" noBackground wordCloud>
        <ComponentSwitcher
          graphList={C6i.map((coopTerm, i) => (
            <WordCloud
              data={coopTerm}
              width={wordCloudWidth(isMobile, pageWidth)}
              height={DefaultProp.graphHeight}
              wordPadding={7}
              desktopMaxFontSize={75}
              mobileMaxFontSize={38}
              key={i}
            />
          ))}
          buttonList={C6i.map((_, i) => "Co-op #" + (i + 1).toString())}
        />
      </ComponentWrapper>

      {/* C6ii */}
      <ComponentWrapper heading="Where were you located during work?" align="right">
        <LineGraph
          data={C6ii}
          colorRange={colorRange2}
          width={isMobile ? pageWidth / 1.5 : 600}
          height={DefaultProp.graphHeight}
          margin={{
            top: 20,
            bottom: 80,
            left: 30,
            right: 20,
          }}
        />
      </ComponentWrapper>

      {/* C6iii */}
      <ComponentWrapper heading="What was your position?" align="right" noBackground wordCloud>
        <ComponentSwitcher
          graphList={C6iii.map((coopTerm, i) => (
            <WordCloud
              data={coopTerm}
              width={wordCloudWidth(isMobile, pageWidth)}
              height={DefaultProp.graphHeight}
              wordPadding={7}
              desktopMaxFontSize={75}
              mobileMaxFontSize={38}
              key={i}
            />
          ))}
          buttonList={C6iii.map((_, i) => "Co-op #" + (i + 1).toString())}
        />
      </ComponentWrapper>

      {/* C6iv */}
      <ComponentWrapper heading="What was your salary per hour in CAD (excluding other forms of compensation)?" align="left">
        <BoxPlot
          width={isMobile ? pageWidth / 1.5 : 500}
          height={DefaultProp.graphHeight}
          data={C6iv}
          margin={{
            top: 20,
            left: 20,
          }}
          background
          means={{ 1: 23.43, 2: 30.14, 3: 36.43, 4: 43.6, 5: 57.91, 6: 63.42 }}
        />
      </ComponentWrapper>

      {/* C6v */}
      <ComponentWrapper
        heading="How much did you receive in other forms of compensation in CAD? (i.e. bonuses, stock options, relocation, housing, etc.)"
        align="left"
        noBackground>
        <BoxPlot
          width={isMobile ? pageWidth / 1.5 : 600}
          height={DefaultProp.graphHeight}
          data={C6v}
          valueAxisLeftMargin={75}
          margin={{
            top: 20,
            left: 20,
          }}
          means={{ 1: 724.87, 2: 1874.68, 3: 1363.7, 4: 2706.27, 5: 7694.31, 6: 7623.83 }}
        />
      </ComponentWrapper>

      {/* C6vi */}
      <ComponentWrapper heading="What was your co-op evaluation rating?" align="right">
        <div>
          <StackedBarGraphHorizontal
            width={isMobile ? pageWidth / 1.5 : 600}
            height={DefaultProp.graphHeight}
            keys={C6viKey}
            colorRange={[Color.lightPink, Color.pink, Color.darkPink, Color.darkerPink]}
            data={C6vi}
            margin={barGraphMargin}
            displayPercentage
            tooltipBottomLabel="Co-op Term: "
          />
        </div>
      </ComponentWrapper>

      {/* C7vi */}
      <ComponentWrapper heading="How happy were you with your co-op during the work term specified?" align="left" noBackground>
        <div>
          <StackedBarGraphVertical
            width={isMobile ? pageWidth / 1.5 : 600}
            height={DefaultProp.graphHeight}
            keys={C6viiKey}
            colorRange={[Color.lightOrange, Color.lightPink, Color.pink, Color.darkPink, Color.darkerPink]}
            data={C6vii}
            margin={barGraphMargin}
            tooltipBottomLabel="Co-op Term: "
            displayPercentage
          />
        </div>
      </ComponentWrapper>

      {/* C6viii */}
      <ComponentWrapper heading="How did you find your job?" align="left">
        <div style={{ padding: "10px" }}>
          <LineGraph
            data={C6viii}
            colorRange={colorRange}
            width={isMobile ? pageWidth / 1.5 : 600}
            height={DefaultProp.graphHeight}
            margin={{
              top: 20,
              bottom: 80,
              left: 30,
              right: 20,
            }}
          />
        </div>
      </ComponentWrapper>

      {/* C6ix */}
      <ComponentWrapper heading="Were you referred for the co-op?" align="left" noBackground>
        <div>
          <StackedBarGraphVertical
            width={isMobile ? pageWidth / 1.5 : 600}
            height={DefaultProp.graphHeight}
            keys={C6ixKey}
            colorRange={[Color.lightPink, Color.darkPink]}
            data={C6ix}
            margin={barGraphMargin}
            displayPercentage
            tooltipBottomLabel="Co-op term: "
          />
        </div>
      </ComponentWrapper>

      {/* C6x */}
      <ComponentWrapper heading="Did you complete another co-op term after this?" align="right">
        <div>
          <StackedBarGraphVertical
            width={isMobile ? pageWidth / 1.5 : 600}
            height={DefaultProp.graphHeight}
            keys={C6xKey}
            colorRange={[Color.lightPink, Color.darkPink]}
            data={C6x}
            margin={barGraphMargin}
            displayPercentage
            tooltipBottomLabel="Co-op term: "
          />
        </div>
      </ComponentWrapper>

      <BottomNav leftPage={pageRoutes.computerScienceExperience} rightPage={pageRoutes.lifestyleAndInterests} />
    </div>
  );
}
