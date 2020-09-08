import * as React from 'react'
import * as ReactDOM from 'react-dom'
import anime from 'animejs'
import styled from 'styled-components'
/* @material-ui components */
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'

interface Props {
  icon: any,
  text: string,
  href: string,
  delay: number,
}

const Link: React.FC<Props> = (props) => {
  return (
    <StyledButton
      aria-label={props.text}
      onClick={() => open(props.href)}

      ref={ref => {
        anime({
          targets: ref,
          opacity: 1,
          delay: props.delay
        })
      }}
    >
      {props.icon}
    </StyledButton>
  )
}

export default Link

const StyledButton = styled(IconButton)`
  margin: 0 5;
  opacity: 0;

  svg {
    color: white;
  }
`

