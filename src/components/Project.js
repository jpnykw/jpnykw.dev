import React from 'react';
import styled from 'styled-components';

import {
  Avatar,
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  Chip,
  Collapse,
  IconButton,
  Typography
} from '@material-ui/core';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const StyledCard = styled(Card)`
  ${props => props['alia-expanded'] ? 'max-height: 500' : ''};
  max-width: 300;
  margin: 10;
`;

const StyledCardMedia = styled(CardMedia)`
  max-height: 200;
  max-width: 300;
`;

const StyledChip = styled(Chip)`
  margin: 15 2;
`;

const StyledIconButton = styled(IconButton)`
  transform: rotate(${props => props['aria-expanded'] ? 180 : 0}deg);
`;

const About = (props) => {
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <StyledCard>
      <CardActionArea onClick={() => open(props.link)}>
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
            {props.description.about}
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions disableSpacing>
        <StyledIconButton
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </StyledIconButton>
      </CardActions>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            {props.description.detail}
          </Typography>
        </CardContent>
      </Collapse>
    </StyledCard>
  );
};

export default About;

