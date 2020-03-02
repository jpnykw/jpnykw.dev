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
import Typography from '@material-ui/core/Typography';
/* @material-ui icons */
import GitHubIcon from '@material-ui/icons/GitHub';

interface ProjectCardProps {
  thumbnail: string;
  title: string;
  date: string;
  demo: string;
  link: string;
  tags: string[];
  description: {
    about: string;
    detail: string;
  };
}

const GetTagColor = (type: string) => {
  switch (type) {
    /*
    default:
      return 'red';
    */

    default:
      return 'primary';
  }

  throw new Error(`undefined type: ${type}`)
}

const ProjectCard: React.FC<ProjectCardProps> = (props) => {
  const detail = props.description.detail.split('\n');

  const [isOpen, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
            props.tags.map(tag => {
              return (
                <StyledChip
                  key={tag}
                  label={tag}
                  color={'primary'}
                  size="small"
                />
              );
            })
          }

          <Typography variant="body2" color="textSecondary" component="p">
            {props.description.about}
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions onClick={() => open(props.link)}>
        <Button size="small" color="primary">
          ソースコード
        </Button>
      </CardActions>

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
            {
              detail.map((text, id) => {
                return (
                  <Typography gutterBottom key={id} variant="h5" component="h2">
                    {text}
                  </Typography>
                );
              })
            }
          </CardContent>
        </StyledModalCard>
      </Modal>
    </StyledCard>
  );
};

export default ProjectCard;

/* Styling */
const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
`;

const StyledModalCard = styled(Card)`
  background: #666;
  color: #f0f0f0;

  height: 80%;
  width: 60%;

  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  text-align: center;
`;

const StyledCardMedia: typeof CardMedia = styled(CardMedia)`
  height: 170;
  width: 100%;
`;

const StyledModalCardMedia: typeof CardMedia = styled(CardMedia)`
  height: 40%;
`;

const StyledChip: typeof Chip = styled(Chip)`
  margin: 15 2;
`;

const StyledImg = styled.img`
  margin: 15 0;
  width: 96%;
`;

const StyledTypography = styled(Typography)`
  padding-bottom: 15;
`;

