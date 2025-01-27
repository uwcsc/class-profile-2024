"use client";

import HorizontalBar from "@/components/charts/HorizontalBar";
import StandardChart from "@/components/charts/StandardChart";
import PageTemplate from "@/components/PageTemplate";
import { QuotationCarousel } from "@/components/QuotationCarousel";
import { P1, P10, P11, P2, P3, P4, P5, P6, P7, P8, P9 } from "@/data/personal";

export default function Personal() {
  return (
    <PageTemplate name="personal" alt="Personal">
      <StandardChart
        variant="dark"
        vertical
        title="What was your favorite extracurricular activity during your time at UW?"
        chart={<HorizontalBar data={P1} narrow />}></StandardChart>
      <StandardChart variant="blank" title="What is one extracurricular you regret not joining?" chart={<QuotationCarousel data={P2} height={525} />}>
        <p>
          Many people have regrets about not joining clubs, so be sure to try things out while you have the time! If you missed your chance in university, it's
          never too late to look for communities online or locally.
        </p>
      </StandardChart>
      <StandardChart variant="light" vertical title="What is the best life hack/tip?" chart={<QuotationCarousel data={P3} height={525} />}></StandardChart>
      <StandardChart
        variant="blank"
        vertical
        title="What is your favorite inspirational quote/words to live by?"
        chart={<QuotationCarousel data={P4} height={600} />}></StandardChart>
      <StandardChart
        variant="dark"
        vertical
        title="What is your most embarrassing story from your time at UW?"
        chart={<QuotationCarousel data={P5} height={525} />}></StandardChart>
      <StandardChart
        variant="blank"
        vertical
        title="What is the nicest thing someone at UW did for you?"
        chart={<QuotationCarousel data={P6} height={525} />}></StandardChart>
      <StandardChart
        variant="light"
        vertical
        title="What is the nicest thing you did for someone at UW?"
        chart={<QuotationCarousel data={P7} height={425} />}></StandardChart>
      <StandardChart
        variant="blank"
        vertical
        title="What is one regret you have after finishing university?"
        chart={<QuotationCarousel data={P8} height={525} />}></StandardChart>
      <StandardChart
        variant="dark"
        vertical
        title="What is one thing that you wish you could tell your first-year self?"
        chart={<QuotationCarousel data={P9} height={475} />}></StandardChart>
      <StandardChart
        variant="blank"
        vertical
        title="What is the best lesson you learned from your time at UW?"
        chart={<QuotationCarousel data={P10} height={425} />}></StandardChart>
      <StandardChart
        variant="light"
        vertical
        title="What is your favorite memory from your time at UW?"
        chart={<QuotationCarousel data={P11} height={525} />}></StandardChart>
    </PageTemplate>
  );
}
