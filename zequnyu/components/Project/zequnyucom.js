/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";
import TextLink, { IconTextLink } from "../TextLink";
import Project from "./Project";
import { JavaScriptBadge, ReactBadge } from "../Badges";

const zequnyucomDescription = (
  <span>
    This site is built by&nbsp;
    <TextLink href="https://reactjs.org/docs/hooks-intro.html">
      React Hooks
    </TextLink>
    &nbsp;+&nbsp;
    <TextLink href="https://nextjs.org/">Next.js</TextLink>
    &nbsp;+&nbsp;
    <TextLink href="https://chakra-ui.com/">chakra-ui</TextLink>, with&nbsp;
    <TextLink href="https://emotion.sh/docs/introduction">Emotion</TextLink> for
    CSS-in-JS and&nbsp;
    <TextLink href="https://www.framer.com/motion/">Framer Motion</TextLink> for
    animation. Design inspiration is from&nbsp;
    <TextLink href="https://slim.computer">slim</TextLink>. Previously
    versions:&nbsp;
    <TextLink href="https://zequnyu-2019.netlify.app/">2019</TextLink>
    ,&nbsp;
    <TextLink href="https://zequnyu-2018.netlify.app/">2018</TextLink>.
  </span>
);

const zequnyucomProject = (
  <Project
    key="zequnyu.com"
    title="zequnyu.com"
    badges={[JavaScriptBadge, ReactBadge]}
    description={zequnyucomDescription}
    links={[
      <IconTextLink
        key="CODE"
        iconType="CODE"
        href="https://github.com/zequnyu/zequnyu.com"
      />,
    ]}
  />
);

export default zequnyucomProject;
