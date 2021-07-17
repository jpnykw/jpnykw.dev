import * as React from 'react'
import anime from 'animejs'
import styled from 'styled-components'
/* @material-ui components */
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
/* components */
import ProjectCard from '../components/ProjectCard'
// TODO: 作品一覧を DB から取得するように変更する
import Projects from '../assets/json/projects.json'
import RustReversi from '../assets/images/t_rust_reversi.jpg'
import ShaderEditor from '../assets/images/t_shader_editor.jpg'
import Ccbc from '../assets/images/t_ccbc.jpg'
import Aura from '../assets/images/t_aura.jpg'
import SmartVJ from '../assets/images/t_smart_vj.jpg'
import EChat from '../assets/images/t_e_chat.jpg'
import Plat from '../assets/images/t_plat.jpg'

const Works: React.FC = () =>
  (
    <Contents>
      <Typography
        style={{
          textAlign: 'center',
          marginTop: '200px'
        }}
      >
        更新作業中につき作品一覧は表示できないよ
      </Typography>
    </Contents>
  )

export default Works

const Contents = styled.div`
  width: 100%;
`

const StyledGrid = styled(Grid)`
  opacity: 0;
`

