import * as React from 'react'
import * as ReactDOM from 'react-dom'
import anime from 'animejs'
import styled from 'styled-components'
/* @material-ui components */
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
/* pages */
import About from './pages/About'
import Works from './pages/Works'
/* resources */
import './assets/css/font.css'
import './assets/css/index.css'
import LiquidMe from './assets/images/liquid_jpnykw.png'
/* extend */
import '../lib/date.extend.ts'

// Main
const App: React.FC<{}> = () => {
  return (
    <>
      <About />
      <Works />

      <Footer>
        {/* TODO: Page/Componentに切り出す */}
        <Container
          className="text"

          ref={ref => {
            anime({
              targets: ref,
              opacity: 1,
              duration: 3600,
              delay: 2800,
            })
          }}
        >
          <Typography>2002年3月5日生まれ {new Date().calcAge({year: 2002, month: 3, date: 5})}歳</Typography>
          <Typography>映像やWebコンテンツなど動くものが好き</Typography>
        </Container>

        <img
          src={LiquidMe}

          ref={ref => {
            anime({
              targets: ref,
              opacity: 0.3,
              duration: 3800,
              delay: 3000,
            })
          }}
        />

        <Container
          className="text"

          ref={ref => {
            anime({
              targets: ref,
              opacity: 1,
              duration: 4000,
              delay: 3200,
            })
          }}
        >
          <Typography>未踏ジュニア'19 採択</Typography>
          <Typography>SecHack365'19 採択</Typography>
          <Typography>N高等学校 特別表彰受賞</Typography>
        </Container>

        <Credit className="credit">2020 &copy; jpnykw</Credit>
      </Footer>
    </>
  )
}

// styling
const Footer = styled.div`
  text-align: center;
  margin-top: 200;

  .text {
    opacity: 0;
  }

  .credit {
    margin-top: 200;
  }

  img {
    margin-top: 100;
    margin-bottom: 100;
    border-radius: 30px;
    opacity: 0;

    @media screen and (max-width: 480px) {
      border-radius: 8px;
      width: 90%;
    }
  }
`

const Credit = styled.div`
  width: 100%;
  margin-bottom: 20;
`

ReactDOM.render(<App />, document.querySelector('#root'))

