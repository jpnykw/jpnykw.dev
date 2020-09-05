import React from 'react';
import styled from 'styled-components';
import '../assets/css/font.css';
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
/* resources */
import Icon from '../assets/images/icon.png';

const AboutMe: React.FC<{}> = (props) => {
  return (
    <Container>
      <Grid container alignItems="center" justify="center">
        <img src={Icon} style={{
          width: 180,
          borderRadius: 90,
          marginRight: 30
        }} />

        <Typography component="h3" variant="h3" align="center" style={{
          fontFamily: `'Montserrat', sans-serif`
        }}>
          Haruto Hirakawa
        </Typography>
      </Grid>

      <Margin />

      <Typography component="h4" variant="h4" align="center">
        Skills Set
      </Typography>

      <Typography component="h5" variant="h5" align="center" color="primary">
        Languages
      </Typography>

      <StyledContainer maxWidth="sm">
        {['C', 'C++', 'Rust', 'Python', 'JavaScript'].map((name, index) => (
          <StyledChip key={index} label={name} size="small" />
        ))}

        <Typography component="h5" variant="h5" align="center" color="primary">
          Tools
        </Typography>

        <StyledChip label="AfterEffects" size="small" />
        <StyledChip label="Blender" size="small" />
      </StyledContainer>
    </Container>
  );
};

export default AboutMe;

/* Styling */
const Margin = styled.div`
  margin: 20;
`;

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
