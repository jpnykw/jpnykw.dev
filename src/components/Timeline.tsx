import React from 'react'
import styled from 'styled-components'

import Timeline from '@material-ui/lab/Timeline'
import TimelineItem from '@material-ui/lab/TimelineItem'
import TimelineSeparator from '@material-ui/lab/TimelineSeparator'
import TimelineConnector from '@material-ui/lab/TimelineConnector'
import TimelineContent from '@material-ui/lab/TimelineContent'
import TimelineDot from '@material-ui/lab/TimelineDot'
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent'

import CakeIcon from '@mui/icons-material/Cake'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import ComputerIcon from '@mui/icons-material/Computer';

import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'

const data = [
  {
    icon: <CakeIcon />,
    when: '2002/03/05',
    title: '誕生日',
    description: '(=^・^=)',
  },
  {
    icon: <ThumbUpIcon />,
    when: '2019/05/28',
    title: '未踏ジュニア採択',
    description: 'SmartVJ の原案が採択されました',
  },
  {
    icon: <ThumbUpIcon />,
    when: '2019/05/02',
    title: 'SecHack365採択',
    description: '表現駆動コースに採択されました',
  },
  {
    icon: <ComputerIcon />,
    when: '2020/11/01',
    title: 'Pixiv Sketch 業務委託',
    description: 'Web版 Pixiv Sketch の開発を行っていました',
  }
]

const CustomTimeline: React.FC = () => {
  return (
    <>
      <Container maxWidth={'md'}>
        <Timeline align={'alternate'}>
          {
            data.map(({ when, icon, title, description }, index) => {
              return (
                <TimelineItem key={index}>
                  <TimelineOppositeContent>
                    {when}
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot
                      color={index % 2 == 0 ? 'secondary' : 'primary'}
                      variant='outlined'
                    >
                      {icon === null ? <></> : icon}
                    </TimelineDot>
                    {index < data.length - 1 && <TimelineConnector />}
                  </TimelineSeparator>
                  <TimelineContent>
                    <Typography variant={'h6'} component={'h1'}>{title}</Typography>
                    <Typography>{description}</Typography>
                  </TimelineContent>
                </TimelineItem>
              )
            })
          }
        </Timeline>
      </Container>
    </>
  )
}

export default CustomTimeline

const StyledPaper = styled(Paper)`
  padding: 6px 16px;
`
