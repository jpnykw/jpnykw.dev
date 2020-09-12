import * as React from 'react'
import * as ReactDOM from 'react-dom'
import anime from 'animejs'
import styled from 'styled-components'
/* @material-ui components */
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
/* resources */
import LiquidMe from '../assets/images/liquid_jpnykw.png'
/* extend */
import '../../lib/date.extend.ts'

const History: React.FC<{}> = (props) => {
  return (
    <>
      <Contents>
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
      </Contents>
    </>
  )
}

export default History

const  Contents = styled.div`
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

