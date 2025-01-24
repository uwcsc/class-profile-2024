"use client";

import HorizontalBar from "@/components/charts/HorizontalBar";
import Pie from "@/components/charts/Pie";
import BoxPlot from "@/components/charts/BoxPlot";
import StandardChart from "@/components/charts/StandardChart";
import Tooltip from "@/components/charts/Tooltip";
import { Header } from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import { D1, D10, D11, D12, D13, D14, D15, D16, D16i, D17, D18, D19, D2, D3, D4, D5, D6, D7, D8, D8i, D9 } from "@/data/demographics";
import { TooltipContext } from "@/utils/context";
import { useState } from "react";

export default function Demographics() {
  const [tooltip, setTooltip] = useState("");

  return (
    <div className="flex flex-col items-center mb-16">
      <Header />
      <PageHeader name="demographics" alt="Demographics" />

      <Tooltip text={tooltip} />

      <TooltipContext.Provider value={setTooltip}>
        <div className="w-full flex flex-col items-center gap-8">
          <StandardChart variant="dark" title="What program are you in?" chart={<Pie data={D1} />}>
            <p>
              The 2024 Class Profile had 48 respondents with the majority (34) graduating from Computer Science. The remaining 14 were from CS/BBA, and
              unfortunately we got no responses from CFM students.
            </p>
            <p>No matter your program of choice, the Class of 2024 is a community of future tech leaders and problem solvers.</p>
          </StandardChart>
          <StandardChart variant="blank" title="What is your gender identity?" chart={<Pie data={D2} />}>
            <p>
              The majority of these graduates identified as men (36), with 10 identifying as women, one as gender non-conforming/non-binary, and one choosing
              not to respond.
            </p>
            <p>
              While the Class of 2024 proudly represents a spectrum of gender identities, most of the representation is from men. Underrepresented gender
              identities are a popular topic in the tech community, so check out the Equity Office's{" "}
              <a href="https://uwaterloo.ca/math/about/equity-office/faculty-initiatives" target="_blank">
                Faculty Initiatives
              </a>{" "}
              page to see what organizations are working to address these issues and provide an inclusive environment!
            </p>
          </StandardChart>
          <StandardChart variant="light" title="What are your pronouns?" chart={<Pie data={D3} />}>
            <p>
              All male respondents used he/him pronouns and all female respondents used she/her pronouns, with one woman also using they/them pronouns. One
              person used only they/them pronouns.
            </p>
          </StandardChart>
          <StandardChart variant="blank" title="What is your birth year?" chart={<HorizontalBar data={D4} lines={[0, 15, 30, 45]} />}>
            <p>Most of our graduates were born in 2001, with 2 born in 2002 and 1 each in 1999 and 2006.</p>
          </StandardChart>
          <StandardChart
            variant="dark"
            title="What is the racial category/categories with which you identify?"
            chart={<HorizontalBar data={D5} lines={[0, 10, 20, 30]} />}>
            <p>28 of our 48 respondents identified as East Asian, 8 each as South Asian and White, 2 as Middle Eastern, and 1 as Southeast Asian.</p>
          </StandardChart>
          <StandardChart variant="blank" title="What is your religion and/or spiritual affiliation?" chart={<Pie data={D6} />}>
            <p>
              Most respondents were not very religious/spiritual with 16 agnostic and 18 atheist. 7 identified as Christian, 5 as Hindu, 3 as Buddhist, 2 as
              Sikh, 1 as Daoist, and 1 with mixed feelings about spirituality.
            </p>
            <p>Note that this adds up to more than 48 as some people identified with multiple categories.</p>
          </StandardChart>
          <StandardChart variant="light" title="What is/are the sexual identity/identities with which you identify?" chart={<Pie data={D7} />}>
            <p>
              The majority of respondents were heterosexual with 39 identifying as such. 5 identified as bisexual, 2 as asexual, and 2 as queer with 1 of them
              questioning.
            </p>
          </StandardChart>
          <StandardChart variant="blank" title="How many languages are you fluent in?" chart={<HorizontalBar data={D8} lines={[0, 10, 20]} />}>
            <p>Most respondents are fluent in more than one language with 23 fluent in 2, 8 in 3, and 1 in an impressive 4!</p>
            <p>
              This remarkable multilingualism enhances our class' global perspectives and strengthens our ability to collaborate on a global scale, reflecting
              the interconnected nature of the tech industry.
            </p>
          </StandardChart>
          <StandardChart variant="dark" title="Besides English, what languages are you fluent in?" chart={<HorizontalBar data={D8i} narrow />}>
            <p>
              Most respondents fluent in languages other than English spoke East Asian languages. 2 respondents put down "Chinese" but did not specify which
              language. Shanghainese is a dialect of the Chinese Wu language and Hokkien is a language in the Southern Min group of Chinese languages.
            </p>
          </StandardChart>
          <StandardChart variant="blank" title="What is your political alignment?" chart={<Pie data={D9} rotation={-Math.PI * 1.1} />}>
            <p>8 respondents stated that they were moderate, 12 stated moderate right, 11 moderate left, 10 left, and 1 right.</p>
          </StandardChart>
          <StandardChart variant="light" title="Where did you live before coming to UW?" chart={<Pie data={D10} />}>
            <p>
              Most respondents lived in Canada before coming to UW, with 23 from the GTA/Toronto, 2 from BC, 1 from KW, Burlington, NL, NS, and AB, and 14 from
              other parts of ON. 1 respondent stated they were from another part of Canada, and the remaining 3 were from India, China, and Jordan/Lebanon.
            </p>
          </StandardChart>
          <StandardChart variant="blank" title="What is the highest education level of your parents?" chart={<HorizontalBar data={D11} lines={[0, 10, 20]} />}>
            <p>
              Almost 90% of respondents' had at least one parent who have a Bachelor's or higher. No matter the education level of their parents, each graduate
              worked hard to get here and we're proud of how far they've come.
            </p>
          </StandardChart>
          <StandardChart
            variant="dark"
            title="What was your household income before entering your current UW program? (CAD)"
            chart={<HorizontalBar data={D12} lines={[0, 5, 10]} />}></StandardChart>
          <StandardChart
            variant="blank"
            title="How many close relatives have attended or are attending UW?"
            chart={<HorizontalBar data={D13} lines={[0, 15, 30]} />}>
            <p>
              Most graduates had no close relatives that had attended or were attending UW at the time, but 9 respondents had 1 relative and another 6 had 2.
            </p>
          </StandardChart>
          <StandardChart variant="light" title="What immigration generation do you belong to?" chart={<HorizontalBar data={D14} lines={[0, 10, 20]} />}>
            <p>
              Most respondents were first- or second-generation immigrants, meaning they or their parents were born in another country respectively. Only 6 were
              third- or higher generation immigrants (this category also includes indigenous people).
            </p>
          </StandardChart>
          <StandardChart
            variant="blank"
            title="What was your high school admissions average?"
            chart={
              <div className="flex flex-col items-center gap-12">
                <HorizontalBar data={D15} narrow lines={[0, 5, 10, 15]} />
                <BoxPlot points={[90, 95, 96, 97, 99, 95.66]} />
              </div>
            }>
            <p>All respondents had an admissions average of 90% or higher. Answers have been rounded down for the chart but not for the statistics.</p>
          </StandardChart>
          <StandardChart
            variant="dark"
            title="Was your current program your first choice out of all programs you applied to in high school?"
            chart={<Pie data={D16} />}>
            <p>Most respondents got their first choice, with 30 people answering yes and 18 no.</p>
          </StandardChart>
          <StandardChart variant="blank" title="If not, what university did your first-choice program belong to?" chart={<Pie data={D16i} />}>
            <p>
              Almost all respondents who didn't get their first choice had their first choice program at the University of Waterloo anyway, with 2 people having
              theirs at the University of Toronto and the Massachusetts Institute of Technology (MIT).
            </p>
          </StandardChart>
          <StandardChart variant="light" title="Which of the following specialized high school programs did you do?" chart={<Pie data={D17} />}>
            <p>
              Most students who did specialized programs did AP or IB with a significant portion in gifted/enriched programs. A few students did language
              immersion and other programs.
            </p>
          </StandardChart>
          <StandardChart
            variant="blank"
            title="How much money did you receive in UW scholarships and grants? (CAD)"
            chart={
              <div className="flex flex-col items-center gap-12">
                <HorizontalBar data={D18} narrow lines={[0, 5, 10, 15]} />
                <BoxPlot points={[0, 2000, 2500, 7250, 33414, 5585.35]} />
              </div>
            }>
            <p>For our respondents, UW scholarships and grants totaled somewhere between $0 to $33k with $2k being the most common amount to receive.</p>
          </StandardChart>
          <StandardChart variant="dark" title="What is your MBTI type?" chart={<HorizontalBar data={D19} narrow />}>
            <p>
              The MBTI types of the graduating class varied a fair bit, though unsurprisingly, the largest percentage of personalities were Logicians (INTP).
            </p>
            <p>
              Looking at each axis, there were 26 introverts to 16 extroverts, 35 intuitive to 7 observant, 25 thinking to 17 feeling, and a perfect split of 21
              judging to 21 prospecting.
            </p>
          </StandardChart>
        </div>
      </TooltipContext.Provider>
    </div>
  );
}
