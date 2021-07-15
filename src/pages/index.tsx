import React, { Suspense } from 'react'
import * as ReactDOM from 'react-dom'
import styled from 'styled-components'
/* pages */
const About = React.lazy(() => import('./About'))
const Works = React.lazy(() => import('./Works'))
const History = React.lazy(() => import('./History'))
/* resources */
import '../assets/css/font.css'
import '../assets/css/index.css'
/* extend */
import '../lib/date.extend.ts'
/* scroll */
import { useInView } from 'react-intersection-observer';

// Main
const App = () => {
  const [ref, inView] = useInView({
    rootMargin: '-50px',
    triggerOnce: true,
  });

  return (
    <>
      <Suspense fallback={<Loading>(=^・^=)</Loading>}>
        <section>
          <About />

          <StyledDiv
            ref={ref}
            style={{
              opacity: inView ? 1 : 0,
              animation: inView ? 'fade-in 600ms' : 0,
            }}
          >
            <Works />
          </StyledDiv>

          <History />

          <Credit className="credit">2020 &copy; jpnykw</Credit>

        </section>
      </Suspense>
    </>
  )
}

// styling
const Loading = styled.div`
  opacity: 0.2;
  font-size: 14px;
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
`

const Credit = styled.div`
  width: 100%;
  margin-bottom: 20;
  text-align: center;
  margin-top: 100;
`

const StyledDiv = styled.div`
  opacity: 0;
`

ReactDOM.render(<App />, document.querySelector('#root'))

