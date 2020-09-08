import * as React from 'react'
import * as ReactDOM from 'react-dom'
import styled from 'styled-components'
/* pages */
import About from './pages/About'
import Works from './pages/Works'
/* resources */
import './assets/css/font.css'
import './assets/css/index.css'

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

