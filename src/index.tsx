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
  const [state, setState] = React.useState({
    left: false,
  });

  type DrawerSide = 'top' | 'left' | 'bottom' | 'right';
  const toggleDrawer = (side: DrawerSide, open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event && event.type === 'keydown' &&
      (
        (event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift'
      )
    ) {
      return;
    }

    setState({...state, [side]: open});
  };

  const SideList = (
    <div>
      <List>
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
      </List>
    </div>
  );

  return (
    <Router>
      <StyledAppBar position="relative" color="inherit">
        <Toolbar>
          <IconButton aria-label="menu" onClick={toggleDrawer('left', true)}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </StyledAppBar>

      <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
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
const StyledAppBar = styled(AppBar)`
  margin-bottom: 20;
`;

ReactDOM.render(<App />, document.querySelector('#root'));
