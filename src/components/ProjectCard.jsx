import React from 'react';
import styled from 'styled-components';
/* @material-ui components */
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Chip from '@material-ui/core/Chip';
import Collapse from '@material-ui/core/Collapse';
import Modal from '@material-ui/core/Modal';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
/* @material-ui icons */
import GitHubIcon from '@material-ui/icons/GitHub';

/* Card Styling */
const StyledCard = styled(Card)`
  ${props => props['alia-expanded'] ? 'max-height: 500' : ''};
  max-width: 300;
  margin: 10;
`;

const StyledModalCard = styled(Card)`
  background: #666;
  color: #f0f0f0;

  height: 900;
  width: 700;

  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  text-align: center;
`;

/* CardMedia Styling */
const StyledCardMedia = styled(CardMedia)`
  height: 170;
  width: 300;
`;

const StyledModalCardMedia = styled(CardMedia)`
  height: 400;
  width: 700;
`;

const StyledChip = styled(Chip)`
  margin: 15 2;
`;

const StyledIconButton = styled(IconButton)`
  transform: rotate(${props => props['aria-expanded'] ? 180 : 0}deg);
`;

const StyledDiv = styled.div`
`;

const StyledImg = styled.img`
  margin: 15 0;
  width: 96%;
`;

const StyledTypography = styled(Typography)`
  padding-bottom: 15;
`;

const ProjectCard = (props) => {
  const [isOpen, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <StyledCard>
    {/*<CardActionArea onClick={() => open(props.link)}>*/}
      <CardActionArea onClick={handleOpen}>
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

          <Typography variant="body2" color="textSecondary" component="p">
            {props.description.about}
          </Typography>
        </CardContent>
      </CardActionArea>

      {/*
      <CardActions>
        <Button size="small">
          <GitHubIcon />
        </Button>
      </CardActions>
      */}

      <CardActions onClick={() => open(props.link)}>
        <Button size="small" color="primary">
          ソースコード
        </Button>
      </CardActions>

      {/*
      <CardActions onClick={handleOpen}>
        <Button size="small" color="primary">
          詳細
        </Button>
      </CardActions>
      */}

      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={isOpen}
        onClose={handleClose}
      >
        <StyledModalCard>
          <StyledModalCardMedia
            component="iframe"
            image={props.demo}
          />

          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.description.detail}
            </Typography>
          </CardContent>
        </StyledModalCard>
      </Modal>
    </StyledCard>
  );
};

export default ProjectCard;

