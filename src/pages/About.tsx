import React from 'react'
import anime from 'animejs'
import styled from 'styled-components'
/* @material-ui components */
import Container from '@material-ui/core/Container'
/* @material-ui icons */
import TwitterIcon from '@material-ui/icons/Twitter'
import GitHubIcon from '@material-ui/icons/GitHub'
import YouTubeIcon from '@material-ui/icons/YouTube'
/* components */
import Link from '../components/Link'
import MotionText from '../components/Text'
/* resources */
import '../assets/css/font.css'
import Icon from '../assets/images/icon.png'
import SoundCloudIcon from '../assets/svg/soundcloud-brands.svg'
/* extend */
import '../../lib/string.extend.ts'

const AboutMe: React.FC<{}> = (props) => {
  const icon_size = 24

  return (
    <>
      <Motion>
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
              rotate: function() { return anime.random(-360, 360) },
              borderRadius: function() { return ['50%', anime.random(10, 35) + '%'] },
              duration: function() { return anime.random(1400, 1800) },
              delay: function() { return anime.random(900, 1100) },
              opacity: function(el: any) {
                return Number(el.getAttribute('data-opacity')) || 1
              },
              direction: 'alternate',
              loop: true
            })
          }}

          style={{
            height: '100px',
            width: '100px',
          }}
        >
          <Element
            data-x="-200" data-y="-60" className="small circle el"
            style={{width: '14px', height: '14px', background: 'rgba(164, 255, 79)'}}
          />
          <Element
            data-x="200" data-y="190" className="small circle el"
            style={{width: '12px', height: '12px', background: 'rgba(79, 255, 164)'}}
          />
          <Element
            data-x="170" data-y="-260" className="small circle el"
            style={{width: '10px', height: '10px', background: 'rgba(255, 164, 79)'}}

            onClick={() => {
              console.log('ʕ•ٹ•ʔ', 'ﾈｺﾁｬﾝ...')
              //TODO: ひみつ
              Array(30).fill(null).map(() => {
                const cat = document.createElement('div')
                cat.innerText = '🐱😺😼🙀😹😻😿'.random_unicode()

                cat.style.fontSize = `${16 + Math.random() * 10}px`
                cat.style.position = 'absolute'
                cat.style.left = `${Math.random() * innerWidth}px`
                cat.style.top = '-20px'

                const easing = 'cubic-bezier(0.37, 0.02, 1, -0.02)'
                cat.style.animation = `fall ${0.4 + Math.random() * 1.2}s ${easing} ${Math.random() * 4}s 1 normal both`

                document.body.appendChild(cat)
              })
            }}
          />
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
              duration: function() {
                return anime.random(1800, 2600)
              },
              delay: function() {
                return anime.random(1200, 1300)
              },
              borderRadius: 100,
              opacity: 0.2,
              scale: 3,
            })
          }}
        >
          {
            Array(14).fill(null).map((_, id) => {
              const x = (200 + Math.random() * 650) * (Math.random() < .5 ? 1 : -1)
              const y = (150 + Math.random() * 350) * (Math.random() < .5 ? 1 : -1)

              return (
                <Element
                  key={id} data-x={x} data-y={y} className="small circle el"
                  style={{opacity: '0', width: '2px', height: '2px', background: 'rgba(244, 244, 244, 10)'}}
                />
              )
            })
          }
        </Elements>
      </Motion>

      <Contents>

        <div style={{textAlign: 'center'}}>
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

          {/* NAME */}
          <div style={{marginTop: '20px'}}>
            <MotionText
              text="Haruto Hirakawa"
              delay={1100}
              cooltime={30}
            />
          </div>

          <div>
            <Link delay={1280} icon={<TwitterIcon style={{fontSize: `${icon_size - 6}px`}} />} text="Twitter" href="https://twitter.com/jpnykw" />
            <Link delay={1340} icon={<GitHubIcon style={{fontSize: `${icon_size - 6}px`}} />} text="GitHub" href="https://github.com/jpnykw" />
            <Link delay={1400} icon={<YouTubeIcon style={{fontSize: `${icon_size}px`}} />} text="YouTube" href="https://www.youtube.com/channel/UCmpA3l3QF0VI4nvNVADXoyg/featured" />
            <Link delay={1460} icon={<SoundCloudIcon width={`${icon_size}px`} />} text="SoundCloud" href="https://soundcloud.com/jpnykw" />
          </div>
        </div>
      </Contents>
    </>
  )
}

export default AboutMe

/* naming */
const Elements = styled.div``
/* Styling */
const Motion = styled.div`
  position: relative;
  top: ${innerHeight / 2}px;
`

const Element = styled.div`
  opacity: 0;
  cursor: pointer;
`

const Contents = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
`

const StyledImg = styled.img`
  width: 180px;
  position: relative;
  top: 50px;
  border-radius: 90px;
  opacity: 0;
`

const Margin = styled.div`
  margin: 30;
`

