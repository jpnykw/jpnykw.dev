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
/*
const PetrificationWeapon = () => {
  const ref = React.useRef()

  useFrame(() => {
		ref.current.rotation.y += 0.01
		ref.current.rotation.z += 0.01
	})

  return (
    <mesh
      ref={ref}
			rotation={[0, 0, 0]}
		>
			<torusKnotBufferGeometry attach="geometry" args={[0.5, 0.15, 150, 32]} />
			<meshStandardMaterial
				attach='material'
				color='#0e1219'
			/>
    </mesh>
  )
}
*/

// Main
const App: React.FC<{}> = () => {
  return (
    <>
			{/*
			<Canvas
				shadowMap
				style={{
					position: 'fixed',
					left: 0,
					top: 0,
				}}
			>
				 <pointLight
					color='#ffffff'
					intensity={1}
					position={[0, 70, 130]}
         />
				<PetrificationWeapon />
			</Canvas>
			*/}

			<About />

			{/*
			<Margin />

			<Works />
			*/}
    </>
  )
}

// styling
const Margin = styled.div`
  margin: 100;
`

ReactDOM.render(<App />, document.querySelector('#root'))

