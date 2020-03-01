import * as React from 'react';
import * as ReactDOM from 'react-dom';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive'
/* @material-ui components */
import { Avatar } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Container } from '@material-ui/core';
/* original components */
import AboutMe from './components/AboutMe';
import ProjectCard from './components/ProjectCard';
/* resources (json) */
import Projects from './assets/json/projects.json';
/* resources (img) */
import Icon from './assets/images/icon.png';
import RustReversi from './assets/images/t_rust_reversi.png';
import ShaderEditor from './assets/images/t_shader_editor.png';
import Ccbc from './assets/images/t_ccbc.png';
import Aura from './assets/images/t_aura.png';
import SmartVJ from './assets/images/t_smart_vj.jpg';
import EChat from './assets/images/t_e_chat.png';
import Plat from './assets/images/t_plat.png';

const GetThumbnail = (type: string) => {
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

  // By throwing exception, return type of `GetThumbnail` is fixed to `string`.
  throw new Error(`undefined type: ${type}`)
}

const App: React.FC<{}> = () => {
  return (
    <div>
      <Container maxWidth="sm">
        <Typography component="h1" variant="h2" align="center">
          About Me
        </Typography>
      </Container>

      <AboutMe />

      <Container maxWidth="sm">
        <Typography component="h1" variant="h2" align="center">
          Projects
        </Typography>
      </Container>

      <StyledContainer maxWidth="md">
        <Grid container spacing={4}>
          {Object.entries(Projects).map(([key, project]) => (
            <Grid item key={key} xs={12} sm={6} md={4}>
              <ProjectCard
                link={project.link}
                demo={project.demo }
                title={project.title}
                date={project.date}
                tags={project.tags}
                description={project.description}
                thumbnail={GetThumbnail(project.thumbnail)}
              ></ProjectCard>
            </Grid>
          ))}
        </Grid>
      </StyledContainer>
    </div>
  );
}

/* Styling */
const StyledContainer = styled(Container)`
  padding-top: 20;
  padding-bottom: 20;
`;

/* Rendering */
ReactDOM.render(<App />, document.querySelector('#root'));

