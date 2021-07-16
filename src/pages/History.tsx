import * as React from 'react'
import anime from 'animejs'
import styled from 'styled-components'
/* components */
import Timeline from '../components/Timeline'
/* @material-ui components */
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
/* resources */
import LiquidMe from '../assets/images/liquid_jpnykw.png'
/* extend */
import '../lib/date.extend.ts'

const age: number = new Date().calcAge({
  year: 2002,
  month: 3,
  date: 5
})

const History: React.FC = () => {
  const rotate = (element: React.MouseEvent<HTMLImageElement>) => {
    const delay = 1400
    const myself = element.currentTarget
    myself.style.animation = `rotate ${delay}ms ease-in-out 0ms 1 normal both`
    setTimeout(() => myself.style.animation = '', delay)
  }

  return (
    <>
      <Timeline />
    </>
  )
}

export default History

