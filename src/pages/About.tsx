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
						  // easing: 'easeInOutExpo',
							easing: 'spring(1, 80, 10, 0)',
							delay: 1000,
							duration: 400,
						})
          }}
        />
      </Grid>

      <Margin />

      <Typography component="h3" variant="h3" align="center">
				<MotionText
					text="Haruto Hirakawa"
					delay={1400}
					cooltime={30}
				/>
      </Typography>
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
  margin: 30;
`;

const StyledContainer = styled(Container)`
  text-align: center;
`;

const StyledChip = styled(Chip)`
  margin: 15 2;
	opacity: 0;
`;

const StyledAvatar = styled(Avatar)`
  height: 120 !important;
  width: 120 !important;
`;
