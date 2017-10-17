// @flow

import React from 'react'
import styled from 'styled-components'
import { View } from './View'
import { List } from './List'

type Props = {
    position: string,
    company: string,
    from: string,
    to: string,
    highlights: string[],
}

const Container = View.extend`
    display: flex;
    flex-direction: column;
    margin-bottom: 0.5em;
`

const Position = styled.h3`
    font-family: 'Oswald', sans-serif;
    font-size: 1.5em;
    margin: 0;
`

const Company = styled.span`
    font-family: 'Bitter', serif;
    font-weight: 700;
`

const Time = styled.span`
    font-family: 'Bitter', serif;
    margin-bottom: 0.5em;
`

export const Experience = (props: Props) => (
    <Container>
        <Position>{props.position}</Position>
        <Company>{props.company}</Company>
        <Time>{props.from} - {props.to}</Time>
        <List items={props.highlights} />
    </Container>
)