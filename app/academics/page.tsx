"use client";

import { BarGraphHorizontal, BarGraphVertical } from "@/components/BarGraph";
import { BodyLink } from "@/components/BlankLink";
import { BottomNav } from "@/components/BottomNav";
import { ComponentWrapper } from "@/components/ComponentWrapper";
import { Header } from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import { PieChart } from "@/components/PieChart";
import { QuotationCarousel } from "@/components/QuotationCarousel";
import { SectionWrapper } from "@/components/SectionWrapper";
import { StackedBarGraphHorizontal, StackedBarGraphVertical } from "@/components/StackedBarGraph";
import { WordCloud } from "@/components/WordCloud";
import {
  A1,
  A10,
  A11,
  A12,
  A12i,
  A12iKeys,
  A13,
  A13i,
  A13ii,
  A13iii,
  A14,
  A15,
  A16,
  A17,
  A17Keys,
  A18,
  A19,
  A2,
  A20,
  A20i,
  A20ii,
  A20iii,
  A20iv,
  A21,
  A22,
  A23,
  A24,
  A24i,
  A24ii,
  A24iii,
  A24iv,
  A25,
  A26,
  A3,
  A4,
  A5,
  A6,
  A7,
  A8,
  A9,
} from "@/data/academics";
import { pageRoutes } from "@/data/routes";
import { Color } from "@/utils/Color";
import { DefaultProp, barGraphMargin, barGraphProps, barGraphWidth, pieChartProps, wordCloudWidth } from "@/utils/defaultProps";
import { useWindowDimensions } from "@/utils/getWindowDimensions";
import { useIsMobile } from "@/utils/isMobile";

