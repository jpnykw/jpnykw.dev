import * as React from 'react'
import * as ReactDOM from 'react-dom'
import styled from 'styled-components'
/* @material-ui components */
import Button from '@material-ui/core/Button'

interface Props {
  text: string,
  href: string,
}

const Link: React.FC<Props> = (props) => {
  return (
    <>
      <Button>{props.text}</Button>
    </>
  )
}

export default Link
