// @flow

import React from 'react'
import { Page, Content, Flex, Feature, Header, View, Line, List, PrintOnly, Section, Spacer, Text, Title, Experience } from '../components'

export const Home = () => (
    <Page>
        <Flex justify='space-between'>
            <Title>SAM BALANA</Title>
            <Flex col justify='space-around' align='flex-end'>
                <Text>sbalana@uci.edu</Text>
                <Text>(562) 405-9890</Text>
                <PrintOnly>
                    <Text>View this online at sambalana.com</Text>
                </PrintOnly>
            </Flex>
        </Flex>
        <Line />
        <Content>
        <Section>
            <Feature>
                I am a full-stack developer enthusiastic for building practical, comprehendable,
                malleable APIs and applications; sharing my passion through teaching; and constantly
                learning.
            </Feature>
            <Header>Proficiencies</Header>
            <List
                items={[
                    'Large-scale frontend architecture',
                    'React, Redux and ES2017',
                    'Reliable backend architecture',
                    'Node.js, REST and GraphQL',
                    'Scalable distributed systems with elastic application deployment',
                    'Go, Docker and Kubernetes',
                    'Cross-platform mobile application development',
                    'React Native, iOS and Android',
                ]}
            />
        </Section>
        <Section>
            <Header>Open Source Work</Header>
            <Text>
                I contribute to the open source community whenever possible; giving back to the tools
                and libraries I use everyday. Here are a few projects I have contributed to:
            </Text>
            <Spacer />
            <List
                items={[
                    'Component-based user interface, facebook/react',
                    'Redux for React forms, erikras/redux-form',
                    'Extendable query language, graphql/graphql-js',
                    'Go file watcher and reloader, tockins/realize',
                ]}
            />
        </Section>
        <Section>
            <Header>Education</Header>
            <List
                items={[
                    'Pursuing BS in Computer Science and Engineering at University of California Irvine (2015 - 2019)',
                    'Relevant classwork: Data Structures, Networks, Organization, Operating Systems, Languages',
                    'Computer Science at Norco College (2013 - 2015, during high school)',
                ]}
            />
        </Section>
        <Section>
            <Header>Projects</Header>
            <List
                items={[
                    'Schemed - Personally focused on backend (Go), taught and led small frontend team (React)',
                    'Tetris Clone - Java',
                    'boxmodel - JavaScript library for organizing mass amounts of data types',
                ]}
            />
        </Section>
        <Section>
            <Header>Professional Experience</Header>
            <Experience
                position='Lead Software Engineer'
                company='Ardent Academy for Gifted Youth'
                from='October 2015'
                to='current'
                highlights={[
                    'Ardent Gradebook reduces time to grade student assignments by ~50% (Python, React)',
                    'Ardent HQ for creation of course cirricula, student and classroom management (Node.js, React, GraphQL)',
                    'Ardent Solve allows students to complete assignments from an iPad (Node.js, React Native)',
                    'Led a team to complete the following applications over the summer',
                    'Ardent Classroom eases attendence and file management (Node.js, React Native, GraphQL)',
                    'Ardent Family notifies parents of student performance and news (Node.js, React Native, GraphQL)',
                ]}
            />
            <Experience
                position='Teacher / Mentor'
                company='Ardent Academy for Gifted Youth'
                from='January 2016'
                to='current'
                highlights={[
                    'Teach middle and high school students how to implement their ideas with React Native',
                    'Mentor students to guide them through their projects',
                    'A few student projects: Voluntu (placed 2nd at 2017 Diamond Challenge), AlzheimersGames, ChatterBot, Testaker, iCordis, ASB Vantage, MathFight, HomeAutomation',
                ]}
            />
        </Section>
        </Content>
    </Page>
)