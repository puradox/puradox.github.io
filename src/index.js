import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './utils/registerServiceWorker'

console.info(`Oh hey!
If you are reading this, we should definitely work together!

Let me save you the effort of reading through the source...
 - ReactJS to build the UI
 - React Router for multiplexing
 - styled-components for styling (I'm hoping for a better solution someday)

I am a strong believer in component-based architecture; which I split up into 'dump' components and 'smart' containers.
 - Components simply display the information given to them with style. Grunt work.
 - Containers orchestrates components and often deals with state.

I only use what I need.
 - I'm a big fan of Redux, but is not necessary here.
 - I anticipate the possibility of porting to React Native, but this is not going on an app.

If you have any questions, or just want to geek over React or Go, email me!
Don't be a stranger :)
`)

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
