import React from 'react'
import styled from 'styled-components'
/* @material-ui components */
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Chip from '@material-ui/core/Chip'
import Typography from '@material-ui/core/Typography'
/* @material-ui styles */
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'

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

const ProjectCard: React.FC<ProjectCardProps> = (props) => {
  const theme = createMuiTheme({
    palette: {
      type: 'dark' // default: 'light'
    }
  })

  return (
    <ThemeProvider theme={theme}>
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

            <Typography variant="body2" component="p">
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

        <CardActions onClick={() => open(props.link)}>
          <Button size="small">Source</Button>
        </CardActions>
      </StyledCard>
    </ThemeProvider>
  )
}

export default ProjectCard

/* Styling */
const StyledCard = styled(Card)`
  flex-direction: column;
  display: flex;
`

const StyledCardMedia: typeof CardMedia = styled(CardMedia)`
  height: 170;
  width: 100%;
`

const StyledChip: typeof Chip = styled(Chip)`
  background: #5a4e91 !important;
  margin: 15 2;
`

