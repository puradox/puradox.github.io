// @flow

import React from 'react'
import { Link, Text } from '../../components'

export function chooseProjects (company: string) {
    switch (company) {
        case 'google':
            return [
                <Text><Link to='https://schemed.io'>Schemed.io</Link> is a service to plan meet-ups; taught and led a team of 3 <Link to='https://github.com/hatch-it/schemed-web/tree/develop'>frontend</Link> engineers (React); solely responsible for the <Link to='https://github.com/hatch-it/schemed'>backend</Link> (<b>Go</b>)</Text>,
                <Text><Link to='https://github.com/puradox/sift-sort'>Sift</Link> is a library to sort arrays of objects using the MongoDB <Link to='https://docs.mongodb.com/manual/reference/operator/aggregation/sort/index.html'>$sort</Link> syntax (TypeScript)</Text>,
                <Text><Link to='https://github.com/ArdentLabs/boxmodel'>Boxmodel</Link> is a library for organizing mass amounts of data types for use in frontend development (React, Redux)</Text>,
                <Text><Link to='https://github.com/puradox/tetris-clone'>Tetris Clone</Link> is a class final project using programming patterns and idioms (Java)</Text>,
            ]
        default:
            return [
                <Text><Link to='https://schemed.io'>Schemed.io</Link> is a service to plan meet-ups; taught and led a team of 3 <Link to='https://github.com/hatch-it/schemed-web/tree/develop'>frontend</Link> engineers (React); solely responsible for the <Link to='https://github.com/hatch-it/schemed'>backend</Link> (Go, MongoDB)</Text>,
                <Text><Link to='https://github.com/puradox/sift-sort'>Sift</Link> is a library to sort arrays of objects using the MongoDB <Link to='https://docs.mongodb.com/manual/reference/operator/aggregation/sort/index.html'>$sort</Link> syntax (TypeScript)</Text>,
                <Text><Link to='https://github.com/ArdentLabs/boxmodel'>Boxmodel</Link> is a library for organizing mass amounts of data types for use in frontend development (React, Redux)</Text>,
                <Text><Link to='https://github.com/puradox/tetris-clone'>Tetris Clone</Link> is a class final project using programming patterns and idioms (Java)</Text>,
            ]
    }
}