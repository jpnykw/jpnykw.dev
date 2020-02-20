import React from 'react';
import styled from 'styled-components';
import {
  Avatar,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActionArea,
  Chip,
  Typography
} from '@material-ui/core';
import {
  TwitterIcon
} from '@material-ui/icons';

const StyledCard = styled(Card)`
  max-width: 350;
  margin: 10;
`;

const StyledCardMedia = styled(CardMedia)`
  max-height: 200;
`;

const StyledChip = styled(Chip)`
  margin: 5 2;
`;

const About = (props) => {
  return (
    <StyledCard>
      <CardActionArea>
        <StyledCardMedia
          component="img"
          image={props.thumbnail}
        />

        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>

          <Typography variant="body2" color="textSecondary" component="p">
            {props.date}
          </Typography>

          {
            props.languages.map(lang => {
              return (
                <StyledChip key={lang} label={lang} color="primary" size="small" />
              );
            })
          }

          <Typography variant="body1" color="textSecondary" component="p">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </StyledCard>
  );
};

export default About;

