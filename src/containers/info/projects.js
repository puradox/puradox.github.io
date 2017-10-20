// @flow

import React from 'react'
import { Link, Text } from '../../components'

export function chooseProjects (company: string) {
    switch (company) {
        case 'google':
            return [
                <Text>Devise <Link to='https://schemed.io'>schemed.io</Link>, a service to plan meet-ups; taught and led a team of 3 <Link to='https://github.com/hatch-it/schemed-web/tree/develop'>frontend</Link> engineers (React); solely responsible for the <Link to='https://github.com/hatch-it/schemed'>backend</Link> (<b>Go</b>)</Text>,
                <Text>Create <Link to='https://github.com/puradox/sift-sort'>sift</Link>, a library to sort arrays of objects using the MongoDB <Link to='https://docs.mongodb.com/manual/reference/operator/aggregation/sort/index.html'>$sort</Link> syntax (TypeScript)</Text>,
                <Text>Create <Link to='https://github.com/ArdentLabs/boxmodel'>boxmodel</Link>, a library for organizing mass amounts of data types for use in frontend development (React, Redux)</Text>,
                <Text>Create <Link to='https://github.com/puradox/tetris-clone'>tetris-clone</Link>, a class final project using programming patterns and idioms (Java)</Text>,
            ]
        default:
            return [
                <Text>Devise <Link to='https://schemed.io'>schemed.io</Link>, a service to plan meet-ups; taught and led a team of 3 <Link to='https://github.com/hatch-it/schemed-web/tree/develop'>frontend</Link> engineers (React); solely responsible for the <Link to='https://github.com/hatch-it/schemed'>backend</Link> (Go)</Text>,
                <Text>Create <Link to='https://github.com/puradox/sift-sort'>sift</Link>, a library to sort arrays of objects using the MongoDB <Link to='https://docs.mongodb.com/manual/reference/operator/aggregation/sort/index.html'>$sort</Link> syntax (TypeScript)</Text>,
                <Text>Create <Link to='https://github.com/ArdentLabs/boxmodel'>boxmodel</Link>, a library for organizing mass amounts of data types for use in frontend development (React, Redux)</Text>,
                <Text>Create <Link to='https://github.com/puradox/tetris-clone'>tetris-clone</Link>, a class final project using programming patterns and idioms (Java)</Text>,
            ]
    }
}