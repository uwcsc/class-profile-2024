"use client";

import { BottomNav } from "@/components/BottomNav";
import { WithBoxPlot } from "@/components/charts/BoxPlot";
import HorizontalBar, { GroupedHorizontalBar } from "@/components/charts/HorizontalBar";
import StandardChart from "@/components/charts/StandardChart";
import PageTemplate from "@/components/PageTemplate";
import { QuotationCarousel } from "@/components/QuotationCarousel";
import { I1, I2, I2i, I3, I4, I5, I6, I7, I8 } from "@/data/intimacy-and-drugs";

export default function IntimacyAndDrugs() {
  return (
    <PageTemplate name="intimacy-and-drugs" alt="Intimacy and Drugs">
      <StandardChart
        variant="dark"
        title="What drugs have you tried?"
        chart={<GroupedHorizontalBar data={I1} lines={[0, 10, 20, 30, 40]} supernarrow legend={["Yes, before university", "Yes, during university", "No"]} />}>
        <p>
          University is often the first time many students experiment with substances. The most common ones are marijuana, alcohol, and tobacco, with most
          students avoiding harder drugs. If you choose to explore, it's important to prioritize safety &mdash; always make sure you're in a safe environment
          and looking out for your well-being.
        </p>
      </StandardChart>
      <StandardChart variant="blank" title="Have you ever had sexual intercourse?" chart={<HorizontalBar data={I2} lines={[0, 10, 20]} />}>
        <p>
          For many students, university is the first opportunity to explore their sexuality, as they gain more independence and start living on their own or
          with friends. Without the restrictions of curfews or parental oversight, this newfound freedom often leads to discovering new relationships and
          aspects of their identity. It's important to go at your own pace and only take steps you're ready for &mdash; there's no rush in figuring it all out.
        </p>
      </StandardChart>
      <StandardChart
        variant="light"
        title="If so, in which term did you first have sexual intercourse?"
        chart={<HorizontalBar data={I2i} lines={[0, 2, 4, 6]} narrow />}>
        <p>
          For most students, the experience of losing their virginity happens either before university or during their third year. It's a deeply personal
          journey, and everyone's timeline is unique. What's most important is feeling comfortable with your own choices and ensuring you're in a safe and
          consensual environment.
        </p>
      </StandardChart>
      <StandardChart variant="blank" title="How many relationships have you been in during university?" chart={<HorizontalBar data={I3} lines={[0, 10, 20]} />}>
        <p>The majority of our respondents have been in either 0 or 1 relationships during their undergraduate career.</p>
      </StandardChart>
      <StandardChart variant="dark" title="How many sexual partners have you had during university?" chart={<HorizontalBar data={I4} lines={[0, 10, 20]} />}>
        <p>Similar to the number of relationships, most students had either zero or one sexual partner during their time at university.</p>
      </StandardChart>
      <StandardChart
        variant="blank"
        title="How much time did you spend in a relationship during university?"
        chart={<HorizontalBar data={I5} lines={[0, 10, 20]} />}>
        <p>
          Maintaining relationships during university can be challenging with the heavy course load and busy schedules, but where there's a will, there's a way!
          This year, most relationships tended to last between 0 to 1 years, with a smaller number lasting 2 to 4 years. A special congratulations to the 15% of
          relationships that made it past the 4-year mark &mdash; proof that love can thrive even amidst the demands of university life!
        </p>
      </StandardChart>
      <StandardChart variant="light" title="Have you ever been involved in a cheating situation?" chart={<HorizontalBar data={I6} lines={[0, 10, 20, 30]} />}>
        <p>Almost all of our respondents have never been in any cheating situations before.</p>
      </StandardChart>
      <StandardChart variant="blank" title="What is your Rice Purity score?" chart={
        <WithBoxPlot points={[27, 45, 53, 74, 97, 58.82]}>
	  <HorizontalBar data={I7} lines={[0, 1, 2, 3]} narrow />
        </WithBoxPlot>
      }>
        <p>
          The Rice Purity test is a 100-question survey designed to measure a person's level of "innocence" based on their experiences, covering topics from
          relationships to substances and more. A higher score represents more purity. This year, three respondents shared the same score of 45. Among all the
          responses, the lowest score was 27, and the highest was 97, reflecting the wide range of experiences within the student body.
        </p>
      </StandardChart>
      <StandardChart variant="dark" title="Do you have any advice for people looking for a relationship?" chart={<QuotationCarousel data={I8} height={750} />}>
        <p>
          Most of the advice shared highlighted the importance of self-confidence and the belief that relationships will naturally develop over time. Rather
          than forcing a connection, the key is to focus on being comfortable with yourself and letting things unfold when the right person comes along.
        </p>
      </StandardChart>
      <BottomNav leftPage={{ name: "Lifestyle and Interests", url: "/lifestyle-and-interests" }} rightPage={{ name: "Postgrad + Full-Time", url: "/postgrad-and-full-time" }} />
    </PageTemplate>
  );
}
