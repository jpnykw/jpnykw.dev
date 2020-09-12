import * as React from 'react'
import * as ReactDOM from 'react-dom'
import anime from 'animejs'
import styled from 'styled-components'
/* pages */
import About from './pages/About'
import Works from './pages/Works'
import History from './pages/History'
/* resources */
import './assets/css/font.css'
import './assets/css/index.css'
/* extend */
import '../lib/date.extend.ts'

// Main
const App: React.FC<{}> = () => {
  return (
    <>
      <About />
      <Works />
      <History />

      <Credit className="credit">2020 &copy; jpnykw</Credit>
    </>
  )
}

// styling
const Credit = styled.div`
  width: 100%;
  margin-bottom: 20;
  text-align: center;
  margin-top: 100;
`

ReactDOM.render(<App />, document.querySelector('#root'))

