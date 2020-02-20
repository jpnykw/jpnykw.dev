import React from 'react';
import styled from 'styled-components';

/* components */
import {
  Avatar,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActionArea,
  Typography
} from '@material-ui/core';

/* icons */
import {
  TwitterIcon
} from '@material-ui/icons';

const StyledCard = styled(Card)`
  max-width: 350;
`;

const About = (props) => {
  return (
    <StyledCard>
      <CardActionArea>
        <CardMedia
          component="img"
          image={props.thumbnail}
        />

        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>

          <Typography variant="body2" color="textSecondary" component="p">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </StyledCard>
  );
};

export default About;

