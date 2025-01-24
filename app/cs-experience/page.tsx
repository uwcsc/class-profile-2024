"use client";

import HorizontalBar from "@/components/charts/HorizontalBar";
import Pie from "@/components/charts/Pie";
import StandardChart from "@/components/charts/StandardChart";
import Tooltip from "@/components/charts/Tooltip";
import { Header } from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import { E1, E2, E3, E4, E5 } from "@/data/computer-science-experience";
import { TooltipContext } from "@/utils/context";
import { useState } from "react";

export default function Academics() {
  const [tooltip, setTooltip] = useState("");

  return (
    <div className="flex flex-col items-center mb-16">
      <Header />
      <PageHeader name="cs-experience" alt="CS Experience" />

      <Tooltip text={tooltip} />

      <TooltipContext.Provider value={setTooltip}>
        <div className="w-full flex flex-col items-center gap-8">
          <StandardChart variant="dark" title="Which of the following coding experiences did you have prior to university?" chart={<Pie data={E1} />}>
            <p>
              Coding experience prior to university can be valuable but is not required to enter the CS program at Waterloo. These opportunities may be a great
              way to help you decide if CS or a programming-related major is right for you.
            </p>
            <p>
              The majority of respondents had some experience with coding before university, with many taking CS courses in high school and learning coding on
              their own time.
            </p>
          </StandardChart>
          <StandardChart variant="blank" title="What is your favorite programming language?" chart={<HorizontalBar data={E2} />}>
            <p>
              The majority of students seem to gravitate towards Python and C++. This is not surprising as both are widely supported and used either in course
              content or frequently in the field. Shoutout to the one Go and Haskell enjoyer (TypeScript is too similar to JavaScript to count it separately)!
            </p>
          </StandardChart>
          <StandardChart variant="light" title="What is your favorite text editor/IDE?" chart={<HorizontalBar data={E3} />}>
            <p>
              VS Code is, as usual, the favorite code editor for the Class of 2024. It's a versatile and customizable code editor with a variety of open-source
              extensions available for any task.
            </p>
            <p>Shoutout to the person using Sublime Text!</p>
          </StandardChart>
          <StandardChart variant="blank" title="What operating system(s) do you mainly use?" chart={<HorizontalBar data={E4} />}>
            <p>
              Each of these operating systems provides its own benefits and downsides. Making the right choice comes down to your preference and comfort for
              daily usage.
            </p>
          </StandardChart>
          <StandardChart variant="dark" title="How many hackathons have you attended as a hacker?" chart={<HorizontalBar data={E5} narrow />}>
            <p>
              Hackathons are a great way to meet new people, learn new skills, or just bring ideas to life. There are various club- or committee-hosted
              hackathon opportunities for any skill level at Waterloo and around the world for students to participate in.
            </p>
            <p>
              87% of respondents have had a chance to attend at least one hackathon with the most people attending 3 and a few people attending many more, up to
              an impressive 15!
            </p>
          </StandardChart>
        </div>
      </TooltipContext.Provider>
    </div>
  );
}
