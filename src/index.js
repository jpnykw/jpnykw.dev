import React from 'react';
import ReactDOM from 'react-dom';

import { Box } from '@material-ui/core'
import Project from './components/Project';

import Icon from './assets/images/icon.png';
import RustReversi from './assets/images/t_rust_reversi.png';
import ShaderEditor from './assets/images/t_shader_editor.png';

const App = () => {
  return (
    <div>
      <Box display="flex" flexDirection="row" p={1} m={1}>
        {/*
        <Box p={1}>
          <Project
            link='https://github.com/jpnykw'
            thumbnail={Icon}
            title='Haruto Hirakawa'
            date='Mar 5, 2002'
            languages={['Neko']}
            description={{
              about: 'I love cats and not love humans. cats are save the world.',
              detail: 'meow meow meow meow meow meow meow'
            }}
          ></Project>
        </Box>
        */}

        <Box p={1}>
          <Project
            link='https://github.com/jpnykw/rust-reversi'
            thumbnail={RustReversi}
            title='Reversi in Rust'
            date='Nov 18, 2019'
            languages={['Rust']}
            description={{
              about: 'The reversi game for player versus computer.',
              detail: 'This is the first project of using Rust. Graphics by piston.'
            }}
          ></Project>
        </Box>

        <Box p={1}>
          <Project
            link='https://github.com/jpnykw/rust-reversi'
            thumbnail={ShaderEditor}
            title='WebGL Shader Editor'
            date='Dec 14, 2019'
            languages={['JavaScript', 'GLSL']}
            description={{
              about: 'The online code editor for GLSL. to use test fragment shader of WebGL.',
              detail: 'This is the first project of using Rust. Graphics by piston.'
            }}
          ></Project>
        </Box>
      </Box>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));

