/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";
import TextLink, { IconTextLink } from "../TextLink";
import Project from "./Project";
import { PythonBadge, JavaScriptBadge, ReactBadge } from "../Badges";

const uRankDescription = (
  <span>
    uRank is a project to collect, process and visualize data from&nbsp;
    <TextLink href="https://www.topuniversities.com">QS</TextLink>
    ,&nbsp;
    <TextLink href="https://www.usnews.com/education/best-global-universities">
      US News
    </TextLink>
    ,&nbsp;
    <TextLink href="https://www.timeshighereducation.com/">Times</TextLink>
    &nbsp;and&nbsp;
    <TextLink href="http://www.shanghairanking.com/">ARWU</TextLink>
    &nbsp;world university rankings in 2015-2019. Data is collected by the
    Python web crawling framework&nbsp;
    <TextLink href="https://scrapy.org/">Scrapy</TextLink>
    &nbsp;and website is built by&nbsp;
    <TextLink href="https://reactjs.org/">React</TextLink>
    ,&nbsp;
    <TextLink href="https://www.chartjs.org/">Chart.js</TextLink>
    &nbsp;and&nbsp;
    <TextLink href="https://bulma.io/">Bulma</TextLink>.
  </span>
);

const uRankProject = (
  <Project
    key="uRank"
    title="uRank"
    badges={[PythonBadge, JavaScriptBadge, ReactBadge]}
    description={uRankDescription}
    links={[
      <IconTextLink
        key="CODE"
        iconType="CODE"
        href="https://github.com/zequnyu/uRank"
      />,
      <IconTextLink
        key="WEBSITE"
        iconType="WEBSITE"
        href="https://urank.netlify.app"
      />,
    ]}
  />
);

export default uRankProject;
