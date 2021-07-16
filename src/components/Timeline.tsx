import React from 'react'
import styled from 'styled-components'

import Timeline from '@material-ui/lab/Timeline'
import TimelineItem from '@material-ui/lab/TimelineItem'
import TimelineSeparator from '@material-ui/lab/TimelineSeparator'
import TimelineConnector from '@material-ui/lab/TimelineConnector'
import TimelineContent from '@material-ui/lab/TimelineContent'
import TimelineDot from '@material-ui/lab/TimelineDot'
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent'

import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper'

const data = [
  {
    when: '2002/03/05',
    logo: '🎂',
    title: '誕生日',
    description: '(=^・^=)',
  },
  {
    when: '2019/05/28',
    logo: '⚡',
    title: '未踏ジュニア採択',
    description: 'SmartVJ の原案が採択されました',
  },
  {
    when: '2019/05/02',
    logo: '⚡',
    title: 'SecHack365採択',
    description: '表現駆動コースに採択されました',
  },
]

const CustomTimeline: React.FC = () => {
  return (
    <>
      <Container maxWidth={'md'}>
        <Timeline align={'alternate'}>
          {
            data.map(({ when, logo, title, description }, index) => {
              return (
                <TimelineItem key={index}>
                  <TimelineOppositeContent>
                    <Typography>{when}</Typography>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot />
                    {
                      index < data.length - 1 &&
                      ( <TimelineConnector /> )
                    }
                  </TimelineSeparator>
                  <TimelineContent>
                    <StyledPaper elevation={3} style={{
                      background: '#3a4043',
                      color: '#e6e6e6',
                    }}>
                      <Typography variant={'h6'} component={'h1'}>{logo} {title}</Typography>
                      <Typography>{description}</Typography>
                    </StyledPaper>
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
