// @flow

import { View } from './View'

export const PrintOnly = View.extend`
    @media screen {
        display: none;
    }
`