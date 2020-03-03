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
      <Container>
        <AboutMe />
      </Container>
    </div>
  );
};

export default Home;

