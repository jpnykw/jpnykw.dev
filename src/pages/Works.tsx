import * as React from 'react'
import anime from 'animejs'
import styled from 'styled-components'
/* @material-ui components */
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
/* components */
import Timeline from '../components/Timeline'
import ProjectCard from '../components/ProjectCard'
// TODO: DB から取得するように変更する
import Projects from '../assets/json/projects.json'
import RustReversi from '../assets/images/t_rust_reversi.jpg'
import ShaderEditor from '../assets/images/t_shader_editor.jpg'
import Ccbc from '../assets/images/t_ccbc.jpg'
import Aura from '../assets/images/t_aura.jpg'
import SmartVJ from '../assets/images/t_smart_vj.jpg'
import EChat from '../assets/images/t_e_chat.jpg'
import Plat from '../assets/images/t_plat.jpg'

const GetThumbnail = (type: string) => {
  switch (type) {
    case 'rust_reversi':
      return RustReversi

    case 'shader_editor':
      return ShaderEditor

    case 'ccbc':
      return Ccbc

    case 'aura':
      return Aura

    case 'smart_vj':
      return SmartVJ

    case 'e_chat':
      return EChat

    case 'plat':
      return Plat
  }

  // By throwing exception, return type of `GetThumbnail` is fixed to `string`.
  throw new Error(`undefined type: ${type}`)
}

const Works: React.FC = () =>
  (
    <Contents>
      <Timeline />
      {/*
      <Container maxWidth="md">
        <Grid container spacing={8}>
          {Object.entries(Projects).map(([key, project]) => (
            <StyledGrid item
              key={key}
              xs={12}
              sm={6}
              md={4}

              ref={(ref) => {
                const delay = 2200 + 120 * Number(key)

                anime({
                  targets: ref,
                  opacity: 1,
                  easing: 'easeInOutExpo',
                  duration: 800,
                  delay,
                })
              }}
            >
              <ProjectCard
                link={project.link}
                demo={project.demo }
                title={project.title}
                date={project.date}
                tags={project.tags}
                description={project.description}
                thumbnail={GetThumbnail(project.thumbnail)}
              ></ProjectCard>
            </StyledGrid>
          ))}
        </Grid>
      </Container>
      */}
    </Contents>
  )

export default Works

const Contents = styled.div`
  width: 100%;
`

const StyledGrid = styled(Grid)`
  opacity: 0;
`

