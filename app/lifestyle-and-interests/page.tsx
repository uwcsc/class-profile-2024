"use client";

import { WithBoxPlot } from "@/components/charts/BoxPlot";
import HorizontalBar from "@/components/charts/HorizontalBar";
import StandardChart from "@/components/charts/StandardChart";
import PageTemplate from "@/components/PageTemplate";
import { L1, L10, L11, L12, L13, L14, L15, L16, L17, L18, L19, L2, L3, L4, L5, L6, L7, L8, L9 } from "@/data/lifestyle-and-interests";

export default function LifestyleAndInterests() {
  return (
    <PageTemplate name="lifestyle-and-interests" alt="Lifestyle and Interests">
      <StandardChart variant="dark" title="How did you religious beliefs change during university?" chart={<HorizontalBar data={L1} lines={[0, 10, 20, 30]} />}>
        <p>
          Similar to previous years, most students were never religious, with those who were maintaining their religious beliefs. There are a small portion of
          students who have either become religious or have lost faith.
        </p>
        <p>"Changed Religions" was also an option not selected by any respondents this time.</p>
      </StandardChart>
      <StandardChart variant="blank" title="How frequently did you cook for yourself?" chart={<HorizontalBar data={L2} lines={[0, 5, 10, 20]} />}>
        <p>
          Yes chef! Most students ended up cooking for themselves weekly with only a small portion of students either cooking monthly or bi-weekly. Cooking can
          be a challenge for many students moving out for the first time who have not cooked for themselves before, but it's never too late to learn!
        </p>
      </StandardChart>
      <StandardChart
        variant="light"
        title="How many days a week were you physically active?"
        chart={
          <WithBoxPlot points={[0, 2, 3, 5, 7, 3.19]}>
            <HorizontalBar data={L3} lines={[0, 5, 10]} narrow />
          </WithBoxPlot>
        }>
        <p>
          Staying active is important for your health, and Waterloo CS students are definitely not beating the sweaty stereotypes this year with how often they
          went to the gym. Most of the students went to the gym 3-6 days of the week with only a handful going 0-2 times a week or 7 days a week.
        </p>
      </StandardChart>
      <StandardChart
        variant="blank"
        title="Did you feel like you had time to pursue your hobbies?"
        chart={<HorizontalBar data={L4} lines={[0, 5, 10, 15, 20]} />}>
        <p>
          Most students felt like they had time to pursue their hobbies with 66% agreeing or strongly agreeing, while 27% said they disagreed or strongly
          disagreed. Hobbies are a great way to de-stress and take a break from school, and committments outside of school are also a great way to network or
          add to your portfolio and resume.
        </p>
      </StandardChart>
      <StandardChart variant="dark" title="How often did you attend parties?" chart={<HorizontalBar data={L5} lines={[0, 5, 10, 15, 20]} />}>
        <p>
          Parties are a great way to unwind, connect with new people, and enjoy a night of fun. While a third of students reported never attending parties, the
          majority participate when the time feels right. Regardless of how often you choose to join the festivities, always remember to stay safe and plan your
          way home!
        </p>
      </StandardChart>
      <StandardChart variant="blank" title="What time did you usually sleep?" chart={<HorizontalBar data={L6} lines={[0, 5, 10, 15, 20]} />}>
        <p>
          This year's Waterloo students continue to lean toward a night owl lifestyle, with the largest group calling it a night between 11 PM and 1 AM. Who
          needs early mornings when the night offers so much inspiration?
        </p>
      </StandardChart>
      <StandardChart
        variant="light"
        title="How many hours of sleep did you get on average per night?"
        chart={<HorizontalBar data={L7} lines={[0, 5, 10, 15, 20]} />}>
        <p>
          Sleep is crucial for both body and mind, and it looks like Waterloo students know that! While many students aim for 7+ hours of sleep each night, it's
          clear that the majority prefer late nights over early mornings. With most heading to bed between 11 PM and 3 AM, it's no surprise that morning classes
          aren't at the top of their wish list.
        </p>
      </StandardChart>
      <StandardChart
        variant="blank"
        title="How often did you pull all-nighters throughout university?"
        chart={<HorizontalBar data={L8} lines={[0, 10, 20, 30]} />}>
        <p>
          For the lucky few who have avoided it, consider yourselves fortunate. For the rest, late nights often mean battling exhaustion with cold water, energy
          drinks, or an extra strong coffee. While a quarter of respondents have yet to pull an all-nighter, most students find themselves going through the
          grind every few weeks or months. It's a test of endurance, but for many, it's just part of the student experience.
        </p>
      </StandardChart>
      <StandardChart
        variant="dark"
        title="While on campus, how many days of the week did you go out to eat at a restaurant?"
        chart={
          <WithBoxPlot points={[0, 2, 3, 4, 7, 3.11]}>
            <HorizontalBar data={L9} lines={[0, 5, 10]} narrow />
          </WithBoxPlot>
        }>
        <p>
          Whether you're in the mood for a casual meal or something a bit more upscale, Waterloo offers a diverse range of dining options to satisfy every
          craving. Students typically head out to eat, making the most of iconic spots like Lazeez, which has remained a favourite for years, as well as the new
          eateries that pop up each term.
        </p>
      </StandardChart>
      <StandardChart
        variant="blank"
        title="What is your favourite restaurant to go to on/around campus?"
        chart={<HorizontalBar data={L10} lines={[0, 2, 4]} narrow />}>
        <p>
          While we had a wide range of responses, it's clear that Gol's and Yunshang are the favourites of this year's students. Lazeez, Nuri Village, and
          Waterloo Star were also popular options.
        </p>
      </StandardChart>
      <StandardChart
        variant="light"
        title="Which extracurricular activities did you participate in?"
        chart={<HorizontalBar data={L11} lines={[0, 5, 10]} supernarrow />}>
        <p>
          Beating all the "nerd" allegations, a majority of Waterloo students stay active by participating in sports or intramurals, with basketball and
          badminton emerging as favorites. Beyond the courts, many students also take on leadership roles, serving as Math Ambassadors or Orientation Leaders,
          helping to guide and inspire the next generation of students. It's clear that being active &mdash; whether in sports or campus involvement &mdash; is
          a big part of the Waterloo experience!
        </p>
      </StandardChart>
      <StandardChart variant="blank" title="Where is your favourite place to study on campus?" chart={<HorizontalBar data={L12} lines={[0, 5, 10]} narrow />}>
        <p>
          MC and DC are clearly the go-to spots for students looking to study on campus, and it's no surprise considering most Math faculty classes are held in
          these iconic buildings. However, don't limit yourself to just these spots &mdash; explore different areas of campus to uncover your new favorite study
          nook. You never know where you'll find the perfect environment to focus and get things done!
        </p>
      </StandardChart>
      <StandardChart variant="dark" title="What are your hobbies?" chart={<HorizontalBar data={L13} lines={[0, 5, 10]} supernarrow />}>
        <p>
          Waterloo students have a wide range of hobbies, but badminton, gaming, going to the gym, and reading are definitely at the top! These activities offer
          a perfect escape, making the grind of university life just a bit more enjoyable.
        </p>
      </StandardChart>
      <StandardChart
        variant="blank"
        title="How many different countries did you visit outside of Canada during university?"
        chart={
          <WithBoxPlot points={[0, 1, 2, 5, 16, 3.87]}>
            <HorizontalBar data={L14} lines={[0, 5, 10]} narrow />
          </WithBoxPlot>
        }>
        <p>
          Waterloo students are avid travellers! During breaks between terms, many take the opportunity to explore new countries and immerse themselves in
          different cultures—an experience that leaves a lasting impression. In fact, most Waterloo students have visited at least one country outside of Canada
          during their time here, expanding their horizons and making unforgettable memories along the way.
        </p>
      </StandardChart>
      <StandardChart
        variant="light"
        title="What is your favourite bubble tea restaurant in or around UW?"
        chart={<HorizontalBar data={L15} lines={[0, 5, 10, 15]} narrow />}>
        <p>
          NowTea and CoCo are the go-to spots for bubble tea lovers around Waterloo. With their wide variety of drinks and flavors, it's no wonder these places
          are favorites for many. What's your drink of choice when you stop by?
        </p>
      </StandardChart>
      <StandardChart
        variant="blank"
        title="What is your favourite shawarma restaurant in or around UW?"
        chart={<HorizontalBar data={L16} lines={[0, 5, 10, 15]} />}>
        <p>
          Changing up the rankings from last year, coming in first place is Lazeez, with Shawarma Plus following closely in second, and iPotato rounding out the
          top three. It's safe to say that these spots have earned their place as the all-time favorites of Waterloo students, offering delicious shawarma that
          keeps everyone coming back year after year.
        </p>
      </StandardChart>
      <StandardChart variant="dark" title="How often do you spend time on the r/uwaterloo subreddit?" chart={<HorizontalBar data={L17} lines={[0, 5, 10]} />}>
        <p>
          If you ever have a question or want to connect with fellow students, the r/uwaterloo subreddit is the perfect place! Many students browse the
          subreddit daily or a few times a week, whether they're seeking advice on co-op opportunities, looking for a good bird course, or trying to unwind from
          their studies. Whatever you need, the UW subreddit is the go-to community for answers and connections!
        </p>
      </StandardChart>
      <StandardChart
        variant="blank"
        title="How often do you keep in touch with high school friends?"
        chart={<HorizontalBar data={L18} lines={[0, 5, 10, 15]} />}>
        <p>
          For students who are far from home, staying connected with high school friends can be a challenge. Despite the distance, many Waterloo students make
          the effort to stay in touch, often reaching out and catching up with their old friends to maintain those important relationships.
        </p>
      </StandardChart>
      <StandardChart variant="light" title="Where did you meet most of your friends?" chart={<HorizontalBar data={L19} lines={[0, 5, 10, 15]} />}>
        <p>
          While orientation offers a great starting point for meeting people, most students have built lasting friendships from high school, or have built them
          through mutual connections and classes. University isn't just about hitting the books &mdash; it's also about connecting with others. The lessons
          learned may be forgotten over time, but the friendships forged here will stay with you long after graduation.
        </p>
      </StandardChart>
    </PageTemplate>
  );
}
