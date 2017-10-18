// @flow

import React from 'react'
import { Page, Content, Flex, Feature, Header, Line, List, PrintOnly, Section, Spacer, Text, Title, Experience } from '../components'

export const Home = () => (
    <Page>
        <Flex justify='space-between'>
            <Title>SAM BALANA</Title>
            <Flex col justify='space-around' align='flex-end'>
                <Text>sbalana@uci.edu</Text>
                <Text>(562) 405-9890</Text>
                <PrintOnly>
                    <Text>View this resume online at sambalana.com</Text>
                </PrintOnly>
            </Flex>
        </Flex>
        <Line />
        <Content>
        <Section>
            <Feature>
                I am a full-stack developer enthusiastic about building practical, comprehendible,
                malleable APIs and applications; sharing my passion through teaching; and constantly
                learning.
            </Feature>
        </Section>
        <Section>
            <Header>Education</Header>
            <List
                items={[
                    'BS in Computer Science and Engineering at University of California Irvine (2015 - 2019)',
                    'Relevant classwork: Data Structures, Networks, Organization, Operating Systems, Languages',
                    'GPA - 3.461',
                ]}
            />
        </Section>
        <Section>
            <Header>Proficiencies</Header>
            <List
                items={[
                    'Large-scale frontend web architecture',
                    'React, Redux and ES2017',
                    'Reliable backend architecture',
                    'Go, Node.js, REST and GraphQL',
                    'Scalable distributed systems with elastic application deployment',
                    'Docker and Kubernetes',
                    'Cross-platform mobile application development',
                    'React Native, iOS and Android',
                ]}
            />
        </Section>
        <Section>
            <Header>Open Source Contributions</Header>
            <List
                items={[
                    'Component-based user interface, facebook/react (JavaScript)',
                    'Redux for React forms, erikras/redux-form (React, Redux)',
                    'Extendable query language, graphql/graphql-js (Node.js, GraphQL)',
                    'File watcher and reloader, tockins/realize (Go)',
                ]}
            />
        </Section>
        <Section>
            <Header>Projects</Header>
            <List
                items={[
                    'Schemed.io is a service to plan meet-ups; taught and led small frontend team (React); focusing on the backend (Go, MongoDB)',
                    'Boxmodel is a library for organizing mass amounts of data types for use in frontend development (React, Redux)',
                    'Tetris Clone is a class final project introducing programming patterns and idioms (Java)',
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
                    'Created Ardent Gradebook, a web app used everyday by teacher assistants that reduces time to grade student assignments by ~50% compared to previous solutions (Python, React)',
                    'Developing Ardent HQ, a web app for creation of course curricula, student and classroom management; currently hosting 50 courses and 1,000 users (Node.js, RethinkDB, GraphQL, React)',
                    'Maintaining Ardent Solve, an iPad app allowing students to complete assignments; currently serving 400 students (Node.js, RethinkDB, REST, React Native)',
                    'Redesigned the entire application stack for microservice-based architecture; increasing API throughput by 300% (Docker, Kubernetes)',
                    'Created backitup, a utility program for regularly scheduling database backups to Amazon S3; saving the company $30 per month (Go, RethinkDB)',
                    'Training incoming frontend developers (React, React Native)',
                    'Leading a team to build the following frontend applications:',
                    'Supervised Ardent Classroom, an iPad app for staff that eases student attendance and file management (React Native)',
                    'Supervised Ardent Family, an iOS and Android app that notifies parents of student performance and news (React Native)',
                ]}
            />
            <Experience
                position='Teacher & Mentor'
                company='Ardent Academy for Gifted Youth'
                from='January 2016'
                to='current'
                highlights={[
                    'Teaching middle and high school students how to implement their ideas with React Native',
                    'Mentoring students to guide them through their projects:',
                    'Voluntu (placed 2nd at 2017 Diamond Challenge), AlzheimersGames, ChatterBot, Testaker, iCordis, ASB Vantage, MathFight, HomeAutomation',
                ]}
            />
            <Experience
                position='Freelance Web Developer'
                company='Self-employment'
                from='January 2017'
                to='current'
                highlights={[
                    'Built website/blog for Archangel Risk Solutions (Ember.js)',
                    'Designed logo for Archangel Risk Solutions (Illustrator)',
                    'Developing an online payment portal for Archangel Risk Solutions (Node.js, MongoDB, REST, React, Redux)',
                ]}
            />
        </Section>
        </Content>
    </Page>
)