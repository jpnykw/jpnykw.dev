import * as React from 'react'
import * as ReactDOM from 'react-dom'
import anime from 'animejs'
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
        <img
          src={LiquidMe}
          ref={ref => {
            anime({
              targets: ref,
              opacity: 0.3,
              duration: 3600,
              delay: 2800,
            })
          }}
        />

        <Credit>2020 &copy; jpnykw</Credit>
      </Footer>
    </>
  )
}

// styling
const Footer = styled.div`
  position: absolute;
  transform: translate(-50%, 0);
  left: 50%;
  top: 180%;

  img {
    margin-bottom: 200;
    border-radius: 30px;
    opacity: 0;
  }
`

const Credit = styled.div`
  text-align: center;
  width: 100%;
  margin-bottom: 20;
`

ReactDOM.render(<App />, document.querySelector('#root'))

