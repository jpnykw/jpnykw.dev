import React from 'react';
import ReactDOM from 'react-dom';
/* @material-ui components */
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
/* original components */
import Project from './components/Project';
/* resources */
import Icon from './assets/images/icon.png';
import RustReversi from './assets/images/t_rust_reversi.png';
import ShaderEditor from './assets/images/t_shader_editor.png';

const App = () => {
  return (
    <div>
      <Typography component="h2" variant="h2" align="center" color="textPrimary">
        projects
      </Typography>

      <Grid container alignItems="center" justify="center" spacing={4}>
        <Grid item key={1}>
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
        </Grid>

        <Grid item key={2}>
          <Project
            link='https://github.com/jpnykw/glsl-editor'
            thumbnail={ShaderEditor}
            title='WebGL Shader Editor'
            date='Dec 14, 2019'
            languages={['JavaScript', 'GLSL']}
            description={{
              about: 'The online code editor for GLSL. to use test fragment shader of WebGL.',
              detail: 'This is the first project of using Rust. Graphics by piston.'
            }}
          ></Project>
        </Grid>

        <Grid item key={3}>
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
        </Grid>
      </Grid>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));

