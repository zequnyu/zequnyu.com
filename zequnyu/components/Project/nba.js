/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";
import TextLink, { IconTextLink } from "../TextLink";
import Project from "./Project";
import { ReactBadge, MongoDBBadge } from "../Badges";

const nbaDescription = (
  <span>
    With the use of&nbsp;
    <TextLink href="https://d3js.org">d3.js</TextLink>, 6 interactive charts are
    built for showing NBA game performance in 2018-2019 season. This project
    also demonstrates the practice of&nbsp;
    <TextLink href="https://en.wikipedia.org/wiki/Serverless_computing">
      serverless
    </TextLink>
    &nbsp;to integrate <TextLink href="https://nextjs.org/">Next.js</TextLink>
    &nbsp; and&nbsp;
    <TextLink href="https://www.mongodb.com/">MongoDB</TextLink>.
  </span>
);

const nbaProject = (
  <Project
    key="NBA Analysis"
    title="NBA Analysis"
    badges={[ReactBadge, MongoDBBadge]}
    description={nbaDescription}
    links={[
      <IconTextLink
        key="CODE"
        iconType="CODE"
        href="https://github.com/zequnyu/nba-game-performance"
      />,
      <IconTextLink
        key="WEBSITE"
        iconType="WEBSITE"
        href="https://nba-game-performance.netlify.app/"
      />,
      <IconTextLink
        key="DEMO"
        iconType="DEMO"
        href="https://youtu.be/9iNS43uMiOM"
      />,
    ]}
  />
);

export default nbaProject;
