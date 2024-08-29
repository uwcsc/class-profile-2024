"use client";

import { BottomNav } from "@/components/BottomNav";
import { Header } from "@/components/Header";
import { Panel } from "@/components/Panel";
import { SectionHeader } from "@/components/SectionHeader";
import { CPWebDevs, communityReps, designers } from "@/data/contributors";
import { pageRoutes } from "@/data/routes";

interface ContributorProfile {
  name: string;
  link: string;
}

interface ContributorGroupProps {
  group: Array<ContributorProfile>;
}

function ContributorGroup({ group }: ContributorGroupProps) {
  return (
    <ul>
      {group
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((d, idx) => {
          return (
            <li key={idx}>
              {d.link ? (
                <a href={d.link} target="_blank" rel="noreferrer">
                  {d.name}
                </a>
              ) : (
                <a href="#" onClick={(e) => e.preventDefault()}>
                  {d.name}
                </a>
              )}
            </li>
          );
        })}
    </ul>
  );
}

export default function Contributors() {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <SectionHeader
        title="Contributors"
        subtitle="Huge thanks to all CSC members who have contributed to creating the first ever uWaterloo CS class profile!"
      />
      <Panel>
        <p>
          The 2023 CS Class Profile was completed by members of the UW Computer Science Club. Specifically, several current and past members (as of this
          writing) of the Community Representatives, Designers, Class Profile Web Developers, and Systems Committee put lots of time into making it what it is.
          Please contact <a href="mailto: exec@csclub.uwaterloo.ca">exec@csclub.uwaterloo.ca</a> for specific concerns for the CS Class Profile, but the
          specific contributors include the following:
        </p>
        <ul>
          <li>
            Community Representatives
            <ContributorGroup group={communityReps} />
          </li>
          <li>
            Designers
            <ContributorGroup group={designers} />
          </li>
          <li>
            Class Profile Web Developers
            <ContributorGroup group={CPWebDevs} />
          </li>
          {/* <li>
            Systems Committee
            <ContributorGroup group={sysCom} />
          </li> */}
        </ul>
        <p>
          Furthermore, special thanks to former CSC President and Vice President,{" "}
          <a href="https://www.linkedin.com/in/kallentu/" target="_blank" rel="noreferrer">
            Kallen Tu
          </a>{" "}
          and{" "}
          <a href=" https://www.linkedin.com/in/gordonle/" target="_blank" rel="noreferrer">
            Gordon Le
          </a>
          , for kickstarting the existence of the CS Class Profile and for providing feedback! Note there may be other anonymous contributors on any of the
          teams or committees, but their names are not listed here.
        </p>
      </Panel>
      <BottomNav leftPage={pageRoutes.personal} rightPage={pageRoutes.home}></BottomNav>
    </div>
  );
}
