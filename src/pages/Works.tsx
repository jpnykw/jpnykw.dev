import * as React from 'react';
import * as ReactDOM from 'react-dom';
import styled from 'styled-components';

// components
import {
  Avatar,
  Container,
  Grid,
  Typography
} from '@material-ui/core';
import ProjectCard from '../components/ProjectCard';

// resources
import Projects from '../assets/json/projects.json';
import Icon from '../assets/images/icon.png';
import RustReversi from '../assets/images/t_rust_reversi.png';
import ShaderEditor from '../assets/images/t_shader_editor.png';
import Ccbc from '../assets/images/t_ccbc.png';
import Aura from '../assets/images/t_aura.png';
import SmartVJ from '../assets/images/t_smart_vj.jpg';
import EChat from '../assets/images/t_e_chat.png';
import Plat from '../assets/images/t_plat.png';

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

const Works: React.FC<{}> = (props) => {
  return (
    <div>
      <Container maxWidth="sm">
        <Typography component="h1" variant="h2" align="center">
          Works
        </Typography>
      </Container>

      <StyledContainer maxWidth="md">
        <Grid container spacing={4}>
          {Object.entries(Projects).map(([key, project]) => (
            <Grid item key={key} xs={12} sm={6} md={4}>
              {/* <Link to="/project"> */}
                <ProjectCard
                  link={project.link}
                  demo={project.demo }
                  title={project.title}
                  date={project.date}
                  tags={project.tags}
                  description={project.description}
                  thumbnail={GetThumbnail(project.thumbnail)}
                ></ProjectCard>
              {/* </Link> */}
            </Grid>
          ))}
        </Grid>
      </StyledContainer>
    </div>
  );
};

export default Works;

// Styling
const StyledContainer = styled(Container)`
  padding-top: 20;
  padding-bottom: 20;
`;

