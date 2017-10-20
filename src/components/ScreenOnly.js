// @flow

import { View } from './View'

export const ScreenOnly = View.extend`
    @media not print {
        display: none;
    }
`