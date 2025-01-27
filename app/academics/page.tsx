"use client";

import BoxPlot, { WithBoxPlot } from "@/components/charts/BoxPlot";
import HorizontalBar, { GroupedHorizontalBar } from "@/components/charts/HorizontalBar";
import Pie from "@/components/charts/Pie";
import StandardChart from "@/components/charts/StandardChart";
import PageTemplate from "@/components/PageTemplate";
import { QuotationCarousel } from "@/components/QuotationCarousel";
import {
  A1,
  A10,
  A11,
  A11i,
  A11ii,
  A11iii,
  A12,
  A13,
  A14,
  A15,
  A16,
  A17,
  A18,
  A19,
  A2,
  A20,
  A21,
  A22,
  A23,
  A23i,
  A23ii,
  A23iii,
  A23iv,
  A24,
  A25,
  A3,
  A4,
  A4c,
  A5,
  A5c,
  A6,
  A7,
  A8,
  A9,
} from "@/data/academics";
import { Fragment, useState } from "react";

function flowCourseTransform(text: string) {
  const laurier = text.match(/^(BU)/);

  if (!text.includes(" "))
    return (
      <a href={`https://${laurier ? "laurierflow.ca" : "uwflow.com"}/explore?q=${text}`} target="_blank">
        {text}
      </a>
    );

  const [subj, rest] = text.split(" ");
  const codes = rest.split("/");

  return (
    <span className="whitespace-nowrap">
      {codes.map((code, i) => (
        <Fragment key={code}>
          {i === 0 ? "" : "/"}
          <a
            href={`https://${laurier ? "laurierflow.ca" : "uwflow.com"}/course/${subj.toLowerCase()}${laurier ? " " : ""}${code}`}
            target="_blank"
            className={i === 0 ? "" : "-ml-1"}>
            {i === 0 ? subj.toUpperCase() : ""} {code}
          </a>
        </Fragment>
      ))}
    </span>
  );
}

