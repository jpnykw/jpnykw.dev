import * as React from 'react';
import * as ReactDOM from 'react-dom';
import styled from 'styled-components';

// react router modules
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

// material ui components
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography
} from '@material-ui/core';

import {
  Menu as MenuIcon
} from '@material-ui/icons';

// original components
import Home from './pages/Home';

const App: React.FC<{}> = () => {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start"aria-label="menu">
            <StyledMenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Switch>
        <Route path="/">
          <Home />
        </Route>

        <Route path="/test">
          <h1>test</h1>
        </Route>
      </Switch>
    </Router>
  );
};

// styling
const StyledMenuIcon = styled(MenuIcon)`
  color: white;
`;

ReactDOM.render(<App />, document.querySelector('#root'));

