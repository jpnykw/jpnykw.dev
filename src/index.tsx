import * as React from 'react';
import * as ReactDOM from 'react-dom';

import styled from 'styled-components';

import './assets/css/font.css';
import './assets/css/index.css';

// pages for router
import About from './pages/About';
import Works from './pages/Works';

const App: React.FC<{}> = () => {
  return (
    <>
      <About />
			<Margin />
      <Works />
    </>
  );
};

// styling
const StyledAbout = styled(About)`
  background: red;
  width: 100%;
`;

const Margin = styled.div`
  margin: 100;
`;

ReactDOM.render(<App />, document.querySelector('#root'));

