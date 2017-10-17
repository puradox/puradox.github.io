// @flow

import { View } from './View'

type Props = {
    size: string,
}

export const Spacer = View.extend`
    margin: ${props => props.size || '0.5em'};
`