"use client";

import { BarGraphHorizontal, BarGraphVertical } from "@/components/BarGraph";
import { BottomNav } from "@/components/BottomNav";
import { ComponentWrapper } from "@/components/ComponentWrapper";
import { Header } from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import { PieChart } from "@/components/PieChart";
import { WordCloud } from "@/components/WordCloud";
import { L1, L10, L11, L12, L13, L14, L15, L16, L17, L18, L19, L2, L20, L21, L3, L4, L5, L6, L7, L8, L9 } from "@/data/lifestyle-and-interests";
import { pageRoutes } from "@/data/routes";
import { DefaultProp, barGraphMargin, barGraphProps, barGraphWidth, pieChartProps } from "@/utils/defaultProps";
import { useWindowDimensions } from "@/utils/getWindowDimensions";
import { useIsMobile } from "@/utils/isMobile";

export default function LifestyleAndInterests() {
  const pageWidth = useWindowDimensions().width;
  const isMobile = useIsMobile();

  return (
    <div className="flex flex-col items-center">
      <Header />
      <PageHeader name="lifestyle-and-interests" alt="Lifestyle and Interests" />

      <ComponentWrapper
        heading="How did your outlook on religion change during university?"
        bodyText={
          <p>
            Similar to previous years, most students were never religious. Of those that remained the same, however, there was a portion of students who were
            previously religious but are no longer.
          </p>
        }
        align="left">
        <BarGraphHorizontal data={L1} {...barGraphProps(isMobile, pageWidth, true)} margin={{ ...barGraphMargin, left: 200 }} />
      </ComponentWrapper>

      <ComponentWrapper
        heading="Did you learn how to cook during university?"
        bodyText={
          <>
            <p>
              Cooking is often a challenge for many new university students. Having lived in the comfort of home for so long, learning to cook is a new struggle
              that many face.
            </p>
            <p>
              However, UW CS students have adapted to overcome this struggle, with 83 of the 135 learning how to cook during university! Only 10 have never
              learned how to cook, with the rest already having prior knowledge.
            </p>
          </>
        }
        align="right"
        noBackground>
        <div className="md:px-[calc(20rem/16)] lg:px-[calc(40rem/16)] xl:px-[calc(70rem/16)]">
          <PieChart data={L2} {...pieChartProps(isMobile, pageWidth)} />
        </div>
      </ComponentWrapper>

      <ComponentWrapper
        heading="How frequently did you cook for yourself?"
        bodyText={
          <p>
            Practice makes perfect, especially with cooking. Most students cook for themselves every week with a handful never doing so. Other students fall
            into the categories of every few weeks, monthly, or once every few months.
          </p>
        }
        align="left">
        <BarGraphVertical data={L3} {...barGraphProps(isMobile, pageWidth, true)} lowerLabelDy="0" />
      </ComponentWrapper>

      <ComponentWrapper
        heading="How many days in a week were you physically active in a week?"
        bodyText={
          <p>
            Just like in 2022, Waterloo students achieve excellence again by beating the stereotypes and being active several days per week. CS students know
            when to code hard but also when it&apos;s time to go to the gym.
          </p>
        }
        align="right"
        noBackground>
        <div className="center-col">
          <BarGraphVertical data={L4} {...barGraphProps(isMobile, pageWidth)} lowerLabelDy="0" />
          <span>mean: 3.129 | min: 1 | Q1: 2 | median: 3 | Q3: 4 | max: 7</span>
        </div>
      </ComponentWrapper>

      <ComponentWrapper
        heading="Did you feel like you had time to pursue your hobbies?"
        bodyText={
          <>
            <p>
              Contrary to last year, there was a significant difference between those who did and those who do not. This year, 76 said they either agreed or
              strongly agreed, while 35 said they disagreed or strongly disagreed.
            </p>
            <p>Pursuing hobbies outside of school is a great way to de-stress and put your time and energy into something you love! </p>
          </>
        }
        align="left">
        <BarGraphVertical data={L5} {...barGraphProps(isMobile, pageWidth, true)} />
      </ComponentWrapper>

      <ComponentWrapper
        heading="How often did you attend parties/gatherings?"
        bodyText={
          <>
            <p>
              Parties are a fun event to relieve stress, meet some new people, and dance the night away. Waterloo students are no exception and many students
              like to attend a party every now and then.
            </p>
            <p>Whether it is to celebrate or find some new people, remember always to be safe and plan getting home!</p>
          </>
        }
        align="right"
        noBackground>
        <BarGraphHorizontal
          data={L6}
          width={barGraphWidth(isMobile, pageWidth)}
          height={DefaultProp.graphHeight}
          margin={{ ...barGraphMargin, ...{ left: 240 } }}
        />
      </ComponentWrapper>

      <ComponentWrapper
        heading="What time do you usually go to sleep?"
        bodyText={
          <p>
            Sleep schedule? What&apos;s that? Waterloo students see the perfect sleeping time between 1 AM to 3 AM. Who wants to be an early bird when you can
            be a night owl?{" "}
          </p>
        }
        align="left">
        <BarGraphVertical data={L7} {...barGraphProps(isMobile, pageWidth, true)} />
      </ComponentWrapper>

      <ComponentWrapper
        heading="How many hours of sleep do you get on average per night?"
        bodyText={
          <p>
            Sleep is very important! A healthy body is a healthy mind. Most students get 7+ hours every night! With the average time Waterloo students are
            sleeping, and the amount of sleep they get, it is safe to say that not many people like morning classes.
          </p>
        }
        align="right"
        noBackground>
        <div className="center-col">
          <BarGraphVertical data={L8} {...barGraphProps(isMobile, pageWidth)} />
          <span>mean: 7.229 | min: 0 | Q1: 7 | median: 7 | Q3: 8 | max: 12</span>
        </div>
      </ComponentWrapper>

      <ComponentWrapper
        heading="How often did you pull all-nighters throughout university?"
        bodyText={
          <>
            <p>
              To the lucky ones that haven&apos;t, those who have don&apos;t wish it upon you. Whether it be splashing cold water on your face, chugging down
              energy drinks, or drinking cold coffee, one must do what they gotta do to stay awake.
            </p>
            <p>While 56 students have never pulled an all-nighter, about 70 students go through the struggle every few weeks or months.</p>
          </>
        }
        align="left">
        <BarGraphVertical data={L9} {...barGraphProps(isMobile, pageWidth, true)} />
      </ComponentWrapper>

      <ComponentWrapper
        heading="While on campus, how many days of the week do you eat out at a restaurant?"
        bodyText={
          <p>
            Whether it be at the Waterloo Plaza, King Street, or Uptown, Waterloo has a wide variety of restaurants for anything you are craving. We have
            Waterloo icons like Lazeez still standing after so many years and new ones being opened every term. Make sure to check them out!{" "}
          </p>
        }
        align="right"
        noBackground>
        <div className="center-col">
          <BarGraphVertical data={L10} {...barGraphProps(isMobile, pageWidth)} lowerLabelDy="0" />
          <span>mean: 2.992 | min: 0 | Q1: 2 | median: 3 | Q3: 4 | max: 7</span>
        </div>
      </ComponentWrapper>

      <ComponentWrapper
        heading="What is your favourite restaurant to go to on/around campus?"
        bodyText={
          <p>
            Gol&apos;s Noodles seems to be many people&apos;s go-to restaurant in Waterloo. With its affordable prices and diverse menu, no wonder it&apos;s a
            Waterloo favourite!
          </p>
        }
        align="left"
        wordCloud>
        <WordCloud
          data={L11}
          width={isMobile ? pageWidth / 1.5 : 800}
          height={DefaultProp.graphHeight}
          wordPadding={7}
          desktopMaxFontSize={75}
          mobileMaxFontSize={48}
          minFrequency={2}
          background
        />
      </ComponentWrapper>

      <ComponentWrapper
        heading="Which extracurricular activities did you participate in?"
        bodyText={
          <p>
            Waterloo has over 200+ clubs! Make sure to definitely check out clubs by finding their Instagram pages, and posters, or finding them during club
            day! There is a club for almost everything, and if you can&apos;t find a club, start one!
          </p>
        }
        align="right"
        noBackground
        wordCloud>
        <WordCloud
          data={L12}
          width={isMobile ? pageWidth / 1.5 : 800}
          height={DefaultProp.graphHeight}
          wordPadding={7}
          desktopMaxFontSize={75}
          mobileMaxFontSize={48}
          minFrequency={2}
        />
      </ComponentWrapper>

      <ComponentWrapper
        heading="Where is your favourite place to study on campus?"
        bodyText={
          <>
            <p>
              MC and DC seem to be student&apos;s favourite places to study on campus. This makes sense as most Math faculty students have most of their classes
              in these two iconic buildings.
            </p>
            <p>Make sure to still explore different parts of campus every now and then to potentially find your new favourite place</p>
          </>
        }
        align="left">
        <BarGraphHorizontal
          data={L13}
          width={barGraphWidth(isMobile, pageWidth)}
          height={DefaultProp.graphHeight}
          margin={{ ...barGraphMargin, ...{ left: 64 } }}
          background
        />
      </ComponentWrapper>

      <ComponentWrapper
        heading="What are your hobbies?"
        bodyText={
          <p>
            Waterloo students have a variety of hobbies, but video games and reading top them all! After a long day of leetcoding and math, coming home to hop
            on a game with your friends or read a nice book makes the endless suffering just a little bit more worth it.
          </p>
        }
        align="right"
        noBackground
        wordCloud>
        <WordCloud
          data={L14}
          width={isMobile ? pageWidth / 1.5 : 800}
          height={DefaultProp.graphHeight}
          wordPadding={7}
          desktopMaxFontSize={75}
          mobileMaxFontSize={48}
        />
      </ComponentWrapper>

      <ComponentWrapper
        heading="How many different countries did you visit outside of Canada during university?"
        bodyText={
          <>
            <p>
              Waterloo students love to travel! During the breaks in between terms, getting an opportunity to visit a new country and potentially experience a
              new culture is an unforgettable experience.
            </p>
            <p>Most Waterloo students have visited at least visited 1 country outside of Canada during their time here.</p>
          </>
        }
        align="left">
        <div className="center-col">
          <BarGraphVertical data={L15} {...barGraphProps(isMobile, pageWidth, true)} lowerLabelDy="0" />
          <span>mean: 2.556 | min: 0 | Q1: 1 | median: 1 | Q3: 3 | max: 22</span>
        </div>
      </ComponentWrapper>

      <ComponentWrapper
        heading="What is your favourite bubble tea restaurant in or around UW?"
        bodyText={<p>The Alley and CoCo are most people&apos;s favourite bubble tea restaurants in or around Waterloo. What&apos;s your favourite drink?</p>}
        align="right"
        noBackground>
        <BarGraphHorizontal
          data={L16}
          width={barGraphWidth(isMobile, pageWidth + 5)}
          height={DefaultProp.graphHeight}
          margin={{ ...barGraphMargin, ...{ left: 150 } }}
        />
      </ComponentWrapper>

      <ComponentWrapper
        heading="What is your favourite shawarma restaurant in or around UW?"
        bodyText={
          <p>
            Coming in first place is Shawarma Plus, with Lazeez in a close second, and iPotato in third. Shawarma is a popular Middle Eastern dish that often
            consists of a choice of marinated meat, some form of carbs, and vegetables.
          </p>
        }
        align="left">
        <BarGraphHorizontal
          data={L17}
          width={barGraphWidth(isMobile, pageWidth)}
          height={DefaultProp.graphHeight}
          margin={{ ...barGraphMargin, ...{ left: 150 } }}
          background
        />
      </ComponentWrapper>

      <ComponentWrapper
        heading="How much time do you spend on the r/uwaterloo subreddit?"
        bodyText={
          <>
            <p>
              If you have ever had a question or want to meet some amazing other people, the r/uwaterloo subreddit is a great way to do so! Many students check
              out the subreddit a few times a week or daily.
            </p>
            <p>Whether you have co-op questions, wondering what a good bird course is, or looking for a roommate, look no further than the UW subreddit!</p>
          </>
        }
        align="right"
        noBackground>
        <BarGraphVertical data={L18} {...barGraphProps(isMobile, pageWidth)} lowerLabelDy="0" />
      </ComponentWrapper>

      <ComponentWrapper
        heading="How many friends throughout university were also in CS / CS/BBA / CFM?"
        bodyText={
          <p>
            Struggling to pass a course together with your friends is just a fun yet painful experience that you can&apos;t beat. Most Waterloo students have
            friends in CS, CS/BBA, or CFM as many share the same classes together.
          </p>
        }
        align="left">
        <BarGraphVertical data={L19} {...barGraphProps(isMobile, pageWidth, true)} lowerLabelDy="0" />
      </ComponentWrapper>

      <ComponentWrapper
        heading="How often do you keep in touch with high school friends?"
        bodyText={
          <p>
            For students who travel far to come to Waterloo, keeping in touch with old high school friends can be tough. However, most Waterloo students do a
            great job at this by regularly checking in and chatting with old friends.
          </p>
        }
        align="right"
        noBackground>
        <BarGraphVertical data={L20} {...barGraphProps(isMobile, pageWidth)} lowerLabelDy="0" />
      </ComponentWrapper>

      <ComponentWrapper
        heading="Where did you meet most of your friends?"
        bodyText={
          <p>
            Although orientation can be a great time to meet people, most students find their friends from extracurriculars, mutual friends, and old friends
            from high school. Although there is time to study, there&apos;s a time to touch some grass and meet some new people! Once university is over, the
            knowledge learned may disappear, but the friendships built can last forever.
          </p>
        }
        align="left"
        wordCloud>
        <WordCloud
          data={L21}
          width={isMobile ? pageWidth / 1.5 : 800}
          height={DefaultProp.graphHeight}
          wordPadding={7}
          desktopMaxFontSize={75}
          mobileMaxFontSize={48}
          background
        />
      </ComponentWrapper>

      <BottomNav leftPage={pageRoutes.coop} rightPage={pageRoutes.intimacyAndDrugs} />
    </div>
  );
}
