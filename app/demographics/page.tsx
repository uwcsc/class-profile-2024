"use client";

import Pie from "@/components/charts/Pie";
import StandardChart from "@/components/charts/StandardChart";
import Tooltip from "@/components/charts/Tooltip";
import { Header } from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import { D1, D2, D3, D4, D5, D6, D7, D8 } from "@/data/demographics";
import { TooltipContext } from "@/utils/context";
import { useWindowDimensions } from "@/utils/getWindowDimensions";
import { useIsMobile } from "@/utils/isMobile";
import { useState } from "react";

export default function Demographics() {
  const [tooltip, setTooltip] = useState("");

  const pageWidth = useWindowDimensions().width;
  const isMobile = useIsMobile();

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
          <StandardChart variant="blank" title="What is your birth year?" chart={<Pie data={D4} />}>
            <p>Most of our graduates were born in 2001, with 2 born in 2002 and 1 each in 1999 and 2006.</p>
          </StandardChart>
          <StandardChart variant="dark" title="What is the racial category/categories with which you identify?" chart={<Pie data={D5} />}>
            <p>28 of our 48 respondents identified as East Asian, 8 each as South Asian and White, 2 as Middle Eastern, and 1 as Southeast Asian.</p>
          </StandardChart>
          <StandardChart variant="blank" title="What is your religion and/or spiritual affiliation?" chart={<Pie data={D6} />}>
            <p>
              Most respondents were not very religious or spiritual with 16 agnostic and 18 atheist. 7 identified as Christian, 5 as Hindu, 3 as Buddhist, 2 as
              Sikh, 1 as Daoist, and 1 with mixed feelings about spirituality.
            </p>
            <p>
              Note that this adds up to more than 48 as some people identified with multiple categories, with a notable 8 people being both agnostic and
              atheist.
            </p>
          </StandardChart>
          <StandardChart variant="light" title="What is/are the sexual identity/identities with which you identify?" chart={<Pie data={D7} />}>
            <p>
              The majority of respondents were heterosexual with 39 identifying as such. 5 identified as bisexual, 2 as asexual, and 2 as queer with 1 of them
              questioning.
            </p>
          </StandardChart>
          <StandardChart variant="blank" title="How many languages are you fluent in?" chart={<Pie data={D8} />}>
            <p>Most respondents are fluent in more than one language with 23 fluent in 2, 8 in 3, and 1 in an impressive 4!</p>
            <p>
              This remarkable multilingualism enhances our class' global perspectives and strengthens our ability to collaborate on a global scale, reflecting
              the interconnected nature of the tech industry.
            </p>
          </StandardChart>
        </div>
      </TooltipContext.Provider>
    </div>
  );
}
