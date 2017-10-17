// @flow

import React from 'react'
import styled from 'styled-components'
import { Text } from './Text'

type Props = {
    items: string[],
}

const ListContainer = styled.ul`
    margin: 0;
    padding-left: .75em;
    text-indent: -.75em;
    list-style-type: none;
`

const Item = styled.li`
    &:before {
        content: "\\2022";
        color: #b8b8b8;
        margin-right: 0.3em;
    }

    line-height: 1.6;
`

export const List = (props: Props) => (
    <ListContainer>
        {props.items.map(item => (
            <Item><Text>{item}</Text></Item>
        ))}
    </ListContainer>
)