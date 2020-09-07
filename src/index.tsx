import * as React from 'react'
import * as ReactDOM from 'react-dom'
import styled from 'styled-components'
import { Canvas, useFrame } from 'react-three-fiber'

import './assets/css/font.css'
import './assets/css/index.css'

// pages for router
import About from './pages/About'
import Works from './pages/Works'

// Background
const Thing = () => {
  const ref = React.useRef()

  useFrame(() => {
		ref.current.rotation.y += 0.01
	})

  return (
    <mesh
      ref={ref}
			rotation={[0, 0, 0]}
		>
			<boxGeometry attach='geometry' args={[1, 1, 1]} />
			<meshNormalMaterial attach='material' />
    </mesh>
  )
}

// Main
const App: React.FC<{}> = () => {
  return (
    <>
			<Canvas
				style={{
					position: 'fixed',
					left: 0,
					top: 0,
				}}
			>
				<Thing />
			</Canvas>

			<StyledAbout />
    </>
  )
}

// styling
const StyledAbout = styled(About)`
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
`

const Margin = styled.div`
  margin: 100;
`

ReactDOM.render(<App />, document.querySelector('#root'))

