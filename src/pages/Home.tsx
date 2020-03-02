import * as React from 'react';
import * as ReactDOM from 'react-dom';
import styled from 'styled-components';

/* @material-ui components */
import {
  Container,
  Typography
} from '@material-ui/core';

/* original components */
import AboutMe from '../components/AboutMe';
import ProjectCard from '../components/ProjectCard';

const Home: React.FC<{}> = (props) => {
  return (
    <div>
      <Container maxWidth="sm">
        <Typography component="h1" variant="h2" align="center">
          About Me
        </Typography>
      </Container>

      <AboutMe />
    </div>
  );
};

export default Home;

