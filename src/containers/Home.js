// @flow

import React from 'react'
import { Page, Flex, Feature, Header, View, Line, List, Section, Spacer, Text, Title } from '../components'

export const Home = () => (
    <Page>
        <Flex justify='space-between'>
            <Title>SAM BALANA</Title>
            <Flex col justify='space-around' align='flex-end'>
                <Text>sbalana@uci.edu</Text>
                <Text>(562) 405-9890</Text>
            </Flex>
        </Flex>
        <Line />
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
                    'Pursuing MS in Computer Science and Engineering at University of California Irvine (2015 - 2019)',
                    'Relevant classwork: Data Structures, Networks, Organization, Operating Systems, Languages',
                    'Computer Science at Norco College (2013 - 2015)',
                ]}
            />
        </Section>
        <Section>
            <Header>Professional Experience</Header>
            <!-- TODO -->
        </Section>
    </Page>
)