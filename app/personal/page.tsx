"use client";

import { BottomNav } from "@/components/BottomNav";
import { ComponentWrapper } from "@/components/ComponentWrapper";
import { Header } from "@/components/Header";
import { QuotationCarousel } from "@/components/QuotationCarousel";
import { SectionHeader } from "@/components/SectionHeader";
import { P1, P10, P2, P3, P4, P5, P6, P7, P8, P9 } from "@/data/personal";
import { pageRoutes } from "@/data/routes";

export default function Personal() {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <SectionHeader title="Personal" subtitle="Life lessons from students" />

      <ComponentWrapper heading="What was your favourite extracurricular activity that you participated in during your time at UW?" align="left">
        <div className="flex flex-col gap-[calc(48rem/16)] m-[calc(32rem/16)]">
          <QuotationCarousel data={P1} circleDiameter={0} height={300} />
        </div>
      </ComponentWrapper>

      <ComponentWrapper heading="What is one extracurricular you regret not joining?" align="left" noBackground>
        <div className="flex flex-col gap-[calc(48rem/16)] m-[calc(32rem/16)]">
          <QuotationCarousel data={P2} circleDiameter={0} height={300} />
        </div>
      </ComponentWrapper>

      <ComponentWrapper heading="What is the best life hack/tip?" align="right">
        <div className="flex flex-col gap-[calc(48rem/16)] m-[calc(32rem/16)]">
          <QuotationCarousel data={P3} circleDiameter={0} height={300} />
        </div>
      </ComponentWrapper>

      <ComponentWrapper heading="What is your favourite inspirational quote/words to live by?" align="right" noBackground>
        <div className="flex flex-col gap-[calc(48rem/16)] m-[calc(32rem/16)]">
          <QuotationCarousel data={P4} circleDiameter={0} height={400} width={700} />
        </div>
      </ComponentWrapper>

      <ComponentWrapper heading="What is your most embarrassing story from your time at UW?" align="left">
        <div className="flex flex-col gap-[calc(48rem/16)] m-[calc(32rem/16)]">
          <QuotationCarousel data={P5} circleDiameter={0} height={300} />
        </div>
      </ComponentWrapper>

      <ComponentWrapper heading="What is the nicest thing someone at UW did for you?" align="left" noBackground>
        <div className="flex flex-col gap-[calc(48rem/16)] m-[calc(32rem/16)]">
          <QuotationCarousel data={P6} circleDiameter={0} height={300} />
        </div>
      </ComponentWrapper>

      <ComponentWrapper heading="What is one regret you have after finishing university?" align="right">
        <div className="flex flex-col gap-[calc(48rem/16)] m-[calc(32rem/16)]">
          <QuotationCarousel data={P7} circleDiameter={0} height={300} />
        </div>
      </ComponentWrapper>

      <ComponentWrapper heading="What is one thing that you wish you could tell your first-year self?" align="right" noBackground>
        <div className="flex flex-col gap-[calc(48rem/16)] m-[calc(32rem/16)]">
          <QuotationCarousel data={P8} circleDiameter={0} height={300} />
        </div>
      </ComponentWrapper>

      <ComponentWrapper heading="What is the best lesson you learned from your time at UW?" align="left">
        <div className="flex flex-col gap-[calc(48rem/16)] m-[calc(32rem/16)]">
          <QuotationCarousel data={P9} circleDiameter={0} height={300} />
        </div>
      </ComponentWrapper>

      <ComponentWrapper heading="What is your favourite memory from your time at UW?" align="left" noBackground>
        <div className="flex flex-col gap-[calc(48rem/16)] m-[calc(32rem/16)]">
          <QuotationCarousel data={P10} circleDiameter={0} height={400} width={400} />
        </div>
      </ComponentWrapper>

      <BottomNav leftPage={pageRoutes.mentalHealth} rightPage={pageRoutes.contributors} />
    </div>
  );
}
