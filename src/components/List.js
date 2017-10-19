// @flow

import React from 'react'
import styled from 'styled-components'
import { Text } from './Text'

type Props = {
    items: string[],
}

const ListContainer = styled.ul`
    margin: 0;
    padding-left: .9em;
    text-indent: -.9em;
    list-style-type: none;
`

const Item = styled.li`
    &:before {
        content: "●";
        color: #b8b8b8;
        margin-right: 0.3em;
    }

    line-height: 1.6;
`

export const List = (props: Props) => (
    <ListContainer>
        {props.items.map((item, index) => typeof item === 'string' ? (
            <Item key={item}>
                <Text>{item}</Text>
            </Item>
        ) : (
            <Item key={index}>
                {item}
            </Item>
        ))}
    </ListContainer>
)