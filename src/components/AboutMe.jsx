import React from 'react';
import styled from 'styled-components';
/* @material-ui components */
import Avatar from '@material-ui/core/Avatar';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
// import Container from '@material-ui/core/Container';
/* resources */
import Icon from '../assets/images/icon.png';

const StyledDiv = styled.div`
  margin-top: 30;
`;

const StyledAvatar = styled(Avatar)`
  height: 120 !important;
  width: 120 !important;
`;

const AboutMe = (props) => {
  return (
    <StyledDiv>
    {/*<Container maxWidth="sm">*/}
      <CardActionArea>
        <StyledAvatar src={Icon} />
      </CardActionArea>
    {/*</Container>*/}
      <Typography variant="h5" align="center">
        ぷにぷに
      </Typography>
    </StyledDiv>
  );
};

export default AboutMe;

