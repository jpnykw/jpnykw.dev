import React from 'react'
import styled from 'styled-components'
/* @material-ui components */
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Chip from '@material-ui/core/Chip'
import Typography from '@material-ui/core/Typography'
/* @material-ui styles */
import { makeStyles, createStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles'

interface ProjectCardProps {
  thumbnail: string
  title: string
  date: string
  demo: string
  link: string
  tags: string[]
  description: {
    about: string
    detail: string
  }
}

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      color: '#f9f9f9',
    },
    date: {
      fontSize: '1.1em',
    },
  })
)

const theme = createMuiTheme({
  palette: {
    type: 'dark', // default: 'light'
    primary: {
      main: '#3f51b5',
    },
  }
})

const ProjectCard: React.FC<ProjectCardProps> = (props) => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <StyledCard className={classes.root}>
        <CardActionArea onClick={() => open(props.link)}>
          <StyledCardMedia
            component="img"
            image={props.thumbnail}
          />

          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.title}
            </Typography>

            <Typography color="primary" className={classes.date}>
              {props.date}
            </Typography>

            {
              props.tags.map((tag) =>
                (
                  <StyledChip
                    key={tag}
                    label={tag}
                    size="small"
                  />
                )
              )
            }

            <Typography variant="body2" component="p">
              {props.description.about}
            </Typography>
          </CardContent>
        </CardActionArea>
      </StyledCard>
    </ThemeProvider>
  )
}

export default ProjectCard

/* Styling */
const StyledCard = styled(Card)`
  flex-direction: column;
  display: flex;
  padding-bottom: 10;
`

const StyledCardMedia: typeof CardMedia = styled(CardMedia)`
  height: 170;
  width: 100%;
`

const StyledChip: typeof Chip = styled(Chip)`
  background: ${theme.palette.primary.main} !important;
  margin: 15 2;

  span {
    color: #f9f9f9;
    font-size: 0.9em;
  }
`

