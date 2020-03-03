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
  Drawer,
  Divider,
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
      <IconButton aria-label="menu" onClick={() => setOpen(true)}>
        <MenuIcon />
      </IconButton>

      {/*
      <AppBar position="fixed" color="inherit">
        <Toolbar>
          <IconButton aria-label="menu" onClick={() => setOpen(true)}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
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
      </Switch>
    </Router>
  );
};

// styling
const StyledList = styled(List)`
  width: 250;
`;

const Margin = styled.div`
  height: 80;
`;

ReactDOM.render(<App />, document.querySelector('#root'));

