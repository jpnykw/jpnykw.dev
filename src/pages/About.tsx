import React from 'react';
import anime from 'animejs';
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

/* resources */
import '../assets/css/font.css';
import Icon from '../assets/images/icon.png';

import MotionText from '../components/Text';

const AboutMe: React.FC<{}> = (props) => {
  return (
    <Container>
      <Grid container alignItems="center" justify="center">
        <StyledImg
          src={Icon}

          ref={ref => {
						anime({
					    targets: ref,
							opacity: 1,
							translateY: -50,
						  easing: 'easeInOutExpo',
							// easing: 'spring(1, 80, 10, 0)',
							delay: 1000,
						})
          }}
        />

        {/*
        <Typography component="h3" variant="h3" align="center" style={{
          fontFamily: `'Montserrat', sans-serif`
        }}>
          Haruto Hirakawa
        </Typography>
        */}
      </Grid>

      <Margin />

      <Typography component="h4" variant="h4" align="center">
				<MotionText
					text="Skill Set"
					delay={1800}
					cooltime={30}
				/>
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
const StyledImg = styled.img`
	border-radius: 90px;
	width: 180px;
	opacity: 0;
	position: relative;
	top: 50px;
`

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
