import * as React from 'react'
import * as ReactDOM from 'react-dom'
import styled from 'styled-components'
import { Canvas, useFrame } from 'react-three-fiber'

import './assets/css/font.css'
import './assets/css/index.css'

// pages for router
import About from './pages/About'
import Works from './pages/Works'

// Main
const App: React.FC<{}> = () => {
  return (
    <>
			<About />

      <Works />
    </>
  )
}

// styling
const Margin = styled.div`
  margin: 100;
`

ReactDOM.render(<App />, document.querySelector('#root'))

