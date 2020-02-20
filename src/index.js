/* components */
import React from 'react';
import ReactDOM from 'react-dom';
import Project from './components/Project';
/* resources */
import Icon from './assets/images/icon.png';

const App = () => {
  return (
    <Project
      thumbnail={Icon}
      title="haruto hirakawa"
      description="I was born in March 5th 2002"
    />
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

