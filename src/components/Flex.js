// @flow

import styled from 'styled-components'
import { View } from './View'

type Props = {
    col: boolean,
    justify: string,
    align: string,
}

export const Flex = View.extend`
    display: flex;
    ${props => props.col && 'flex-direction: column;'}
    ${props => props.justify && `justify-content: ${props.justify};`}
    ${props => props.align && `align-items: ${props.align};`}
`