import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import styled from 'styled-components'

import About from './pages/About'
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

const App = () => {
  return (
    <>
			<BrowserRouter>
				<Routes>
					<Route index element={<About />} />
					<Route path='wtf' element={<Wtf />} />
				</Routes>
			</BrowserRouter>
			<Credit className="credit">2022 &copy; jpnykw</Credit>
    </>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'))

