/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";
import TextLink, { IconTextLink } from "../TextLink";
import Project from "./Project";
import { PythonBadge } from "../Badges";

const garageDescription = (
  <span>
    garage is an open source Python toolkit for developing and evaluating
    reinforcement learning algorithms, and an accompanying library of
    state-of-the-art implementations built using that toolkit. garage supports
    both&nbsp;
    <TextLink href="https://www.tensorflow.org">TensorFlow</TextLink>
    &nbsp;and&nbsp;
    <TextLink href="https://pytorch.org">PyTorch</TextLink>.
  </span>
);

const garageProject = (
  <Project
    key="garage"
    title="garage"
    subTitle="USC RESL"
    badges={[PythonBadge]}
    description={garageDescription}
    links={[
      <IconTextLink
        key="CODE"
        iconType="CODE"
        href="https://github.com/rlworkgroup/garage"
      />,
    ]}
  />
);

export default garageProject;
