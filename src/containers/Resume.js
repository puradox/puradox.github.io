// @flow

import React from "react";
import {
  Page,
  Content,
  Flex,
  Feature,
  Header,
  Line,
  Link,
  List,
  PrintOnly,
  ScreenOnly,
  Section,
  Spacer,
  Text,
  Title,
  Experience
} from "../components";
import {
  chooseClasswork,
  chooseContributions,
  chooseExperience,
  chooseFeature,
  chooseProficiencies,
  chooseProjects
} from "./info";

type Props = {
  company: string
};

function toTitle(company: string) {
  return `${company.substr(0, 1).toUpperCase()}${company.substr(1)}`;
}

export const Resume = (props: Props) => (
  <Page>
    <Flex justify="space-between">
      <Title>SAM BALANA</Title>
      <Flex col justify="flex-end" align="flex-end">
        <Text>sbalana@uci.edu</Text>
        <Text>(562) 405-9890</Text>
        <PrintOnly>
          <Text>
            Full version at{" "}
            <b>
              sambalana.com
              {props.company && `/${props.company}`}
            </b>
          </Text>
        </PrintOnly>
      </Flex>
    </Flex>
    <Line />
    <Content>
      {props.company && (
        <ScreenOnly>
          <Section>
            <Text>
              <b>Hey {toTitle(props.company)}!</b> Glad to see you back! If
              you're technically inclined, take a look at my resume's source
              code on <Link to="https://github.com/puradox/resume">GitHub</Link>
              .
            </Text>
          </Section>
          <Spacer size="0.7em" />
        </ScreenOnly>
      )}
      <Section>
        <Feature>{chooseFeature(props.company)}</Feature>
      </Section>
      <Section>
        <Header>Education</Header>
        <List
          items={[
            <Text>
              Bachelor of Science in <b>Computer Science and Engineering</b> at
              University of California Irvine (Graduating June 2019)
            </Text>,
            <Text>Relevant classwork: {chooseClasswork(props.company)}</Text>
          ]}
        />
      </Section>
      <Section>
        <Header>Proficiencies</Header>
        <List items={chooseProficiencies(props.company)} />
      </Section>
      <Section>
        <Header>Open Source Contributions</Header>
        <List items={chooseContributions(props.company)} />
      </Section>
      <Section>
        <Header>Projects</Header>
        <List items={chooseProjects(props.company)} />
      </Section>
      <Section>
        <Header>Professional Experience</Header>
        <Experience
          position="Software Engineering Intern"
          company="Google - Chrome Operations - Performance Dashboard"
          from="June 2018"
          to="September 2018"
          highlights={[
            "Implement caching of time series data; reducing response time by 98% (IndexedDB, Service Worker)",
            "Design caching of performance reports; decreasing response time by 99% and surpassing stretch goals (IndexedDB, Service Worker)",
            "Contribute to standardizing frontend technologies across Chrome Operations"
          ]}
        />
        <Experience
          position="Lead Software Engineer"
          company="Ardent Academy for Gifted Youth"
          from="October 2015"
          to="June 2018"
          highlights={chooseExperience(props.company)}
        />
        <Experience
          position="Teacher & Mentor"
          company="Ardent Academy for Gifted Youth"
          from="January 2016"
          to="June 2018"
          highlights={[
            "Teach middle and high school students how to implement their ideas with React Native",
            "Mentor students to guide them through their projects and programming careers"
          ]}
        />
        <ScreenOnly>
          <Experience
            position="Freelance Web Developer"
            from="January 2017"
            to="June 2018"
            highlights={[
              <Text>
                Build <Link to="https://archangelrs.com/">website/blog</Link>{" "}
                for Archangel Risk Solutions (Ember.js)
              </Text>,
              // 'Design logo for Archangel Risk Solutions (Illustrator)',
              "Develop an online payment portal for Archangel Risk Solutions (Node.js, MongoDB, REST, React, Redux, Flow)"
            ]}
          />
        </ScreenOnly>
      </Section>
    </Content>
    <ScreenOnly>
      <Spacer size="0.7em" />
      <Line />
      <Flex justify="space-between">
        <Text>Last modified August 10, 2018</Text>
        <Text>
          <Link print>Print this page</Link>
        </Text>
      </Flex>
    </ScreenOnly>
  </Page>
);
