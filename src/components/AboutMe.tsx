import React from 'react';
import styled from 'styled-components';
/* @material-ui components */
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import Chip from '@material-ui/core/Chip';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SvgIcon from '@material-ui/core/SvgIcon';
// import Container from '@material-ui/core/Container';
import ShareIcon from '@material-ui/icons/Share';
/* */
import IconJs from 'simple-icons/icons/javascript'
import IconRust from 'simple-icons/icons/rust'
/* resources */
import Icon from '../assets/images/icon.png';

const AboutMe: React.FC<{}> = (props) => {
  return (
    <Container>
      <Grid container alignItems="center" justify="center">
        <Button style={{borderRadius: 100}}>
          <img src={Icon} style={{borderRadius: 100}} />
        </Button>
      </Grid>

      <Typography component="h1" variant="h5" align="center">
        Haruto Hirakawa
      </Typography>

      <Typography variant="body1" component="h1" align="center">
        Skills Set
      </Typography>

      <StyledContainer maxWidth="sm">
        <StyledChip label="C" size="small" />
        <StyledChip avatar={<Avatar>R</Avatar>} label="Rust" size="small" />
        <StyledChip label="C++" size="small" />
        <StyledChip label="Python" size="small" />
        <StyledChip label="JavaScript" size="small" />
        <StyledChip label="AfterEffects" size="small" />
        <StyledChip label="Blender" size="small" />
      </StyledContainer>
    </Container>
  );
};

export default AboutMe;

/* Styling */
const StyledContainer = styled(Container)`
  text-align: center;
`;

const StyledChip = styled(Chip)`
  margin: 15 2;
`;

const StyledAvatar = styled(Avatar)`
  height: 120 !important;
  width: 120 !important;
`;