export default function Academics() {
  const [fullCharts, setFullCharts] = useState(false);

  const ToggleFullCharts = () => (
    <div className="flex items-center gap-2">
      <button className="bg-darker-pink border border-black rounded-md px-3 py-1 mt-2" onClick={() => setFullCharts(() => !fullCharts)}>
        {fullCharts ? "Show Compressed Charts" : "Show Full Charts"}
      </button>
    </div>
  );

  return (
    <PageTemplate name="academics" alt="Academics">
      <StandardChart variant="dark" title="What category of electives for your degree did you enjoy the most?" chart={<Pie data={A1} />}>
        <p>
          People were allowed to select multiple categories. 23 people enjoyed Social Sciences, 20 Communications and Humanities courses, 5 Pure Science, and
          only 2 Applied Science. The popularity of these subjects is likely due to vastly different content from that taught in Math and CS courses, providing
          a break from the required courses.
        </p>
      </StandardChart>
      <StandardChart
        variant="blank"
        title="Which CS course was your favorite?"
        chart={<HorizontalBar data={A2} lines={[0, 2, 4, 6]} narrow textTransform={flowCourseTransform} />}>
        <p>
          We saw a nice distribution of favored CS courses, though people seemed to especially like{" "}
          <b>{flowCourseTransform("CS 135/145")} Functional Programs</b>, <b>{flowCourseTransform("CS 246/246E")} Object-Oriented Software Development</b>, and{" "}
          <b>{flowCourseTransform("CS 343")} Concurrent &amp; Parallel Programming</b>.
        </p>
      </StandardChart>
      <StandardChart
        variant="light"
        title="Which CS course was your least favorite?"
        chart={<HorizontalBar data={A3} lines={[0, 5, 10]} narrow textTransform={flowCourseTransform} />}>
        <p>
          A couple of courses seemed to be particularly unpopular, with <b>{flowCourseTransform("CS 245/245E")} Logic &amp; Computation</b> being at the top of
          disliked courses and <b>{flowCourseTransform("CS 350")} Operating Systems</b> and{" "}
          <b>{flowCourseTransform("CS 240")} Data Structures & Data Management</b> close behind. This is likely due to their difficulty and the fact that they
          are required courses. <b>{flowCourseTransform("CS 490")} Information Systems Management</b>, a CS elective, was also fairly unpopular with 7 people
          naming it as their least favorite course.
        </p>
      </StandardChart>
      <StandardChart
        variant="blank"
        title="Which non-CS course was your favorite?"
        chart={<HorizontalBar data={fullCharts ? A4 : A4c} lines={[0, 5, 10]} narrow textTransform={flowCourseTransform} />}>
        <p>
          There is always a very wide variety of favorite electives given the vast selection of choices at UW and the diverse interests and passions of each
          student. A couple of courses stand out, with 4 students stating that <b>{flowCourseTransform("CO 487")} Applied Cryptography</b> was their favorite
          and 3 stating <b>{flowCourseTransform("ECON 212")} Introduction to Game Theory</b> as theirs. The <b>{flowCourseTransform("BU")}</b> subject is
          Laurier's code for business courses.
        </p>
        <ToggleFullCharts />
      </StandardChart>
      <StandardChart
        variant="dark"
        title="Which non-CS course was your least favorite?"
        chart={<HorizontalBar data={fullCharts ? A5 : A5c} lines={[0, 5, 10]} narrow textTransform={flowCourseTransform} />}>
        <p>
          <b>{flowCourseTransform("STAT 231")} Statistics</b> was the least popular non-CS course by far. This course teaches fundamentals of statistics, but
          the content is quite difficult and it is a required course. As of January 2025, it only has a 40% Liked rating on UWFlow.
        </p>
        <ToggleFullCharts />
      </StandardChart>
      <StandardChart
        variant="blank"
        title="What is the hardest course you have taken?"
        chart={<HorizontalBar data={A6} lines={[0, 5, 10]} narrow textTransform={flowCourseTransform} />}>
        <p>
          Many people found <b>{flowCourseTransform("MATH 239")} Introduction to Combinatorics</b> to be particularly difficult, and the 30% Easy rating on
          UWFlow reflects this. <b>{flowCourseTransform("CS 341")} Algorithms</b> was also rated as fairly difficult.
        </p>
      </StandardChart>
      <StandardChart
        variant="light"
        title="What is the easiest course you have taken?"
        chart={<HorizontalBar data={A7} lines={[0, 5, 10]} narrow textTransform={flowCourseTransform} />}>
        <p>
          7 people found <b>{flowCourseTransform("CLAS 104")} Classical Mythology</b> to be the easiest. Its UWFlow ratings reflect this with a 93% Easy rating.
          Of the CS courses, 4 people found <b>{flowCourseTransform("CS 492")} The Social Implications of Computing</b> to be the easiest.
        </p>
      </StandardChart>
      <StandardChart
        variant="blank"
        title="Which course do you regret taking the most?"
        chart={<HorizontalBar data={A8} lines={[0, 2, 4]} narrow textTransform={flowCourseTransform} />}>
        <p>
          <b>{flowCourseTransform("CLAS 104")} Classical Mythology</b> was rated as the easiest by our respondents yet also had a notable 4 people say they
          regretted taking it the most. Nobody put it down as both the easiest and most regretted, but it's likely that it being a "bird course" (one you take
          for free high marks and not usefulness) and its relative lack of application and relevance contributed to this regret.
        </p>
      </StandardChart>
      <StandardChart
        variant="dark"
        title="Which course did you find the most useful?"
        chart={<HorizontalBar data={A9} lines={[0, 5, 10]} narrow textTransform={flowCourseTransform} />}>
        <p>
          A significant 12 people found <b>{flowCourseTransform("CS 341")} Algorithms</b> to be the most useful. Although it was considered the most difficult
          by the most people of all CS courses, it seems the effort paid off for most people.{" "}
          <b>{flowCourseTransform("CS 246/246E")} Object-Oriented Software Development</b> was also considered very useful in addition to being many people's
          favorite.
        </p>
      </StandardChart>
      <StandardChart
        variant="blank"
        title="Which course did you find the least useful?"
        chart={<HorizontalBar data={A10} lines={[0, 5, 10]} narrow textTransform={flowCourseTransform} />}>
        <p>
          <b>{flowCourseTransform("CS 490")} Information Systems Management</b> was stated as the least useful course to 8 people, reflecting its unpopularity
          as well with these graduates. <b>{flowCourseTransform("CS 245/245E")} Logic &amp; Computation</b>, the most unpopular CS course, was also seen as not
          very useful.
        </p>
      </StandardChart>
      <StandardChart variant="light" title="Did you transfer into your current program?" chart={<Pie data={A11} />}>
        <p>11 of our respondents transferred into their current program (all of them into CS), with 37 having not transferred and 1 not answering.</p>
      </StandardChart>
      <StandardChart variant="blank" title="What program did you transfer from?" chart={<Pie data={A11i} />}>
        <p>
          We saw 3 people transfer from Math, 2 from SE, 2 from FARM (Financial Analysis &amp; Risk Management), and 1 each from Geomatics, Engineering at
          McMaster, and CS at another university. 1 person did not specify.
        </p>
      </StandardChart>
      <StandardChart variant="dark" title="In which term did you transfer into your program?" chart={<Pie data={A11ii} />}>
        <p></p>
      </StandardChart>
      <StandardChart variant="blank" title="What were your reason(s) behind transferring?" chart={<Pie data={A11iii} />}>
        <p>
          Most people transferred for better job prospects or due to lack of interest in their previous major with 4 each. 2 people wanted the flexibility in
          the CS schedule and 1 person wanted to avoid specific courses.
        </p>
      </StandardChart>
      <StandardChart
        variant="light"
        vertical
        title="Who is your favorite professor at UW?"
        chart={
          <HorizontalBar
            data={A12}
            lines={[0, 1, 2, 3]}
            narrow
            textTransform={(text) => (
              <a href={`https://uwflow.com/professor/${text.toLowerCase().split(" ").join("_")}`} target="_blank">
                {text}
              </a>
            )}
          />
        }></StandardChart>
      <StandardChart variant="blank" title="Which study term did you think was the hardest?" chart={<HorizontalBar data={A13} lines={[0, 5, 10, 15]} narrow />}>
        <p>Many people found 2B to be difficult. A lot of the harder required 2nd-year courses show up in this term.</p>
      </StandardChart>
      <StandardChart variant="dark" title="Which study term did you think was the easiest?" chart={<HorizontalBar data={A14} lines={[0, 5, 10, 15]} narrow />}>
        <p>
          Most people found 1A or the 4th year terms to be easiest. 1A tends to have a lot of courses that will be review to people who took CS in high school
          and the later years tend to not have required courses and therefore people can take easier and more enjoyable electives.
        </p>
      </StandardChart>
      <StandardChart
        variant="blank"
        title="What was your average for each term?"
        chart={<GroupedHorizontalBar data={A15} lines={[0, 10, 20]} supernarrow legend={["70-", "70–80", "80–90", "90–95", "95+"]} />}>
        <div className="flex flex-col items-center">
          <div className="grid grid-cols-[max-content_1fr] items-center gap-2">
            <span className="mt-1.5">1A:</span>
            <BoxPlot points={[66, 81.45, 85.8, 90, 98, 84.98]} min={63} max={98.6} />
            <span className="mt-1.5">1B:</span>
            <BoxPlot points={[81, 85, 89.04, 92.1, 97.2, 88.67]} min={63} max={98.6} />
            <span className="mt-1.5">2A:</span>
            <BoxPlot points={[63, 86.9, 91, 93.79, 98.6, 89.37]} min={63} max={98.6} />
            <span className="mt-1.5">2B:</span>
            <BoxPlot points={[68, 83, 86, 88.1, 96.6, 85.91]} min={63} max={98.6} />
            <span className="mt-1.5">3A:</span>
            <BoxPlot points={[73, 86, 89.75, 93.15, 97.8, 89.18]} min={63} max={98.6} />
            <span className="mt-1.5">3B:</span>
            <BoxPlot points={[73, 82.8, 88, 91, 96.33, 87.09]} min={63} max={98.6} />
            <span className="mt-1.5">4A:</span>
            <BoxPlot points={[69, 84.44, 86.5, 89.88, 94.4, 86.06]} min={63} max={98.6} />
            <span className="mt-1.5">4B:</span>
            <BoxPlot points={[81, 82.19, 86.38, 90, 98, 87.23]} min={63} max={98.6} />
          </div>
        </div>
      </StandardChart>
      <StandardChart
        variant="light"
        title="What was your cumulative average?"
        chart={
          <WithBoxPlot points={[71, 85, 87.345, 91.1, 95.02, 87.48]}>
            <HorizontalBar data={A16} lines={[0, 5, 10, 15]} />
          </WithBoxPlot>
        }>
        <p>
          Our graduates obtained very respectable cumulative averages this term! CS is a fairly difficult program, so we're proud of everyone who completes this
          program regardless of their grade.
        </p>
      </StandardChart>
      <StandardChart
        variant="blank"
        title="What was your faculty average?"
        chart={
          <WithBoxPlot points={[70, 83.84, 87.61, 92.32, 96, 86.94]}>
            <HorizontalBar data={A17} lines={[0, 5, 10]} />
          </WithBoxPlot>
        }>
        <p>Overall, we observed a higher mean faculty average but a lower median compared to the cumulative average.</p>
      </StandardChart>
      <StandardChart variant="dark" title="Which option(s) did you complete?" chart={<Pie data={A18} />}>
        <p>
          We saw a handful of students complete some options for their education, gaining valuable experience not directly part of the major. Options are a
          great way to broaden your experiences and qualifications.
        </p>
      </StandardChart>
      <StandardChart variant="blank" title="Which minor(s) did you complete?" chart={<Pie data={A19} />}>
        <p>Minors are also a great way to customize and add to your degree and can be a valuable addition to your portfolio and resume.</p>
      </StandardChart>
      <StandardChart variant="light" title="Which specialization(s) did you complete?" chart={<Pie data={A20} rotation={Math.PI / 8} />}>
        <p>
          If you are particularly passionate about a specific topic, specializations can be a great way to focus your studies and gain depth of experience in a
          specific field.
        </p>
      </StandardChart>
      <StandardChart variant="blank" title="How many courses have you failed?" chart={<HorizontalBar data={A21} lines={[0, 10, 20, 30]} />}>
        <p>
          Most of the class graduated without failing a single course, but even if you fail one or a few of your courses, it's not the end as several of our
          respondents failed courses and still graduated!
        </p>
      </StandardChart>
      <StandardChart variant="dark" title="How many midterms/finals have you failed?" chart={<HorizontalBar data={A22} lines={[0, 10, 20, 30]} narrow />}>
        <p>
          Like previously, most people did not fail any exams, but this number is a lot lower than the number of people who failed no courses. Even if you fail
          a major exam, it doesn't mean that you will fail your course as long as you put in the effort for the rest of the course. No matter if you fail one or
          a few exams, don't give up!
        </p>
      </StandardChart>
      <StandardChart variant="blank" title="Did you take any exchange terms?" chart={<Pie data={A23} />}>
        <p>
          Most people did not take exchange terms. They can be a great opportunity to experience a new environment in a foreign country which can broaden your
          world view and give you more cultural exposure.
        </p>
      </StandardChart>
      <StandardChart variant="light" title="What term did you take your exchange in?" chart={<Pie data={A23i} />}>
        <p>Taking exchange terms seems to become popular later in people's careers, perhaps due to wanting a break from being in the same environment.</p>
      </StandardChart>
      <StandardChart variant="blank" title="Where did you take your exchange term?" chart={<QuotationCarousel data={A23ii} height={375} />}>
        <p>The UK and Singapore were popular destinations for people taking exchange terms, with many people heading to Asia for their exchange experience.</p>
      </StandardChart>
      <StandardChart variant="dark" title="What was the hardest thing about going on exchange?" chart={<QuotationCarousel data={A23iii} height={525} />}>
        <p>Exchange terms can be challenging to adapt to, but nonetheless, it is a very fulfilling and worthwhile experience for many.</p>
      </StandardChart>
      <StandardChart
        variant="blank"
        title="What is your favorite memory from your time during the exchange?"
        chart={<QuotationCarousel data={A23iv} height={600} />}>
        <p>Despite potential challenges, there are many amazing and unforgettable memories to make in exchange terms.</p>
      </StandardChart>
      <StandardChart variant="light" title="In which residence did you live in your first year?" chart={<HorizontalBar data={A24} lines={[0, 5, 10]} narrow />}>
        <p>
          Our graduates came from a variety of residences in their first years with V1 being a common place given its large capacity and priority for
          first-years.
        </p>
      </StandardChart>
      <StandardChart variant="blank" title="Have you done an Undergraduate Research Assistanceship (URA)?" chart={<Pie data={A25} />}>
        <p>
          While the majority of the class has not done a URA, almost 20% of them have. A URA is a program that allows students to undertake a part-time research
          opportunity during a study term which is a good way to get research experience and establish relationships with professors which can be helpful for
          your future career.
        </p>
      </StandardChart>
    </PageTemplate>
  );
}
