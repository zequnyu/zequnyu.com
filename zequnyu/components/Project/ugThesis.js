/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";
import TextLink, { IconTextLink } from "../TextLink";
import Project from "./Project";
import { PythonBadge, MatlabBadge } from "../Badges";

const ugThesisDescription = (
  <span>
    My undergraduate dissertation:{" "}
    <span style={{ fontFamily: "LeituraNews-Italic1" }}>
      Data Collection and Analysis of the Linkage between Mental Workload and
      Spontaneous Facial Expression on Pattern Recognition Task
    </span>
    &nbsp;scored 80+. Supervised by Dr.&nbsp;
    <TextLink href="https://www.nottingham.ac.uk/computerscience/people/max.wilson">
      Max L. Wilson
    </TextLink>
    .
  </span>
);

const ugThesisProject = (
  <Project
    key="UG Thesis"
    title="UG Thesis"
    badges={[PythonBadge, MatlabBadge]}
    description={ugThesisDescription}
    links={[
      <IconTextLink
        key="PAPER"
        iconType="PAPER"
        href="https://github.com/zequnyu/ugthesis/blob/master/thesis/thesis.pdf"
      />,
      <IconTextLink
        key="PPT"
        iconType="PPT"
        href="https://github.com/zequnyu/ugthesis/blob/master/thesis/pre.pdf"
      />,
      <IconTextLink
        key="DEMO"
        iconType="DEMO"
        href="https://prezi.com/view/3pQhrXEIPJN2rEgwTiu9/"
      />,
    ]}
  />
);

export default ugThesisProject;
