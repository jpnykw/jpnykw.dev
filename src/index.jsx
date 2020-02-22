import React from 'react';
import ReactDOM from 'react-dom';
/* @material-ui components */
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
/* original components */
import ProjectCard from './components/Project';
/* resources */
import Projects from './assets/json/projects.json';
import Icon from './assets/images/icon.png';
import RustReversi from './assets/images/t_rust_reversi.png';
import ShaderEditor from './assets/images/t_shader_editor.png';
import Ccbc from './assets/images/t_ccbc.png';
import Aura from './assets/images/t_aura.png';

const GetThumbnail = type => {
  switch (type) {
    case 'rust_reversi':
      return RustReversi;
    case 'shader_editor':
      return ShaderEditor;
    case 'ccbc':
      return Ccbc;
    case 'aura':
      return Aura;
  }
}

const App = () => {
  return (
    <div>
      <Grid container alignItems="center" justify="center" spacing={4}>
        {Object.keys(Projects).map(key => (
          <Grid item key={key}>
            <ProjectCard
              link={Projects[key].link}
              thumbnail={GetThumbnail(Projects[key].thumbnail)}
              title={Projects[key].title}
              date={Projects[key].date}
              languages={Projects[key].languages}
              description={Projects[key].description}
            ></ProjectCard>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));