export default function Academics() {
  const pageWidth = useWindowDimensions().width;
  const isMobile = useIsMobile();

  return (
    <div className="flex flex-col items-center">
      <Header />
      <PageHeader name="academics" alt="Academics" />

      <SectionWrapper title="Courses" />

      <p style={{ paddingLeft: "4rem" }}>
        <b>Note:</b> Only courses that showed up in more than one response were included, otherwise there would be too many courses to display properly.
      </p>

      <ComponentWrapper
        heading="Is your expected graduation date the same as when you enrolled in your current program?"
        bodyText={
          <p>
            Even though the vast majority of respondents stayed on track with their initial plans, it is also perfectly normal to deviate from the planned route
            for a degree. Some students may have either shortened their degree by, for example, removing co-op from their degree or taking more classes than a
            full course load per term. Meanwhile, others may have delayed their graduation by retaking failed classes, taking gap years, adding minors to their
            degree, etc.
          </p>
        }
        align="left">
        <div className="md:px-[calc(20rem/16)] lg:px-[calc(40rem/16)] xl:px-[calc(70rem/16)]">
          <PieChart data={A1} {...pieChartProps(isMobile, pageWidth, true)} />
        </div>
      </ComponentWrapper>

      <ComponentWrapper
        heading="What category of electives for your degree did you enjoy most?"
        bodyText={
          <>
            <p>
              Because of the breadth and depth requirements for UW&apos;s computer science degrees, students are required to take electives in varying subject
              areas. Out of the different elective categories, communications and humanities courses were the most preferred, followed by courses in the social
              sciences.
            </p>
            <p>
              The popularity of these subject areas is likely due to the content taught in these courses being vastly different from the content in the required
              math and computer science courses, as well as their lower difficulty, allowing for a more refreshing studying experience.
            </p>
          </>
        }
        align="right"
        noBackground>
        <BarGraphHorizontal data={A2} width={barGraphWidth(isMobile, pageWidth)} height={DefaultProp.graphHeight} margin={{ ...barGraphMargin, left: 200 }} />
      </ComponentWrapper>

      <ComponentWrapper
        heading="Which CS course was your favourite?"
        bodyText={
          <p>
            There is a large variety of favoured CS courses by this class, but the most popular is{" "}
            <BodyLink href="https://uwflow.com/course/cs486">CS 486</BodyLink>, which provides an introduction to artificial intelligence, exploring an
            extremely popular niche of computer science in today&apos;s society. Tied for second place are{" "}
            <BodyLink href="https://uwflow.com/course/cs241">CS 241</BodyLink>, which teaches the relationship between high-level programming languages and
            computer architecture, and <BodyLink href="https://uwflow.com/course/cs246">CS 246</BodyLink>, which introduces object-oriented programming, which
            is a fundamental concept used in many areas of computer science.
          </p>
        }
        align="left"
        wordCloud>
        <WordCloud
          data={A3}
          width={wordCloudWidth(isMobile, pageWidth)}
          height={DefaultProp.graphHeight}
          wordPadding={7}
          desktopMaxFontSize={75}
          mobileMaxFontSize={30}
          minFrequency={2}
          background
        />
      </ComponentWrapper>

      <ComponentWrapper
        heading="Which CS course was your least favourite?"
        bodyText={
          <>
            <p>
              <BodyLink href="https://uwflow.com/course/cs245">CS 245</BodyLink> was, by far, the least favourite CS class taken by the class of 2023. This is
              likely due to its difficulty and the course focusing more on theory than application, as well as its lack of application outside of class despite
              being a core CS course. As of October 2023 on UWFlow, the course has a 28% liked rating, demonstrating its lack of popularity.
            </p>
            <p>
              <BodyLink href="https://uwflow.com/course/cs251">CS 251</BodyLink> comes in second, its content being about computer organization and design,
              including the teaching of low-level languages and hardware. Although it is not very liked by this class, it actually has a 65% liked rating on
              UWFlow, making it a bit more well-liked overall compared to this year.
            </p>
          </>
        }
        align="right"
        noBackground
        wordCloud>
        <WordCloud
          data={A4}
          width={wordCloudWidth(isMobile, pageWidth)}
          height={DefaultProp.graphHeight}
          wordPadding={7}
          desktopMaxFontSize={75}
          mobileMaxFontSize={30}
          minFrequency={2}
        />
      </ComponentWrapper>

      <ComponentWrapper
        heading="Which non-CS course was your favourite?"
        bodyText={
          <p>
            There is a wide variety of favoured non-math electives by this year&apos;s class, with{" "}
            <BodyLink href="https://uwflow.com/course/music246">MUSIC 246</BodyLink>, which explores music in film,{" "}
            <BodyLink href="https://uwflow.com/course/music140">MUSIC 140</BodyLink>, which teaches various aspects of 20th century popular culture, and{" "}
            <BodyLink href="https://uwflow.com/course/econ212">ECON 212</BodyLink>, exploring game theory, being, in order, the top 3 favourites!
          </p>
        }
        align="left"
        wordCloud>
        <WordCloud
          data={A5}
          width={wordCloudWidth(isMobile, pageWidth)}
          height={DefaultProp.graphHeight}
          wordPadding={7}
          desktopMaxFontSize={75}
          mobileMaxFontSize={30}
          minFrequency={2}
          background
        />
      </ComponentWrapper>

      <ComponentWrapper
        heading="Which non-CS course was your least favourite?"
        bodyText={
          <p>
            <BodyLink href="https://uwflow.com/course/stat231">STAT 231</BodyLink> was the least favourite non-CS course by a large margin. This course teaches
            the fundamentals of statistics, however, it is not very popular due to the heavy load of content taught. As of October 2023, it has a 37% liked rate
            on UWFlow. <BodyLink href="https://uwflow.com/course/spcom225">SPCOM 225</BodyLink> (rebranded to COMMST 225), which teaches interviewing, is also
            not very popular amongst this class, coming in second in least favoured.
          </p>
        }
        align="right"
        noBackground
        wordCloud>
        <WordCloud
          data={A6}
          width={wordCloudWidth(isMobile, pageWidth)}
          height={DefaultProp.graphHeight}
          wordPadding={7}
          desktopMaxFontSize={75}
          mobileMaxFontSize={30}
          minFrequency={2}
        />
      </ComponentWrapper>

      <ComponentWrapper
        heading="What is the hardest course you have taken?"
        bodyText={
          <p>
            Coming in first place, the hardest course for many students was <BodyLink href="https://uwflow.com/course/math239">MATH 239</BodyLink>, which is a
            mandatory course that provides an introduction to combinatorics, teaching graph theory and combinatorial analysis. Tied for second place in
            difficulty amongst this class are <BodyLink href="https://uwflow.com/course/cs343">CS 343</BodyLink>, which explores concurrent and parallel
            programming, and <BodyLink href="https://uwflow.com/course/cs350">CS 350</BodyLink>, which explores various aspects of operating systems.
          </p>
        }
        align="left"
        wordCloud>
        <WordCloud
          data={A7}
          width={wordCloudWidth(isMobile, pageWidth)}
          height={DefaultProp.graphHeight}
          wordPadding={7}
          desktopMaxFontSize={75}
          mobileMaxFontSize={30}
          minFrequency={2}
          background
        />
      </ComponentWrapper>

      <ComponentWrapper
        heading="What is the easiest course you have taken?"
        bodyText={
          <p>
            The easiest course that many computer science students have taken, by a large margin, is{" "}
            <BodyLink href="https://uwflow.com/course/clas104">CLAS 104</BodyLink>, which explores Greco-Roman mythology. Coming in second, this year&apos;s
            class also found <BodyLink href="https://uwflow.com/course/cs449">CS 449</BodyLink> to be an easy course, which is a course that provides an
            introduction to human-computer interaction.
          </p>
        }
        align="right"
        noBackground
        wordCloud>
        <WordCloud
          data={A8}
          width={wordCloudWidth(isMobile, pageWidth)}
          height={DefaultProp.graphHeight}
          wordPadding={7}
          desktopMaxFontSize={75}
          mobileMaxFontSize={30}
          minFrequency={2}
        />
      </ComponentWrapper>

      <ComponentWrapper
        heading="Which course do you regret taking most?"
        bodyText={
          <p>
            The course that most students regret taking the most is <BodyLink href="https://uwflow.com/course/cs448">CS 448</BodyLink>, which teaches the
            fundamentals of the inner workings of database systems. Tied for second place are{" "}
            <BodyLink href="https://uwflow.com/course/econ101">ECON 101</BodyLink>, which teaches the basics of economics and microeconomics, and{" "}
            <BodyLink href="https://uwflow.com/course/cs348">CS 348</BodyLink>, which, like CS 448, explores database management. It seems as though database
            management is not the favourite subject topic of this year&apos;s computer science students!
          </p>
        }
        align="left"
        wordCloud>
        <WordCloud
          data={A9}
          width={wordCloudWidth(isMobile, pageWidth)}
          height={DefaultProp.graphHeight}
          wordPadding={8}
          desktopMaxFontSize={60}
          desktopMinFontSize={15}
          minFrequency={2}
          mobileMaxFontSize={60}
          background
        />
      </ComponentWrapper>

      <ComponentWrapper
        heading="Which course did you find the most useful?"
        bodyText={
          <p>
            By far, this graduating year&apos;s students found the <BodyLink href="https://uwflow.com/course/cs246">CS 246</BodyLink> and{" "}
            <BodyLink href="https://uwflow.com/course/cs341">CS 341</BodyLink> courses to be the most useful. CS 246 explores object-oriented programming, which
            is applicable in many computer science-related topics, and is also one of the most favoured courses by this year&apos;s class. CS 341 also teaches a
            topic that can be applied to all areas of computer science, which is algorithms and algorithm design.
          </p>
        }
        align="right"
        noBackground
        wordCloud>
        <WordCloud
          data={A10}
          width={wordCloudWidth(isMobile, pageWidth)}
          height={DefaultProp.graphHeight}
          wordPadding={11}
          desktopMaxFontSize={80}
          mobileMaxFontSize={70}
          minFrequency={2}
        />
      </ComponentWrapper>

      <ComponentWrapper
        heading="Which course did you find the most useless?"
        bodyText={
          <p>
            <BodyLink href="https://uwflow.com/course/cs245">CS 245</BodyLink>, which explores logic and how it is used in computation, was considered the most
            useless course by most of this year&apos;s computer science class. This is followed by{" "}
            <BodyLink href="https://uwflow.com/course/pd11">PD 11</BodyLink>, which teaches skills for report-writing. These two courses have a 28% and a 5%
            liked rating, respectively, on UWFlow as of October 2023, further showing that they are not very popular courses amongst the students.
          </p>
        }
        align="left"
        wordCloud>
        <WordCloud
          data={A11}
          width={wordCloudWidth(isMobile, pageWidth)}
          height={DefaultProp.graphHeight}
          wordPadding={20}
          desktopMaxFontSize={80}
          mobileMaxFontSize={80}
          minFrequency={2}
          background
        />
      </ComponentWrapper>

      <ComponentWrapper
        heading="Did you take any advanced/enriched courses?"
        bodyText={
          <>
            <p>
              37% of this year&apos;s class has taken at least one advanced or enriched course, while 63% has not. Advanced and enriched courses are regarded to
              be much more difficult and require a larger time commitment than regular honours courses, which can already be difficult for many students!
            </p>
            <p>
              However, for those who are looking for a challenge or are curious about math or computer science topics beyond those taught in the regular
              courses, taking the advanced/enriched courses can be worth it for them. Moreover, for some students, their enjoyment of a course may depend on the
              structure, and may choose between the regular courses and the advanced/enriched ones based on that factor.
            </p>
          </>
        }
        align="right"
        noBackground>
        <div className="md:px-[calc(20rem/16)] lg:px-[calc(40rem/16)] xl:px-[calc(70rem/16)]">
          <PieChart data={A12} {...pieChartProps(isMobile, pageWidth)} />
        </div>
      </ComponentWrapper>

      <ComponentWrapper
        heading="If you took any advanced or enriched courses, for each course please indicate how much you enjoyed it?"
        bodyText={
          <>
            <p>
              The advanced/enriched courses are overall relatively popular amongst those who took them, with mostly all high ratings. There seems to be a
              relatively constant number of people who took these courses over the years, meaning that it is likely that those who took advanced/enriched
              courses enjoyed them and continued to take these courses after first year.
            </p>
            <p>
              In general, it is recommended to try these courses out early if you&apos;re interested in them to see if they&apos;re suited for you before the
              workload for your study term starts becoming more difficult to keep up with.
            </p>
          </>
        }
        align="left">
        <StackedBarGraphHorizontal
          width={isMobile ? pageWidth / 1.5 : 600}
          height={DefaultProp.graphHeight}
          keys={A12iKeys}
          colorRange={[Color.darkerPink, Color.darkPink, Color.pink, Color.lightPink, Color.lightOrange]}
          data={A12i.map(({ category, values }) => {
            const total = values.reduce((x, y) => x + y);
            const data: [string, number][] = A12iKeys.map((k, i) => [k, +((values[i] * 100) / total).toFixed(2)]);

            data.at(-1)![1] =
              100 -
              data
                .slice(0, -1)
                .map(([, x]) => x)
                .reduce((x, y) => x + y);

            return { category, ...Object.fromEntries(data) };
          })}
          margin={{ ...barGraphMargin, ...{ left: 100 } }}
          displayPercentage
        />
      </ComponentWrapper>

      <SectionWrapper title="Transfer" />

      <ComponentWrapper
        heading="Did you transfer into your current program?"
        bodyText={
          <p>
            29% of students in this year&apos;s class transferred into the program that they are currently in, which is a relatively high percentage. It can be
            assumed that most of the students that transferred into their program transferred into CS, as it can be extremely difficult to transfer into CS/BBA
            or CFM after their initial admissions for incoming first-year students from high school.
          </p>
        }
        align="right"
        noBackground>
        <div className="md:px-[calc(20rem/16)] lg:px-[calc(40rem/16)] xl:px-[calc(70rem/16)]">
          <PieChart data={A13} {...pieChartProps(isMobile, pageWidth, false)} />
        </div>
      </ComponentWrapper>

      <ComponentWrapper
        heading="What program did you transfer from?"
        bodyText={
          <>
            <p>
              Most of the students who transferred into computer science from a different program transferred from either Honours Mathematics or Software
              Engineering.
            </p>
            <p>
              Math and CS share many courses in the first year of the program, thus many Math students may have realized that they have a passion for computer
              science and transferred into the program.
            </p>
            <p>
              Software Engineering and CS are programs in which the students eventually end up in similar jobs and post-grad roles, thus, some of them may have
              chosen to transfer to CS for a slightly less rigorous workload compared to that required by the Engineering faculty.
            </p>
          </>
        }
        align="left">
        <div className="md:px-[calc(20rem/16)] lg:px-[calc(40rem/16)] xl:px-[calc(70rem/16)]">
          <BarGraphHorizontal data={A13i} {...barGraphProps(isMobile, pageWidth, true)} margin={{ ...barGraphMargin, ...{ left: 120 } }} />
        </div>
      </ComponentWrapper>

      <ComponentWrapper
        heading="What term did you transfer into your program?"
        bodyText={
          <p>
            The majority of students who transferred did so during their 2A term, followed by the number of transfers in 2B and 3A tying for second place. This
            is likely due to students re-evaluating their academic and career pathway after experiencing around a year or more in their initial program.
          </p>
        }
        align="right"
        noBackground>
        <div className="md:px-[calc(20rem/16)] lg:px-[calc(40rem/16)] xl:px-[calc(70rem/16)]">
          <BarGraphVertical data={A13ii} {...barGraphProps(isMobile, pageWidth, false)} />
        </div>
      </ComponentWrapper>

      <ComponentWrapper
        heading="What were your reason(s) behind transferring?"
        bodyText={
          <p>
            A major reason behind why many of the students transferred into computer science was because they were not as interested in their previous major
            compared to their current one. Two other popular reasons for students transferring into computer science were to improve future job prospects and to
            have a more flexible schedule and course requirements.
          </p>
        }
        align="left">
        <div className="md:px-[calc(20rem/16)] lg:px-[calc(40rem/16)] xl:px-[calc(70rem/16)]">
          <BarGraphHorizontal
            data={A13iii}
            widthAlternatingLabel={1000}
            alternatingLabelSpace={200}
            lowerLabelDy="60px"
            {...barGraphProps(isMobile, pageWidth, true)}
            margin={{ ...barGraphMargin, ...{ left: 200 } }}
          />
        </div>
      </ComponentWrapper>

      <SectionWrapper title="Terms and Averages" />

      <ComponentWrapper
        heading="Who is your favourite professor at UW?"
        bodyText={
          <p>
            Three of the most popular professors amongst this year&apos;s class are <BodyLink href="https://uwflow.com/professor/alice_gao">Alice Gao</BodyLink>
            , <BodyLink href="https://uwflow.com/professor/lesley_istead">Lesley Istead</BodyLink>, and{" "}
            <BodyLink href="https://uwflow.com/professor/jeff_avery">Jeff Avery</BodyLink>. However, there is a wide variety of favoured professors amongst this
            class, and we would like to express our thanks and give an honourable mention to every single one who has dedicated their time and energy towards
            teaching us and enabling us to grow and thrive!
          </p>
        }
        align="right"
        noBackground
        wordCloud>
        <WordCloud
          data={A14}
          width={wordCloudWidth(isMobile, pageWidth)}
          height={DefaultProp.graphHeight}
          wordPadding={3}
          desktopMaxFontSize={75}
          mobileMaxFontSize={48}
          minFrequency={2}
        />
      </ComponentWrapper>

      <ComponentWrapper
        heading="Which study term did you think was the hardest?"
        bodyText={
          <p>
            Second year seemed to be the most difficult for the most students, with 2A, followed by 2B, being considered the most difficult study terms. This
            could be due to that many of the least favoured courses and courses considered to be the most difficult, such as CS 245 and MATH 239, would have
            been taken during the students&apos; 2A or 2B study term.
          </p>
        }
        align="left">
        <BarGraphVertical data={A15} {...barGraphProps(isMobile, pageWidth, true)} />
      </ComponentWrapper>

      <ComponentWrapper
        heading="Which study term did you think was the easiest?"
        bodyText={
          <>
            <p>
              The 4A and 4B study terms were considered to be the easiest study terms by a large margin. This is likely due to most of the more difficult core
              courses being finished already and students being able to take electives that they are more interested in once all the mandatory courses had been
              completed.
            </p>
            <p>
              This statistic highlights that even though classes may get harder (in 2A and 2B), it will get better after it gets worse, and that we should
              persevere through the challenges that may arise during our undergraduate careers!
            </p>
          </>
        }
        align="right"
        noBackground>
        <BarGraphVertical data={A16} {...barGraphProps(isMobile, pageWidth, false)} />
      </ComponentWrapper>

      <ComponentWrapper heading="What was your average each term?" align="left">
        <div className="center-col">
          <StackedBarGraphVertical
            width={600}
            height={400}
            keys={A17Keys}
            colorRange={[Color.lighterPink, Color.lighterOrange, Color.lightOrange, Color.lightPink, Color.pink, Color.darkPink, Color.darkerPink]}
            data={A17}
            margin={barGraphMargin}
            displayPercentage
          />
          <table>
            <thead>
              <tr>
                <th>Term</th>
                <th>Mean</th>
                <th>Min</th>
                <th>Q1</th>
                <th>Median</th>
                <th>Q3</th>
                <th>Max</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1A</td>
                <td>86.45</td>
                <td>60</td>
                <td>83.8</td>
                <td>87.2</td>
                <td>92</td>
                <td>97</td>
              </tr>
              <tr>
                <td>1B</td>
                <td>84.62</td>
                <td>60</td>
                <td>80</td>
                <td>85.2</td>
                <td>91.25</td>
                <td>99</td>
              </tr>
              <tr>
                <td>2A</td>
                <td>82.89</td>
                <td>59.4</td>
                <td>77</td>
                <td>85.3</td>
                <td>90</td>
                <td>97.2</td>
              </tr>
              <tr>
                <td>2B</td>
                <td>87.96</td>
                <td>53.8</td>
                <td>83.55</td>
                <td>90</td>
                <td>94</td>
                <td>98</td>
              </tr>
              <tr>
                <td>3A</td>
                <td>88.52</td>
                <td>63</td>
                <td>85.2</td>
                <td>90.8</td>
                <td>94</td>
                <td>98.71</td>
              </tr>
              <tr>
                <td>3B</td>
                <td>88.33</td>
                <td>64.33</td>
                <td>85</td>
                <td>89.63</td>
                <td>93.63</td>
                <td>99</td>
              </tr>
              <tr>
                <td>4A</td>
                <td>87.11</td>
                <td>65</td>
                <td>83</td>
                <td>88</td>
                <td>92</td>
                <td>97</td>
              </tr>
              <tr>
                <td>4B</td>
                <td>86.59</td>
                <td>68.67</td>
                <td>81</td>
                <td>88.38</td>
                <td>92</td>
                <td>99.5</td>
              </tr>
              <tr>
                <td>5A</td>
                <td>93.17</td>
                <td>90.6</td>
                <td>92</td>
                <td>93.2</td>
                <td>94</td>
                <td>96</td>
              </tr>
              <tr>
                <td>5B</td>
                <td>84.4</td>
                <td>80</td>
                <td>80</td>
                <td>84.4</td>
                <td>88.8</td>
                <td>88.8</td>
              </tr>
            </tbody>
          </table>
        </div>
      </ComponentWrapper>

      <ComponentWrapper heading="What is your cumulative average?" align="left" noBackground>
        <BarGraphHorizontal data={A18} width={barGraphWidth(isMobile, pageWidth)} height={DefaultProp.graphHeight} margin={barGraphMargin} />
        <span>mean: 86.137 | min: 70 | Q1: 80.99 | median: 88 | Q3: 91.14 | max: 96.53</span>
      </ComponentWrapper>

      <ComponentWrapper heading="What is your faculty average?" align="right">
        <BarGraphHorizontal data={A19} width={barGraphWidth(isMobile, pageWidth)} height={DefaultProp.graphHeight} margin={barGraphMargin} background />
        <span>mean: 86.402 | min: 65.26 | Q1: 82.355 | median: 88 | Q3: 92 | max: 97.4</span>
      </ComponentWrapper>

      <ComponentWrapper
        heading="Did you complete an option, specialization and/or minor?"
        bodyText={
          <p>
            43% of respondents did complete an option, specialization, and/or minor during their undergraduate career. These are different ways in which you can
            customize and add to your degree, depending on what electives you decide to take!
          </p>
        }
        align="left"
        noBackground>
        <div className="md:px-[calc(20rem/16)] lg:px-[calc(40rem/16)] xl:px-[calc(70rem/16)]">
          <PieChart data={A20} {...pieChartProps(isMobile, pageWidth, false)} />
        </div>
      </ComponentWrapper>

      <ComponentWrapper heading="Which option(s) did you complete?" align="right" wordCloud>
        <WordCloud
          data={A20i}
          width={wordCloudWidth(isMobile, pageWidth)}
          height={DefaultProp.graphHeight}
          wordPadding={7}
          desktopMaxFontSize={75}
          mobileMaxFontSize={30}
          background
        />
      </ComponentWrapper>

      <ComponentWrapper heading="Which minor(s) did you complete?" align="right" noBackground>
        <WordCloud
          data={A20ii}
          width={wordCloudWidth(isMobile, pageWidth)}
          height={DefaultProp.graphHeight}
          wordPadding={7}
          desktopMaxFontSize={75}
          mobileMaxFontSize={30}
        />
      </ComponentWrapper>

      <ComponentWrapper heading="Which specialization(s) did you complete?" align="left" wordCloud>
        <WordCloud
          data={A20iii}
          width={wordCloudWidth(isMobile, pageWidth)}
          height={DefaultProp.graphHeight}
          wordPadding={7}
          desktopMaxFontSize={75}
          mobileMaxFontSize={30}
          background
        />
      </ComponentWrapper>

      <ComponentWrapper heading="What made you want to complete the option, specialization, and/or minor?" align="left" noBackground>
        <div className="flex flex-col gap-[calc(48rem/16)] m-[calc(32rem/16)]">
          <QuotationCarousel data={A20iv} circleDiameter={0} height={300} />
        </div>
      </ComponentWrapper>

      <ComponentWrapper
        heading="How many overloaded terms did you take (6 or more courses in one term)?"
        bodyText={
          <p>
            59% of respondents did not take any overloaded terms. Overloading your term can be very challenging, as it increases your workload greatly. However,
            it is still possible, as 27% of all of the respondents overloaded one or two terms, while 13% overloaded 3 or more terms, with some of them
            overloading 6 terms!
          </p>
        }
        align="right">
        <BarGraphVertical data={A21} {...barGraphProps(isMobile, pageWidth, true)} />
      </ComponentWrapper>

      <ComponentWrapper
        heading="How many courses have you failed?"
        bodyText={
          <p>
            Most of the class completed their degree without failing any courses, at 83% of the respondents, but given that some of them did fail at least one
            course but still obtained their degree, it&apos;s not the end if you fail one or a few of your courses!
          </p>
        }
        align="left"
        noBackground>
        <div className="md:px-[calc(20rem/16)] lg:px-[calc(40rem/16)] xl:px-[calc(70rem/16)]">
          <BarGraphVertical data={A22} {...barGraphProps(isMobile, pageWidth, false)} />
        </div>
      </ComponentWrapper>

      <ComponentWrapper
        heading="How many midterms/finals have you failed?"
        bodyText={
          <p>
            Like previously, most of the class did not fail any midterms or finals, at 65% of the respondents, but this number is a lot lower than the number of
            people who did not fail any courses, meaning that even if you do fail a large exam, it doesn&apos;t mean that you will fail your course - as long as
            you put in the effort for the rest of the course. Regardless, no matter if you fail one or a few exams, it&apos;s still not over!
          </p>
        }
        align="right">
        <BarGraphVertical data={A23} {...barGraphProps(isMobile, pageWidth, true)} />
      </ComponentWrapper>

      <SectionWrapper title="Exchange" />

      <ComponentWrapper
        heading="Did you take any exchange terms?"
        bodyText={
          <p>
            Most of the class did not take any exchange terms, but a small minority, at 9% of respondents, did. Taking an exchange term is an opportunity for
            students to study for a term in a completely different environment, in a foreign country, that they can start applying to in their second year.
          </p>
        }
        align="left"
        noBackground>
        <div className="md:px-[calc(20rem/16)] lg:px-[calc(40rem/16)] xl:px-[calc(70rem/16)]">
          <PieChart data={A24} {...pieChartProps(isMobile, pageWidth, false)} />
        </div>
      </ComponentWrapper>

      <ComponentWrapper
        heading="What term did you take an exchange in?"
        bodyText={
          <p>
            It seems as though taking an exchange term is popular later on in this year&apos;s students&apos; undergraduate careers, as 91% of those who took an
            exchange term took it in either term 4A or 4B.
          </p>
        }
        align="right">
        <div className="md:px-[calc(20rem/16)] lg:px-[calc(40rem/16)] xl:px-[calc(70rem/16)]">
          <PieChart data={A24i} {...pieChartProps(isMobile, pageWidth, true)} />
        </div>
      </ComponentWrapper>

      <ComponentWrapper
        heading="Where did you take your exchange term?"
        bodyText={
          <p>
            The most popular country in which students took an exchange term was Singapore, followed by Switzerland and the Netherlands. Even though various
            students took an exchange term in the same country, they generally attended different schools, with the two most popular universities being the
            National University of Singapore and the Technical University of Delft (in the Netherlands).
          </p>
        }
        align="left"
        noBackground>
        <div className="flex flex-col gap-[calc(48rem/16)] m-[calc(32rem/16)]">
          <QuotationCarousel data={A24ii} circleDiameter={0} height={300} />
        </div>
      </ComponentWrapper>

      <ComponentWrapper heading="What was the hardest thing about going on exchange?" align="right">
        <div className="flex flex-col gap-[calc(48rem/16)] m-[calc(32rem/16)]">
          <QuotationCarousel data={A24iii} circleDiameter={0} height={300} />
        </div>
      </ComponentWrapper>

      <ComponentWrapper heading="What is your favourite memory from your time during the exchange?" align="right" noBackground>
        <div className="flex flex-col gap-[calc(48rem/16)] m-[calc(32rem/16)]">
          <QuotationCarousel data={A24iv} circleDiameter={0} height={300} />
        </div>
      </ComponentWrapper>

      <ComponentWrapper
        heading="What residence did you live in your first year?"
        bodyText={
          <p>
            Most of the respondents lived at Village 1 during their first year, at 31% of the class. This is followed by UW Place in second place, at 16%, and
            Ron Eydt Village in third, at 9% of the class. This makes sense, as these are three of the largest capacity residences on campus, with V1 holding
            1300+ residents, UW Place holding 1600+ residents, and REV holding almost 1000 residents.
          </p>
        }
        align="left"
        wordCloud>
        <WordCloud
          data={A25}
          width={wordCloudWidth(isMobile, pageWidth)}
          height={DefaultProp.graphHeight}
          wordPadding={7}
          desktopMaxFontSize={60}
          mobileMaxFontSize={30}
          background
        />
      </ComponentWrapper>

      <ComponentWrapper
        heading="Have you done a URA (Undergraduate Research Assistantship)?"
        bodyText={
          <p>
            While the majority of the class has not done a URA, 20% of them have undertaken an URA, which is a program that allows students to undertake a
            10-week part-time research opportunity during a study term.
          </p>
        }
        align="right"
        noBackground>
        <div className="md:px-[calc(20rem/16)] lg:px-[calc(40rem/16)] xl:px-[calc(70rem/16)]">
          <PieChart data={A26} {...pieChartProps(isMobile, pageWidth, false)} />
        </div>
      </ComponentWrapper>

      <BottomNav leftPage={pageRoutes.demographics} rightPage={pageRoutes.computerScienceExperience} />
    </div>
  );
}
