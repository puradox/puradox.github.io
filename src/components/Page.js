// @flow

import { View } from './View'

export const Page = View.extend`
    padding: 1em;


    @media screen {
        max-width: 710px;
        margin-left: auto;
        margin-right: auto;
    }
`

export const Content = View.extend`
    @media print {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        justify-content: space-between;
        height: 870px;
    }
`