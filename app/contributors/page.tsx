"use client";

import { Header } from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import { classProfileWebDevelopers, communityRepresentatives, designers, pastContributors } from "@/data/contributors";
import { basePath } from "@/utils/getBasePath";
import { useWindowDimensions } from "@/utils/getWindowDimensions";

export default function Contributors() {
  const pageWidth = useWindowDimensions().width;

  return (
    <div className="flex flex-col items-center">
      <Header />
      <PageHeader name="contributors" alt="Contributors" />

      <div
        className="w-full flex flex-col items-center gap-32"
        style={{
          backgroundImage: `url(${JSON.stringify(basePath + "/images/contributors-main.png")})`,
          backgroundSize: "100% auto",
          backgroundPosition: "center top",
          minHeight: (pageWidth / 6912) * 16769,
        }}>
        <div className="w-[calc(min(80%,800px))] rounded-lg p-8" style={{ backgroundImage: "linear-gradient(120deg, #f8f9fd, #b5c1ec)" }}>
          <span className="font-bold text-dark-blue md:text-lg xl:text-xl">
            Congratulations, Class of 2024! We can't wait to see the amazing things you'll achieve.
          </span>
          <div className="flex justify-end">
            <span className="font-bold text-black/50 text-sm md:text-md xl:text-lg">&mdash; With love, CSC &#x1F499;</span>
          </div>
        </div>
        <div className="w-[calc(min(90%,1200px))] flex justify-end">
          <div className="w-[calc(min(80%,600px))] rounded-lg p-8" style={{ backgroundImage: "linear-gradient(150deg, #443996a0, #ffcad0a0)" }}>
            <span className="text-white text-sm md:text-md xl:text-lg">
              The 2024 CS Class Profile was created through the hard work of past and present members of the UW Computer Science Club's Community
              Representatives, Designers, Class Profile Web Developers, and Systems Committee. Please contact{" "}
              <a href="mailto:exec@csclub.uwaterloo.ca" className="text-white underline">
                exec@csclub.uwaterloo.ca
              </a>{" "}
              for specific concerns for the CS Class Profile.
            </span>
          </div>
        </div>
        <div className="w-[calc(min(90%,1200px))] flex justify-start">
          <div className="w-[calc(min(80%,600px))] rounded-lg p-8" style={{ backgroundImage: "linear-gradient(150deg, #443996a0, #ffcad0a0)" }}>
            <span className="text-white text-sm md:text-md xl:text-lg">
              Special thanks to former CSC President and Vice-President{" "}
              <a href="https://linkedin.com/in/kallentu" target="_blank" className="text-white underline">
                Kallen Tu
              </a>{" "}
              and{" "}
              <a href="https://linkedin.com/in/gordonle" target="_blank" className="text-white underline">
                Gordon Le
              </a>{" "}
              for kickstarting the existence of the CS Class Profile! In addition to the names listed below, there may be additional anonymous contributors and
              those who have provided feedback.
            </span>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <div className="w-[calc(min(80%,800px))] rounded-lg p-8" style={{ backgroundImage: "linear-gradient(150deg, #443996a0, #ffcad0a0)" }}>
            <div className="flex flex-col gap-4">
              <h3 className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(172deg, #ffffff, #ffc7f3)" }}>
                Class Profile Web Developers
              </h3>
              <ul className="list-disc list-inside">
                {classProfileWebDevelopers.map(({ name, link, lead }) => (
                  <li key={link}>
                    <a href={link} target="_blank" className="text-white underline">
                      {lead ? <b>{name}</b> : name}
                    </a>
                    {lead ? <span className="opacity-50"> &mdash; Team Lead</span> : null}
                  </li>
                ))}
              </ul>
              <h3 className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(172deg, #ffffff, #ffda7a)" }}>
                Designers
              </h3>
              <ul className="list-disc list-inside">
                {designers.map(({ name, link, lead }) => (
                  <li key={link}>
                    <a href={link} target="_blank" className="text-white underline">
                      {lead ? <b>{name}</b> : name}
                    </a>
                    {lead ? <span className="opacity-50"> &mdash; Team Lead</span> : null}
                  </li>
                ))}
              </ul>
              <h3 className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(172deg, #ffffff, #a072eb)" }}>
                Community Reps
              </h3>
              <ul className="list-disc list-inside">
                {communityRepresentatives.map(({ name, link, lead }) => (
                  <li key={link}>
                    <a href={link} target="_blank" className="text-white underline">
                      {lead ? <b>{name}</b> : name}
                    </a>
                    {lead ? <span className="opacity-50"> &mdash; Team Lead</span> : null}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <div className="w-[calc(min(80%,800px))] rounded-lg p-8" style={{ backgroundImage: "linear-gradient(150deg, #443996a0, #ffcad0a0)" }}>
            <div className="flex flex-col gap-4">
              <h3 className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(172deg, #ffffff, #a072eb)" }}>
                Past Contributors
              </h3>
              <span className="text-white">
                Our thanks go out to previous contributors as well who built the 2022 and 2023 versions of the Class Profile on which the vast majority of this
                version was built. A lot of work is shared year to year, so we want to express our gratitude to the previous teams as well.
              </span>
              <ul className="list-disc list-inside">
                {pastContributors.map(({ name, link, role }) => (
                  <li key={link}>
                    <a href={link} target="_blank" className="text-white underline">
                      {name}
                    </a>{" "}
                    ({role})
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
