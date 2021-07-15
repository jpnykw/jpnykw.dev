import * as React from 'react'
import anime from 'animejs'
import styled from 'styled-components'
/* @material-ui components */
import IconButton from '@material-ui/core/IconButton'

interface Props {
  icon: JSX.Element
  text: string
  href: string
  delay: number
}

const Link: React.FC<Props> = (props) =>
  (
    <StyledButton
      aria-label={props.text}
      onClick={() => open(props.href)}

      ref={(ref) => {
        anime({
          targets: ref,
          opacity: 1,
          translateY: -150,
          easing: 'spring(1, 80, 10, 0)',
          delay: props.delay,
          duration: 340,
        })
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

export default Link

const StyledButton = styled(IconButton)`
  margin: 0 5;
  opacity: 0;

  svg {
    color: white;
  }
`

