"use client";

import { WithBoxPlot } from "@/components/charts/BoxPlot";
import HorizontalBar, { GroupedHorizontalBar } from "@/components/charts/HorizontalBar";
import StandardChart from "@/components/charts/StandardChart";
import PageTemplate from "@/components/PageTemplate";
import { G1, G2, G3, G4, G5, G6, G7, G8, G9 } from "@/data/postgrad-and-full-time";

export default function FullTime() {
  return (
    <PageTemplate name="postgrad-and-full-time" alt="Postgrad + Full-Time">
      <StandardChart variant="dark" title="Do you plan on pursuing post-graduate education?" chart={<HorizontalBar data={G1} lines={[0, 10, 20]} />}>
        <p>
          Out of 48 respondents, more than half are not planning to pursue post-graduate education. A few are considering continuing their studies through a
          Master's or a combined Master's/PhD program. Meanwhile, a significant portion remains undecided about whether they will pursue further education after
          graduation. Post-graduate education is an option, but does not have to be everyone's pathway!
        </p>
      </StandardChart>
      <StandardChart variant="blank" title="Have you secured a full-time position post-grad?" chart={<HorizontalBar data={G2} lines={[0, 10, 20, 30]} />}>
        <p>
          75% of graduates have secured a full-time position after graduation. Whether through return offers or new opportunities, it's clear that the co-op
          experience proves valuable in helping students land jobs. For the remaining 25%, the search continues, but with the skills and experience gained
          during their studies, they're well-equipped to find opportunities in the near future.
        </p>
      </StandardChart>
      <StandardChart
        variant="light"
        title="How many onsites/interviews did you get?"
        chart={
          <WithBoxPlot points={[0, 1, 3, 4, 12, 2.97]}>
            <HorizontalBar data={G3} lines={[0, 2, 4, 6]} narrow />
          </WithBoxPlot>
        }>
        <p>
          Out of 35 respondents, 29 students reported having at least one interview, with most securing multiple opportunities. One student even had as many as
          12 interviews. Meanwhile, 6 students did not receive any interviews, possibly due to accepting a return offer from a previous co-op placement or other
          factors. The interview process remains a key part of the post-grad job search for many.
        </p>
      </StandardChart>
      <StandardChart
        variant="blank"
        title="How many offers did you decide between?"
        chart={
          <WithBoxPlot points={[0, 1, 2, 3, 5, 1.97]}>
            <HorizontalBar data={G4} lines={[0, 5, 10, 15]} narrow />
          </WithBoxPlot>
        }>
        <p>There was some variance in the number of offers people got, but most people had more than one to choose from!</p>
      </StandardChart>
      <StandardChart variant="dark" title="What company will you be working for post-grad?" chart={<HorizontalBar data={G5} lines={[0, 2, 4]} supernarrow />}>
        <p>
          More than 60% of the students have secured a full time position and will be working post-grad. Meta is the most popular choice among the students.
        </p>
      </StandardChart>
      <StandardChart variant="blank" title="Where will you be working post-grad?" chart={<HorizontalBar data={G6} lines={[0, 5, 10]} />}>
        <p>
          California and the East Coast USA are the top post-grad destinations, reflecting the strong draw of tech hubs like Silicon Valley and New York. Remote
          work is gaining traction, while Toronto also remains a popular choice. Smaller groups are heading to places like the Pacific Northwest USA and
          Kitchener/Waterloo.
        </p>
      </StandardChart>
      <StandardChart variant="light" title="Are you returning to a prior co-op?" chart={<HorizontalBar data={G7} lines={[0, 10, 20]} />}>
        <p>
          More than 65% of the respondents are returning to their co-op employers. This data highlights how co-op programs allow students to explore different
          roles and company cultures early in their careers. Additionally, co-op experiences help build valuable connections that can be leveraged for securing
          future full-time opportunities.
        </p>
      </StandardChart>
      <StandardChart
        variant="blank"
        title="What will be your first year total compensation in CAD?"
        chart={<GroupedHorizontalBar data={G8} lines={[0, 5, 10, 15]} legend={["In Canada", "Outside of Canada"]} />}>
        <p>
          The world of tech offers intriguing annual compensation and salary options. These compensation packages encompass a mix of components, including
          salary, signing bonuses, first-year stock options, and more.
        </p>
        <p>
          For those working outside of Canada, with a majority of them working in the USA, their first-year total compensation is significantly higher than
          working in Canada. This disparity highlights the competitive nature of the international tech job market and the opportunities available for
          individuals willing to explore opportunities abroad.
        </p>
      </StandardChart>
      <StandardChart variant="dark" title="What field/career path will you be in post-grad?" chart={<HorizontalBar data={G9} lines={[0, 10, 20, 30]} narrow />}>
        <p>
          Over 85% of respondents chose software development as their post-grad career path! It's exciting to see others branching into areas like AI, cloud
          computing, web development, and even finance! Undergraduate years offer a unique opportunity to explore diverse fields and discover new interests.
        </p>
      </StandardChart>
    </PageTemplate>
  );
}
