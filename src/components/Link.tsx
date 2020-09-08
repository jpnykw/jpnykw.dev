import * as React from 'react'
import * as ReactDOM from 'react-dom'
import styled from 'styled-components'
/* @material-ui components */
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'

interface Props {
  icon: any,
  text: string,
  href: string,
}

const Link: React.FC<Props> = (props) => {
  return (
    <StyledButton aria-label={props.text}>
      {props.icon}
    </StyledButton>
  )
}

export default Link

const StyledButton = styled(IconButton)`
  margin: 0 4;

  svg {
    color: white;
  }
`
