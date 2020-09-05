import * as React from 'react';
import * as ReactDOM from 'react-dom';
import styled from 'styled-components';
// import { Transition, animated } from 'react-spring';

import './assets/css/font.css';
import './assets/css/index.css';

// react router modules
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from 'react-router-dom';

// material ui components
import {
  AppBar,
  Button,
  Drawer,
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography
} from '@material-ui/core';

import {
  Menu as MenuIcon
} from '@material-ui/icons';

// pages for router
import Home from './pages/Home';
import Works from './pages/Works';

const App: React.FC<{}> = () => {
  const [isOpen, setOpen] = React.useState(false);

  const SideList = (
    <div>
      <StyledList>
        <Link to="/">
          <ListItem button>
            <ListItemText primary="Home" />
          </ListItem>
        </Link>

        <Link to="/works">
          <ListItem button>
            <ListItemText primary="Works" />
          </ListItem>
        </Link>
      </StyledList>
    </div>
  );

  return (
    <div>
      <Home />
      <Works />
    </div>
  );
};

// styling
const StyledGrid = styled(Grid)`
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  font-size: 23;
`;

const StyledList = styled(List)`
  width: 250;
`;

const Margin = styled.div`
  height: 30;
`;

ReactDOM.render(<App />, document.querySelector('#root'));

