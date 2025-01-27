"use client";

import { BottomNav } from "@/components/BottomNav";
import BoxPlot from "@/components/charts/BoxPlot";
import HorizontalBar, { GroupedHorizontalBar } from "@/components/charts/HorizontalBar";
import Pie from "@/components/charts/Pie";
import StandardChart from "@/components/charts/StandardChart";
import PageTemplate from "@/components/PageTemplate";
import {
  C1,
  C2,
  C3,
  C4,
  C5,
  C6ai,
  C6aii,
  C6aiii,
  C6bi,
  C6bii,
  C6biii,
  C6ci,
  C6cii,
  C6ciii,
  C6di,
  C6dii,
  C6diii,
  C6ei,
  C6eii,
  C6eiii,
  C6fi,
  C6fii,
  C6fiii,
  C6iv,
  C6v,
  C6vi,
  C6vii,
  C6viii,
} from "@/data/coop";
import { useState } from "react";

export default function Coop() {
  const [term, setTerm] = useState(0);

  const TermButtons = () => (
    <div className="flex items-center gap-2">
      {new Array(6).fill(0).map((_, i) => (
        <button
          key={i}
          className={`${i === term ? "bg-pink" : "bg-dark-pink"} transition-colors border border-black rounded-md px-3 py-1 mt-2`}
          onClick={() => setTerm(i)}>
          Co-op #{i + 1}
        </button>
      ))}
    </div>
  );

  const C6i = [C6ai, C6bi, C6ci, C6di, C6ei, C6fi][term];
  const C6ii = [C6aii, C6bii, C6cii, C6dii, C6eii, C6fii][term];
  const C6iii = [C6aiii, C6biii, C6ciii, C6diii, C6eiii, C6fiii][term];

  return (
    <PageTemplate name="co-op" alt="Co-op">
      <StandardChart variant="dark" title="Are you in a co-op program?" chart={<Pie data={C1} />}>
        <p>
          Out of the 48 individuals that participated in this Class Profile, 46 were in a co-op program with only 2 not. Most students choose to be in the co-op
          program because of the great experiences it provides, but it's not right for everyone!
        </p>
      </StandardChart>
      <StandardChart variant="blank" title="What was your favorite co-op location?" chart={<HorizontalBar data={C2} lines={[0, 5, 10]} narrow />}>
        <p>
          NYC and Toronto were fairly popular locations, possibly caused by more good co-ops being available in these cities or because this class liked the
          environment of the big cities.
        </p>
      </StandardChart>
      <StandardChart variant="light" title="Have you ever had a co-op term without a placement?" chart={<Pie data={C3} />}>
        <p>
          About 15% of respondents had a co-op term without a placement, so if you find yourself in the same situation, not all is lost and you're not alone!
        </p>
        <p>Finding a co-op placement especially in this job market can be fairly difficult. Don't give up!</p>
      </StandardChart>
      <StandardChart variant="blank" title="Were you ever banned from WaterlooWorks for renegotiating an offer/match?" chart={<Pie data={C4} />}>
        <p>
          Reneging an offer or match comes with its risks, but if you believe it's really worth it for another offer, you can make that decision. Only about 13%
          of respondents were banned from WaterlooWorks for this.
        </p>
      </StandardChart>
      <StandardChart variant="dark" title="How many co-op offers did you have rescinded?" chart={<HorizontalBar data={C5} lines={[0, 10, 20, 30]} />}>
        <p>
          Most people didn't have any offers rescinded, which is good to see. Of those who did, all but 3 had only 1 rescinded with an whopping 6 for one
          unlucky graduate.
        </p>
      </StandardChart>
      <StandardChart
        variant="blank"
        vertical
        title={`What company did you work for (co-op #${term + 1})?`}
        chart={
          <div className="flex flex-col items-center gap-8">
            <TermButtons />
            <HorizontalBar data={C6i} lines={term === 0 || term === 2 ? [0, 2, 4] : term === 3 ? [0, 1, 2, 3] : [0, 1, 2]} narrow />
          </div>
        }></StandardChart>
      <StandardChart
        variant="light"
        vertical
        title={`Where were you located during work (co-op #${term + 1})?`}
        chart={
          <div className="flex flex-col items-center gap-8">
            <TermButtons />
            <HorizontalBar data={C6ii} lines={term < 2 ? [0, 10, 20, 30, 40] : term === 2 ? [0, 10, 20] : term < 5 ? [0, 5, 10] : [0, 2, 4]} narrow />
          </div>
        }></StandardChart>
      <StandardChart
        variant="blank"
        vertical
        title={`What was your position (co-op #${term + 1})?`}
        chart={
          <div className="flex flex-col items-center gap-8">
            <TermButtons />
            <HorizontalBar data={C6iii} lines={term === 2 || term === 5 ? [0, 5, 10] : [0, 5, 10, 15]} narrow />
          </div>
        }></StandardChart>
      <StandardChart
        variant="dark"
        vertical
        title="What was your salary per hour in CAD (excluding other forms of compensation)?"
        chart={
          <div className="flex flex-col items-center">
            <div className="grid grid-cols-[max-content_1fr] items-center gap-2">
              <span className="mt-1.5">Co-op #1:</span>
              <BoxPlot points={[0, 18, 20, 25, 35, 20.58]} min={0} max={164} width={10} />
              <span className="mt-1.5">Co-op #2:</span>
              <BoxPlot points={[15, 22, 24, 29, 56.56, 26.61]} min={0} max={164} width={10} />
              <span className="mt-1.5">Co-op #3:</span>
              <BoxPlot points={[23, 29.75, 36.5, 50.75, 81.25, 40.34]} min={0} max={164} width={10} />
              <span className="mt-1.5">Co-op #4:</span>
              <BoxPlot points={[24, 39.9, 60, 67, 85, 53.08]} min={0} max={164} width={10} />
              <span className="mt-1.5">Co-op #5:</span>
              <BoxPlot points={[22, 39.6, 50, 74.2, 164, 60.84]} min={0} max={164} width={10} />
              <span className="mt-1.5">Co-op #6:</span>
              <BoxPlot points={[42, 51.12, 66.5, 80.25, 162, 77.19]} min={0} max={164} width={10} />
            </div>
          </div>
        }></StandardChart>
      <StandardChart
        variant="blank"
        title="What was your co-op evaluation rating?"
        chart={
          <GroupedHorizontalBar data={C6iv} lines={[0, 2, 4, 6, 8]} supernarrow legend={["Excellent", "Outstanding", "Very Good", "Good", "N/A (not WW)"]} />
        }>
        <p>Overall, the co-op ratings remain fairly inflated, though co-op employees in their 6th term seemed to encounter harsher evaluations.</p>
      </StandardChart>
      <StandardChart
        variant="light"
        title="How happy were you with your co-op?"
        chart={<GroupedHorizontalBar data={C6v} lines={[0, 5, 10, 15, 20]} supernarrow legend={["1", "2", "3", "4", "5"]} />}>
        <p>
          People seemed to get happier with their co-ops later on. Students tend to get more opportunities as they gain experience; additionally, the earlier
          terms let you learn more about what you enjoy and what to look for.
        </p>
      </StandardChart>
      <StandardChart
        variant="blank"
        title="How did you find your job?"
        chart={<GroupedHorizontalBar data={C6vi} lines={[0, 10, 20, 30]} narrow legend={["Main Round (Cycle 1/2)", "Continuous Round", "External"]} />}>
        <p>
          Later in people's careers, a greater number of co-ops are found externally, which is likely both due to having more experience to reach out to
          companies not going through WaterlooWorks and due to students taking return offers.
        </p>
      </StandardChart>
      <StandardChart
        variant="dark"
        title="Were you referred to your job?"
        chart={<GroupedHorizontalBar data={C6vii} lines={[0, 10, 20, 30]} narrow legend={["No", "Yes"]} />}>
        <p>
          Most people find their jobs without referrals. Each term, a handful (of varying size) of people do get referred. This shows the importance of building
          relationships and networking.
        </p>
      </StandardChart>
      <StandardChart
        variant="blank"
        title="Did you complete another co-op term after this one?"
        chart={<GroupedHorizontalBar data={C6viii} lines={[0, 10, 20, 30, 40]} narrow legend={["Yes", "No"]} />}>
        <p>
          With only a few people stopping co-op in the first 4 terms, about half of the respondents stopped after their 5th term, which makes sense as many
          sequences have 5 terms with one of them being 8 months long. 2 people did more than 6 terms, but we did not ask questions beyond the 6th term.
        </p>
      </StandardChart>
      <BottomNav leftPage={{ name: "CS Experience", url: "/cs-experience" }} rightPage={{ name: "Lifestyle and Interests", url: "/lifestyle-and-interests" }} />
    </PageTemplate>
  );
}
