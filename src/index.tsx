import * as React from 'react';
import * as ReactDOM from 'react-dom';
import styled from 'styled-components';

import './assets/css/font.css';
import './assets/css/index.css';

// pages for router
import AboutMe from './components/AboutMe';
import Works from './pages/Works';

const App: React.FC<{}> = () => {
  return (
    <>
      <StyledAboutMe />
      <Works />
    </>
  );
};

// styling
const StyledAboutMe = styled(AboutMe)`
  background: red;
  width: 100%;
`;

ReactDOM.render(<App />, document.querySelector('#root'));

