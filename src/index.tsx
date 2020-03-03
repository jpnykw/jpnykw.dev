import * as React from 'react';
import * as ReactDOM from 'react-dom';
import styled from 'styled-components';
import './assets/css/font.css';

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
    <Router>
      <Grid container spacing={3}>
        {[
          {text: 'Home', path: '/'},
          {text: 'Works', path: '/works'},
          {text: 'History', path: '/history'},
          {text: 'Contact', path: '/contact'},
        ].map((data, value) => (
          <StyledGrid item xs={3} key={value}>
            <Link to={data.path}>{data.text}</Link>
          </StyledGrid>
        ))}
      </Grid>

      {/*
      <IconButton aria-label="menu" onClick={() => setOpen(true)}>
        <MenuIcon />
      </IconButton>
      */}

      <Margin />

      <Drawer open={isOpen} onClose={() => setOpen(false)}>
        {SideList}
      </Drawer>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/works">
          <Works />
        </Route>

        <Route path="/history">
          <h1>History</h1>
        </Route>

        <Route path="/contact">
          <h1>Contact</h1>
        </Route>
      </Switch>
    </Router>
  );
};

// styling
const StyledGrid = styled(Grid)`
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  font-size: 20;
`;

const StyledList = styled(List)`
  width: 250;
`;

const Margin = styled.div`
  height: 80;
`;

ReactDOM.render(<App />, document.querySelector('#root'));

