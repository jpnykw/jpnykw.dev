import React from 'react'
import anime from 'animejs'
import styled from 'styled-components'
/* @material-ui components */
import Container from '@material-ui/core/Container'
/* @material-ui icons */
import TwitterIcon from '@material-ui/icons/Twitter'
import GitHubIcon from '@material-ui/icons/GitHub'
/* components */
import Link from '../components/Link'
import MotionText from '../components/Text'
/* resources */
import '../assets/css/font.css'
import Icon from '../assets/images/icon.png'

const AboutMe: React.FC<{}> = (props) => {
  return (
    <Contents className="center">
      {/* MOTION */}
      <Elements
        className="loop center"

        ref={ref => {
          anime({
            targets: '.loop .el',
            translateX: function(el: any) {
              return Number(el.getAttribute('data-x')) + anime.random(-20, 30)
            },
            translateY: function(el: any) {
              return Number(el.getAttribute('data-y')) + anime.random(-50, 50)
            },
            scale: 2,
            rotate: function() { return anime.random(-360, 360); },
            borderRadius: function() { return ['50%', anime.random(10, 35) + '%']; },
            duration: function() { return anime.random(1400, 1800); },
            delay: function() { return anime.random(900, 1100); },
            opacity: function(el: any) {
              return Number(el.getAttribute('data-opacity')) || 1
            },
            direction: 'alternate',
            loop: true
          });
        }}

        style={{
          height: '100px',
          width: '100px',
        }}
      >
        <Element data-x="-200" data-y="-60" className="small circle el" style={{opacity: '0', width: '14px', height: '14px', background: 'rgba(164, 255, 79)'}} />
        <Element data-x="200" data-y="190" className="small circle el" style={{opacity: '0', width: '12px', height: '12px', background: 'rgba(79, 255, 164)'}} />
        <Element data-x="170" data-y="-260" className="small circle el" style={{opacity: '0', width: '10px', height: '10px', background: 'rgba(255, 164, 79)'}} />
      </Elements>

      <Elements
        className="star center"

        ref={ref => {
          anime({
            targets: '.star .el',
            translateX: function(el: any) {
              return Number(el.getAttribute('data-x')) + anime.random(-20, 30)
            },
            translateY: function(el: any) {
              return Number(el.getAttribute('data-y')) + anime.random(-50, 50)
            },
            duration: function() { return anime.random(1800, 2600); },
            delay: function() { return anime.random(1200, 1300); },
            borderRadius: 100,
            opacity: 0.2,
            scale: 3,
          })
        }}
      >
        {
          Array(14).fill(null).map(() => {
            const x = (200 + Math.random() * 650) * (Math.random() < .5 ? 1 : -1)
            const y = (150 + Math.random() * 350) * (Math.random() < .5 ? 1 : -1)

            return (
              <Element
                data-x={x} data-y={y} className="small circle el"
                style={{opacity: '0', width: '2px', height: '2px', background: 'rgba(244, 244, 244, 10)'}}
              />
            )
          })
        }
      </Elements>

      {/* ICON */}
      <StyledImg
        src={Icon}

        ref={ref => {
          anime({
            targets: ref,
            opacity: 1,
            translateY: -50,
            // easing: 'easeInOutExpo',
            easing: 'spring(1, 80, 10, 0)',
            delay: 800,
            duration: 400,
          })
        }}
      />

      <Margin />

      {/* NAME */}
      <MotionText
        text="Haruto Hirakawa"
        delay={1100}
        cooltime={30}
      />

      <Container>
        <Link delay={1280} icon={<TwitterIcon />} text="Twitter" href="https://twitter.com/jpnykw" />
        <Link delay={1370} icon={<GitHubIcon />} text="GitHub" href="https://github.com/jpnykw" />
      </Container>
    </Contents>
  )
}

export default AboutMe

/* naming */
const Contents = styled.div``
const Elements = styled.div``
const Element = styled.div``

/* Styling */
const StyledImg = styled.img`
  border-radius: 90px;
  width: 180px;
  opacity: 0;
  position: relative;
  top: 50px;
`

const Margin = styled.div`
  margin: 30;
`

