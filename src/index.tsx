import * as React from 'react'
import * as ReactDOM from 'react-dom'
import styled from 'styled-components'
/* pages */
import About from './pages/About'
import Works from './pages/Works'
/* resources */
import './assets/css/font.css'
import './assets/css/index.css'
import LiquidMe from './assets/images/liquid_jpnykw.png'

// Main
const App: React.FC<{}> = () => {
  return (
    <>
      <About />
      <Works />

      <Footer>
        <img src={LiquidMe} />
        <Credit>2020 &copy; jpnykw</Credit>
      </Footer>
    </>
  )
}

// styling
const Margin = styled.div`
  margin: 50;
`

const Footer = styled.div`
  position: absolute;
  transform: translate(-50%, 0);
  left: 50%;
  top: 180%;

  img {
    margin-bottom: 200;
    border-radius: 30px;
  }
`

const Credit = styled.div`
  text-align: center;
  width: 100%;
  margin-bottom: 20;
`

ReactDOM.render(<App />, document.querySelector('#root'))

