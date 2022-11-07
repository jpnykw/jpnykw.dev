import React from 'react'
import YouTube from 'react-youtube'

const Wtf = () => (
	<YouTube
		videoId='-ZIumoVIzZ8'
		opts={{
			height: `${window.innerHeight * 0.7}px`,
			width: `${window.innerWidth * 0.7}px`,
		}}
		style={{
			position: 'absolute',
			transform: 'translate(-50%, -50%)',
			left: '50%',
			top: '50%',
		}}
	/>
)

export default Wtf

