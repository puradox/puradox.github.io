// @flow

import { View } from './View'

export const Page = View.extend`
    padding: 1em;


    @media screen {
        max-width: 710px;
        margin-left: auto;
        margin-right: auto;
    }

    @media print {
        padding: 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
`