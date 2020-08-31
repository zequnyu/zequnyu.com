/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";
import TextLink, { IconTextLink } from "../TextLink";
import Project from "./Project";
import { JavaBadge } from "../Badges";

const diamondHunterDescription = (
  <span>
    A 2D-RPG game built by&nbsp;
    <TextLink href="https://docs.oracle.com/javase/8/javafx/get-started-tutorial/jfx-overview.htm">
      JavaFx
    </TextLink>
    . The user controls our hero to collect all 15 diamonds to win. To achieve
    the goal, the player need to find item axe and boat as well. A map viewer is
    provided to overview the whole map and items position can be set up by user
    themselves.
  </span>
);

const diamondHunterProject = (
  <Project
    key="Diamond Hunter"
    title="Diamond Hunter"
    badges={[JavaBadge]}
    description={diamondHunterDescription}
    links={[
      <IconTextLink
        key="CODE"
        iconType="CODE"
        href="https://github.com/zequnyu/Diamond-Hunter"
      />,
    ]}
  />
);

export default diamondHunterProject;
