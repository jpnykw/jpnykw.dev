import React from 'react'
import styled from 'styled-components'
import anime from 'animejs'

interface Props {
  text: string
  delay: number
  cooltime: number
}

const Text: React.FC<Props> = (props) =>
  (
    <>
      {props.text.split('').map((text, id) => (
        <StyledSpan
          key={id}

          ref={(ref) => {
            const delay = props.delay + props.cooltime * id

            anime({
              targets: ref,
              opacity: 1,
              delay,
            })
          }}
        >
          {text}
        </StyledSpan>
      )
      )}
    </>
  )

const StyledSpan = styled.span`
  font-size: 30;
  opacity: 0;
`

export default Text

