import React, { useEffect, useState, useCallback } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import styled from 'styled-components'

import About from './pages/About'
import NotFound from './pages/NotFound'
import Wtf from './pages/Wtf'
import './assets/css/font.css'
import './assets/css/index.css'

const Credit = styled.div`
  width: 100%;
  text-align: center;
	height: 50px;
	opacity: 0;
  animation: fade-in 400ms 2000ms forwards;

	position: absolute;
	bottom: 0;
`

const Sh = styled.div`
	background: black;
	width: 100vw;
	height: 50vh;
	z-index: 1;

	position: absolute;
	${({ pos, y }: { pos: 'bottom' | 'top', y: number }) => `
		${pos}: ${-y}px;
		left: 50%;
		transform: translateX(-50%);
	`}
`

const MaxY = innerHeight / 2

const App = () => {
	const [y, setY] = useState<number | null>(null)

	const animation = useCallback(() => {
		setY((y) => y === null ? null : y + (MaxY - y) / 14)
	}, [])

  // @ts-ignore
	useEffect(() => {
		if (y === null) return setTimeout(() => setY(0), 460)
		if (MaxY - y < 1) return null
		requestAnimationFrame(animation)
	}, [y])

  return (
    <>
			<Sh pos={'bottom'} y={y || 0} />
			<Sh pos={'top'} y={y || 0} />
			<BrowserRouter>
				<Routes>
					<Route index element={<About />} />
					<Route path='wtf' element={<Wtf />} />
          <Route path='*' element={<NotFound />} />
				</Routes>
			</BrowserRouter>
			<Credit className="credit">2022 &copy; jpnykw</Credit>
    </>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'))

