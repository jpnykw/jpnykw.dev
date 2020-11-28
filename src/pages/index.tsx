import React, { Suspense } from 'react'
import * as ReactDOM from 'react-dom'
import styled from 'styled-components'
/* pages */
const About = React.lazy(() => import('./About'))
const Works = React.lazy(() => import('./Works'))
const History = React.lazy(() => import('./History'))
/* resources */
import '../assets/css/font.css'
import '../assets/css/index.css'
/* extend */
import '../lib/date.extend.ts'

// Main
const App = () =>
  (
    <>
      <Suspense fallback={<Loading>(=^・^=)</Loading>}>
        <section>
          <About />
          <Works />
          <History />
          <Credit className="credit">2020 &copy; jpnykw</Credit>
        </section>
      </Suspense>
    </>
  )

// styling
const Loading = styled.div`
  opacity: 0.2;
  font-size: 14px;
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
`

const Credit = styled.div`
  width: 100%;
  margin-bottom: 20;
  text-align: center;
  margin-top: 100;
`

ReactDOM.render(<App />, document.querySelector('#root'))

