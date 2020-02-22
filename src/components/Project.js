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

const StyledCard = styled(Card)`
  ${props => props['alia-expanded'] ? 'max-height: 500' : ''};
  max-width: 300;
  margin: 10;
`;

const StyledCardMedia = styled(CardMedia)`
  /*
  max-height: 200;
  max-width: 300;
  */

  height: 170;
  width: 300;
`;

const StyledChip = styled(Chip)`
  margin: 15 2;
`;

const StyledIconButton = styled(IconButton)`
  transform: rotate(${props => props['aria-expanded'] ? 180 : 0}deg);
`;

const StyledDiv = styled.div`
  background: #666;
  color: #f0f0f0;

  width: 900;

  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  text-align: center;
`;

const StyledImg = styled.img`
  margin: 15 0;
  width: 96%;
`;

const StyledTypography = styled(Typography)`
  padding-bottom: 15;
`;

const Project = (props) => {
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
        <StyledDiv>
          {/*
          <h2 id="simple-modal-title">Neko is</h2>
          <p id="simple-modal-description">dog</p>
          */}
          <StyledImg src={props.thumbnail} />
          <StyledTypography variant="body2" component="p">
            {props.description.detail}
          </StyledTypography>
        </StyledDiv>
      </Modal>
    </StyledCard>
  );
};

export default Project;

