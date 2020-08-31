/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";
import TextLink, { IconTextLink } from "../TextLink";
import Project from "./Project";
import { JavaBadge, MySQLBadge } from "../Badges";

const travelDashboardDescription = (
  <span>
    We built a&nbsp;
    <TextLink href="https://docs.oracle.com/javase/8/javafx/get-started-tutorial/jfx-overview.htm">
      JavaFx
    </TextLink>
    &nbsp;desktop software, which takes the raw data of different Excel file
    schemas available from Atos, perform analytics, and produce a summary report
    to present the information in a consumable format. Supervised by
    Professor&nbsp;
    <TextLink href="https://www.nottingham.ac.uk/computerscience/people/natasa.milic-frayling">
      Natasa Milic-Frayling
    </TextLink>
    .
  </span>
);

const travelDashboardProject = (
  <Project
    key="Travel Dashboard"
    title="Travel Dashboard"
    subTitle="ATOS UK"
    badges={[JavaBadge, MySQLBadge]}
    description={travelDashboardDescription}
    links={[
      <IconTextLink
        key="CODE"
        iconType="CODE"
        href="https://github.com/zequnyu/TravelDashboard"
      />,
      <IconTextLink
        key="DEMO"
        iconType="DEMO"
        href="https://prezi.com/7dcthzh6e37w/?token=35036f4ce470539a401af89c830b292a6be700099d3887a298e5abdc9314d991"
      />,
    ]}
  />
);

export default travelDashboardProject;
