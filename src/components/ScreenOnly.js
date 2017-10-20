// @flow

import { View } from './View'

export const ScreenOnly = View.extend`
    @media print {
        display: none;
    }
`