"use client";

import { BottomNav } from "@/components/BottomNav";
import HorizontalBar from "@/components/charts/HorizontalBar";
import Pie from "@/components/charts/Pie";
import StandardChart from "@/components/charts/StandardChart";
import PageTemplate from "@/components/PageTemplate";
import { QuotationCarousel } from "@/components/QuotationCarousel";
import WindowPanel from "@/components/WindowPanel";
import { H1, H2, H3, H4, H5, H6, H7, H7i, H8, H9 } from "@/data/mental-health";
import Link from "next/link";

export default function MentalHealth() {
  return (
    <PageTemplate name="mental-health" alt="Mental Health">
      <WindowPanel blank>
        <p>
          Mental health is a sensitive subject and some of the questions or their responses may be triggering to certain individuals. We have taken care to try
          to avoid showing anything excessively upsetting, but please only proceed if you are in the headspace to.
        </p>
        <p>
          If you are experiencing stress, difficult life events, or feelings like anxiety or depression, we encourage you to seek support &mdash; there's no
          shame in reaching out. Here are some resources that are available to you:
        </p>
        <ul className="list-disc list-inside mt-4">
          <li>
            Campus Wellness &mdash;{" "}
            <Link href="https://uwaterloo.ca/campus-wellness" target="_blank">
              uwaterloo.ca/campus-wellness
            </Link>
          </li>
          <li>
            Counseling Services &mdash; <Link href="mailto:counselling.services@uwaterloo.ca">counselling.services@uwaterloo.ca</Link>,{" "}
            <Link href="tel:5198884567,32655">(519) 888 4567 ext. 32655</Link>, Needles Hall North 2nd Floor (NH 240
          </li>
          <li>
            MATES &mdash; 1-to-1 peer support program offered by WUSA and Counseling Services &mdash;{" "}
            <Link href="mailto:mates@uwaterloo.ca">mates@uwaterloo.ca</Link>
          </li>
          <li>
            Health Services &mdash; Across the creek from SLC, <Link href="tel:5198884096">(519) 888 4096</Link>
          </li>
          <li>
            Good2Talk (24/7) &mdash; Free confidential helpline for post-secondary students &mdash; <Link href="tel:+18669255454">+1 (866) 925 5454</Link>
          </li>
          <li>
            Here 24/7 &mdash; Mental Health &amp; Crisis Service Team &mdash; <Link href="+18444373247">+1 (844) 437 3247</Link>
          </li>
          <li>
            OK2BME &mdash; Support services for LGBTQ+ teens in Waterloo &mdash; <Link href="5198840000,213">(519) 884 0000 ext. 213</Link>
          </li>
        </ul>
      </WindowPanel>
      <StandardChart variant="dark" title="What was the lowest point in your university career?" noscroll chart={<QuotationCarousel data={H1} height={625} />}>
        <p>
          For most students in the graduating class of 2024, the lowest point in their university journey was their 1A term, marked by the challenges of
          adapting to university life. Other significant low points included personal struggles like breakups, COVID-19 illnesses, finding their first co-op,
          failing courses, and navigating Policy 71 proceedings.
        </p>
      </StandardChart>
      <StandardChart
        variant="blank"
        title="Overall, how would you rate your mental health over your entire undergraduate career?"
        chart={<HorizontalBar data={H2} lines={[0, 5, 10, 15]} />}>
        <p>
          Mental health ratings varied across the scale. Most students rated their mental health as a 3 or 4 out of 5. While a smaller group rated their
          experience as a 5, showing resilience and well-being, others faced more significant challenges, as indicated by 9 students rating it a 2 and 1 student
          rating it a 1. Overall, it's a reminder that mental health can fluctuate, and supporting one another through the highs and lows is important.
        </p>
      </StandardChart>
      <StandardChart
        variant="light"
        title="To what extent did impostor syndrome affect you in your university life?"
        chart={<HorizontalBar data={H3} lines={[0, 5, 10]} />}>
        <p>
          Imposter syndrome significantly impacted many students in the graduating class of 2024. Most responses fell in the lower range, with 2 (12 votes) and
          1 (11 votes) being the most common, but the distribution was fairly even, indicating varying degrees of self-doubt. It's important to remember that
          feeling this way is okay and a normal part of growth and learning.
        </p>
      </StandardChart>
      <StandardChart variant="blank" title="Have you ever experienced burnout?" chart={<Pie data={H4} />}>
        <p>
          Burnout remains a significant concern, with nearly everyone indicating they experienced it at some point during their undergraduate career. The
          demanding workload and fast-paced environment can take a toll, leaving students feeling overwhelmed or exhausted. Remember that these feelings are
          common and that taking time for rest and self-care is crucial in maintaining mental and emotional well-being.
        </p>
      </StandardChart>
      <StandardChart variant="dark" title="Have you ever been to therapy?" chart={<Pie data={H5} />}>
        <p>
          24% of respondents have attended therapy, while 28% have considered it but not gone. While therapy does not end up helping everyone, there is no shame
          in reaching out and getting support.
        </p>
      </StandardChart>
      <StandardChart variant="blank" title="Have you ever been to counseling?" chart={<Pie data={H6} />}>
        <p>
          28% of respondents have attended counselling, while 17% considered it but did not go. Like with therapy, it's not for everyone, and there are many
          ways to get help and handle mental health issues, but many people end up finding it helpful in one way or another.
        </p>
      </StandardChart>
      <StandardChart variant="light" title="Have you ever used UW Health Services for your mental health?" chart={<Pie data={H7} />}>
        <p>
          The majority of the graduating class of 2024 (77.8%) have not used UW Health Services for mental health support, but for many, it's a resource that's
          easily accessible due to being on-campus and easily works with student health insurance.
        </p>
      </StandardChart>
      <StandardChart variant="blank" title="If so, how was your experience with UW Health Services?" chart={<HorizontalBar data={H7i} lines={[0, 2, 4]} />}>
        <p>
          Most people had a neutral to positive experience with UW Health Services. There is still room for growth, with no responses indicating a perfect 5/5
          experience, but many students found the support helpful and valuable.
        </p>
      </StandardChart>
      <StandardChart
        variant="dark"
        vertical
        title="Do you have any general comments about mental health in university?"
        noscroll
        chart={<QuotationCarousel data={H8} height={625} />}></StandardChart>
      <StandardChart variant="blank" title="What do you do to cope with mental health struggles?" noscroll chart={<QuotationCarousel data={H9} height={625} />}>
        <p>
          The graduating class of 2024 utilizes a wide range of coping strategies to manage mental health challenges. Many students turn to friends, family, and
          partners for support, while others focus on self-care activities like working out, eating healthy, and getting rest. Overall, the class demonstrates a
          strong sense of resilience and the importance of maintaining a good support system and healthy habits.
        </p>
      </StandardChart>
      <BottomNav leftPage={{ name: "Postgrad + Full-Time", url: "/postgrad-and-full-time" }} rightPage={{ name: "Personal", url: "/personal" }} />
    </PageTemplate>
  );
}
