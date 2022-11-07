import React, { memo, useState, useCallback } from 'react'
import anime from 'animejs'
import styled from 'styled-components'

/* animation */
import { Player } from '@lottiefiles/react-lottie-player'

/* animation data */
import TypographyMotion from '../assets/json/animation/typography.json';

import {
	GrTwitter as TwitterIcon,
	GrGithub as GitHubIcon,
	GrYoutube as YouTubeIcon,
	GrSoundcloud as SoundCloudIcon,
} from 'react-icons/gr'

/* components */
import Link from '../components/Link'
import MotionText from '../components/Text'

/* resources */
import '../assets/css/font.css'
import Icon from '../assets/images/jpnykw.png'

/* extend */
import '../lib/string.extend.ts'

const minX = 150
const minY = 100

/* naming */
const Elements = styled.div``

/* styling */
const Motion = styled.div`
  position: relative;
  top: ${innerHeight / 2}px;
`

const Element = styled.div`
  opacity: 0;
  cursor: pointer;
`

const Contents = styled.div`
  width: 100vw;
  height: calc(100vh - 50px);
  display: grid;
  place-items: center;
`

const StyledImg = styled.img`
  width: 180px;
  position: relative;
  top: 0px;
  border-radius: 90px;
  opacity: 0;
  cursor: pointer;
`

const nop = () => Math.random() > 0.5 ? 1 : -1

const RandomElements = memo(() => {
	return (
		<Motion>
			<Elements
				className="fragments center"

				ref={() => {
					anime({
						targets: '.fragments .el',
						translateX: (el: HTMLElement) => {
							return Number(el.getAttribute('data-x')) + anime.random(-20, 30)
						},
						translateY: (el: HTMLElement) => {
							return Number(el.getAttribute('data-y')) + anime.random(-50, 50)
						},
						scale: () => {
							return 2
						},
						rotate: () => {
							return anime.random(-360, 360)
						},
						borderRadius: () => {
							return ['50%', anime.random(10, 35) + '%']
						},
						duration: () => {
							return anime.random(1400, 1800)
						},
						delay: () => {
							return anime.random(400, 1400)
						},
						opacity: (el: HTMLElement) => {
							return Number(el.getAttribute('data-opacity')) || 1
						},
					})
				}}

				style={{
					height: '100px',
					width: '100px',
				}}
			>
				{Array(8).fill(null).map((_, index: number) => {
					const colorPalette = [
						'rgba(79, 255, 164)',
						'rgba(255, 80, 120)',
						'rgba(164, 255, 79)',
						'rgba(50, 160, 240)',
					]

					const angle = Math.random() * 360 * Math.PI / 180
					const radius = 180 + Math.random() * 200
					const x = Math.cos(angle) * radius
					const y = Math.sin(angle) * radius - 50

					const size = (5 + Math.random() * 25)
					const blur = (size / 30) * 5

					return (
						<Element
							key={`cube-${index}`}
							data-x={`${x}`}
							data-y={`${y}`}
							className="small circle el"
							style={{
								width: `${size}px`,
								height: `${size}px`,
								background: colorPalette[Math.floor(Math.random() * colorPalette.length)],
								filter: `blur(${blur}px)`,
							}}
						/>
					)
				})}
			</Elements>

			<Elements
				className="star center"

				ref={() => {
					anime({
						targets: '.star .el',
						translateX: function(el: HTMLElement) {
							return Number(el.getAttribute('data-x')) + anime.random(-20, 30)
						},
						translateY: function(el: HTMLElement) {
							return Number(el.getAttribute('data-y')) + anime.random(-50, 50)
						},
						duration: function() {
							return anime.random(1800, 2600)
						},
						delay: function() {
							return anime.random(1240, 1500)
						},
						borderRadius: 100,
						opacity: 0.2,
						scale: 3,
					})
				}}
			>
				{Array(60).fill(null).map((_, id) => {
					const x = nop() * (minX + Math.random() * (innerWidth - minX))
					const y = nop() * (minY + Math.random() * (innerHeight - minY)) 
					const px = 1 + Math.random() * 1.5

					return (
						<Element
							key={id}
							data-x={x / 2}
							data-y={y / 2}
							className="small circle el"
							style={
								{
									opacity: '0',
									width: `${px}px`,
									height: `${px}px`,
									background: 'rgb(244, 244, 244)',
								}
							}
						/>
					)
				})}
			</Elements>
		</Motion>
	)
})

const AboutMe: React.FC = () => {
  const [animatedIcon, setAnimatedIcon] = useState(false)
  const icon_size = 24

  const handleClickIcon = useCallback((event: any) => {
    if (!animatedIcon) {
      setAnimatedIcon(true)
      event.target.style.animation = 'spin 800ms ease-in-out 0s 1 normal'
      setTimeout(() => {
        event.target.style.animation = ''
        setAnimatedIcon(false)
      }, 800);
    }
  }, [])

  return (
    <>
			<RandomElements />
      <Contents>
        <div
					style={{
						textAlign: 'center',
						position: 'absolute',
						transform: 'translate(-50%, -50%)',
						left: '50%',
						top: '50%',
					}}
				>
          <StyledImg
            src={Icon}
            onClick={handleClickIcon}
            ref={(ref) => {
              anime({
                targets: ref,
                opacity: 1,
                translateY: 150,
                easing: 'spring(1, 80, 10, 0)',
                delay: 400,
                duration: 400,
              })
            }}
          />

          <Player
            keepLastFrame={true}
            background="transparent"
            src={TypographyMotion}
            style={{
              width: '400px',
              height: '400px',
              pointerEvents: 'none',
            }}
            ref={(ref) => {
              setTimeout(() => {
                if (ref === null) return null;
                ref!.play()
              }, 1400)
            }}
          />

          <div
            ref={(ref) => {
              anime({
                targets: ref,
                opacity: 1,
                translateY: -160,
                easing: 'spring(1, 80, 10, 0)',
                delay: 990,
                duration: 400,
              })
            }}
						style={{
							color: '#777',
						}}
          >
            <MotionText
              text="an engineer who likes cats"
              delay={1160}
              cooltime={30}
              fontSize={16}
            />
          </div>

          <div style={{
						marginTop: '10px',
						display: 'grid',
						gridTemplateColumns: 'repeat(4, 30px)',
						placeContent: 'center',
						gap: '14px',
					}}>
            <Link
							delay={1280}
							icon={<TwitterIcon style={{
								fontSize: `${icon_size - 6}px`,
								padding: '4px 0',
								cursor: 'pointer',
							}} />}
							text="Twitter"
							href="https://twitter.com/jpnykw"
						/>
            <Link
							delay={1340}
							icon={<GitHubIcon style={{
								fontSize: `${icon_size - 6}px`,
								padding: '4px 0',
								cursor: 'pointer',
							}} />}
							text="GitHub"
							href="https://github.com/jpnykw"
						/>
            <Link
							delay={1400}
							icon={<YouTubeIcon style={{
								fontSize: `${icon_size}px`,
								padding: '1px 0',
								cursor: 'pointer',
							}} />}
							text="YouTube"
							href="https://www.youtube.com/channel/UCmpA3l3QF0VI4nvNVADXoyg/featured"
						/>
            <Link
							delay={1460}
							icon={<SoundCloudIcon style={{
								fontSize: `${icon_size}px`,
								padding: '1px 0',
								cursor: 'pointer',
							}} />}
							text="SoundCloud"
							href="https://soundcloud.com/jpnykw"
						/>
          </div>
        </div>
      </Contents>
    </>
  )
}

export default AboutMe
