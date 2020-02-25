import * as React from 'react';
import * as ReactDOM from 'react-dom';
import styled from 'styled-components';
/* @material-ui components */
// import Grid from '@material-ui/core/Grid';
// import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';

/* original components */
import AboutMe from './components/AboutMe.tsx';
import ProjectCard from './components/ProjectCard.tsx';
/* resources */
import Projects from './assets/json/projects.json';
import Icon from './assets/images/icon.png';
import RustReversi from './assets/images/t_rust_reversi.png';
import ShaderEditor from './assets/images/t_shader_editor.png';
import Ccbc from './assets/images/t_ccbc.png';
import Aura from './assets/images/t_aura.png';
import SmartVJ from './assets/images/t_smart_vj.jpg';
import EChat from './assets/images/t_e_chat.png';
import Plat from './assets/images/t_plat.png';

const GetThumbnail = (type: any) => {
  switch (type) {
    case 'rust_reversi':
      return RustReversi;
    case 'shader_editor':
      return ShaderEditor;
    case 'ccbc':
      return Ccbc;
    case 'aura':
      return Aura;
    case 'smart_vj':
      return SmartVJ;
    case 'e_chat':
      return EChat;
    case 'plat':
      return Plat;
  }
}

console.log('styled', styled);

const StyledGrid = styled(Grid)`
  padding-top: 20;
`;


const App = () => {
  return (
    <div>
      <Grid container alignItems="center" justify="center" spacing={4}>
        <AboutMe />
      </Grid>
      <StyledGrid container alignItems="center" justify="center" spacing={4}>
        {Object.keys(Projects).map(key => (
          <Grid item key={key}>
            <ProjectCard
              link={Projects[key].link}
              demo={Projects[key].demo }
              thumbnail={GetThumbnail(Projects[key].thumbnail)}
              title={Projects[key].title}
              date={Projects[key].date}
              languages={Projects[key].languages}
              description={Projects[key].description}
            ></ProjectCard>
          </Grid>
        ))}
      </StyledGrid>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));
