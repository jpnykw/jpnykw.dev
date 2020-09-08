import React from 'react'
import anime from 'animejs'
import styled from 'styled-components'
/* @material-ui components */
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CardActionArea from '@material-ui/core/CardActionArea'
import Chip from '@material-ui/core/Chip'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import SvgIcon from '@material-ui/core/SvgIcon'
/* components */
import MotionText from '../components/Text'
/* resources */
import '../assets/css/font.css'
import Icon from '../assets/images/icon.png'

const AboutMe: React.FC<{}> = (props) => {
  return (
    <Contents>
			{/* MOTION */}
			<Elements
				className="elements"

				ref={ref => {
					anime({
						targets: '.elements .el',
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
				<div data-x="-200" data-y="-60" className="small circle el" style={{opacity: '0', width: '14px', height: '14px', background: 'rgba(164, 255, 79)'}} />
				<div data-x="200" data-y="190" className="small circle el" style={{opacity: '0', width: '12px', height: '12px', background: 'rgba(79, 255, 164)'}} />
				<div data-x="170" data-y="-260" className="small circle el" style={{opacity: '0', width: '10px', height: '10px', background: 'rgba(255, 164, 79)'}} />

				<div data-x="700" data-y="-400" data-opacity="0.4" className="small circle el" style={{opacity: '0', width: '2px', height: '2px', background: 'rgba(244, 244, 244, 10)'}} />
				<div data-x="-600" data-y="-300" data-opacity="0.4" className="small circle el" style={{opacity: '0', width: '2px', height: '2px', background: 'rgba(244, 244, 244, 10)'}} />
				<div data-x="-600" data-y="250" data-opacity="0.4" className="small circle el" style={{opacity: '0', width: '2px', height: '2px', background: 'rgba(244, 244, 244, 10)'}} />
				<div data-x="500" data-y="340" data-opacity="0.4" className="small circle el" style={{opacity: '0', width: '2px', height: '2px', background: 'rgba(244, 244, 244, 10)'}} />
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

			{/*
      <Typography
				style={{
					position: 'absolute',
					transform: 'translate(-50%, -50%)',
					left: '50%',
					top: '50%',
				}}
			>
				<MotionText
					text="12800000m 1second" // petrification beam :P
					delay={1700}
					cooltime={80}
				/>
      </Typography>
			*/}
    </Contents>
  )
}

export default AboutMe

/* Styling */
const Contents = styled.div`
	text-align: center;
	position: absolute;
	transform: translate(-50%, -50%);
	left: 50%;
	top: 50%;
`

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

const Elements = styled.div`
	text-align: center;
	position: absolute;
	transform: translate(-50%, -50%);
	left: 50%;
	top: 50%;
`

