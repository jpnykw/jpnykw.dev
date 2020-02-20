import React from 'react';
import ReactDOM from 'react-dom';
import Project from './components/Project';
import Icon from './assets/images/icon.png';

const App = () => {
  return (
    <div>
      <Project
        thumbnail={Icon}
        title='haruto hirakawa'
        date='March 5th 2002'
        languages={['C', 'Rust', 'Assembly']}
        description='I love cats and not love humans'
      ></Project>

      <Project
        thumbnail={Icon}
        title='haruto hirakawa'
        date='March 5th 2002'
        languages={['C', 'Rust', 'Assembly']}
        description='I love cats and not love humans'
      ></Project>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));

