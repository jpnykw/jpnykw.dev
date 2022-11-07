import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

import About from './About'
import '../assets/css/font.css'
import '../assets/css/index.css'

const Credit = styled.div`
  width: 100%;
  text-align: center;
	height: 50px;
	opacity: 0;
  animation: fade-in 400ms 2000ms forwards;
`

const App = () => {
  return (
    <>
			<About />
			<Credit className="credit">2022 &copy; jpnykw</Credit>
    </>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'))

